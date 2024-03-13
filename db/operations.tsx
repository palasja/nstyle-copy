import { Client, fql, FaunaError, Query } from 'fauna';
import i18next from 'i18next';
import { Item } from '../src/type/feedbackFormType';
import { ServiceCostInfo } from '../src/type/costType';

const getClient = (): Client => {
  return new Client({
    secret: import.meta.env.VITE_APP_FAUNA_KEY,
  });
};
// fql interpolation ${dbName}, no way use it rigth in guery
const getQueryServiceByName = (name: string): Query => {
  switch (i18next.language) {
    case 'ru': {
      return fql`ServicesCost.all().firstWhere(.name == ${name === 'null' ? null : name})`;
    }
    case 'en': {
      return fql`ServicesCostEn.all().firstWhere(.name == ${name === 'null' ? null : name})`;
    }
    case 'be': {
      return fql`ServicesCostBe.all().firstWhere(.name == ${name === 'null' ? null : name})`;
    }
    default:
      throw new Error(`No exist query for ${i18next.language} locale`);
  }
};

export const getServiceByName = async (name: string) => {
  const client = getClient();
  try {
    const response = await client.query(getQueryServiceByName(name));
    return response.data;
  } catch (error) {
    if (error instanceof FaunaError) {
      console.log(error);
    }
  } finally {
    client.close();
  }
};

export const getAllService = async () => {
  const client = getClient();
  let query: Query;
  switch (i18next.language) {
    case 'ru': {
      query = fql`ServicesCost.all()`;
      break;
    }
    case 'en': {
      query = fql`ServicesCostEn.all()`;
      break;
    }
    case 'be': {
      query = fql`ServicesCostBe.all()`;
      break;
    }
    default:
      throw new Error(`No exist query for ${i18next.language} locale`);
  }
  try {
    const response = await client.query(query);
    return response.data;
  } catch (error) {
    if (error instanceof FaunaError) {
      console.log(error);
    }
  } finally {
    client.close();
  }
};

export const newCilientMessage = async (message: Item) => {
  const client = getClient();
  try {
    const response = await client.query(fql`ClientMessages.create(${message})`);
    return response.data;
  } catch (error) {
    if (error instanceof FaunaError) {
      console.log(error);
    }
  } finally {
    client.close();
  }
};

export const changeCostInfo = async (newCostInfo: ServiceCostInfo) => {
  const client = getClient();
  try {
    const response = await client.query(
      fql`ServicesCost.byId(${newCostInfo.id})!.update({ tables: ${newCostInfo.tables} })`
    );
    return response.data;
  } catch (error) {
    if (error instanceof FaunaError) {
      console.log(error);
    }
  } finally {
    client.close();
  }
};

export const isAdminByEmail = async (email: string): Promise<boolean> => {
  const client = getClient();
  let isAdmin = false;
  try {
    const response = await client.query(fql`Admins.all()!.firstWhere(.email == ${email})`);
    isAdmin = response.data !== null;
  } catch (error) {
    if (error instanceof FaunaError) {
      console.log(error);
    }
  } finally {
    client.close();
  }
  return isAdmin;
};
