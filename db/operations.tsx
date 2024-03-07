import { Client, fql, FaunaError, Query } from 'fauna';
import i18next from 'i18next';
import { Item } from '../src/type/feedbackFormType';

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

// configure your client

/**
 // @ts-nocheck
import faunadb, {
  Create,
  Collection,
  Ref,
  Documents,
  Paginate,
  Lambda,
  Get,
  Map,
  Delete,
  Update,
  query as q,
} from 'faunadb';

const client = new faunadb.Client({
  secret: import.meta.env.VITE_APP_FAUNA_KEY,
  domain: import.meta.env.VITE_APP_FAUNA_DOMAIN
    ? import.meta.env.VITE_APP_FAUNA_DOMAIN
    : 'db.fauna.com',
});

export const newTransaction = (data) =>
  client.query(
    Create(Collection('ServicesCost'), {
      data: {
        ...data,
      },
    })
  );

export default client;

// Define the reference to the target set
export const getSetRef = (collectionName) => Documents(Collection(collectionName));

// All Transactions
export const allServices = () =>
  client.query(
    Map(
      Paginate(Documents(Collection('ServicesCost'))),
      Lambda((x) => Get(x))
    )
  );

export const eyebrowServices1 = async () => {
  let allBlogs = await client.query(
    q.Map(q.Paginate(q.Documents(q.Collection('ServicesCost'))), q.Lambda('X', q.Get(q.Var('X'))))
  );
  console.log(allBlogs.data);
  return allBlogs.data;
};

export const getServiceByType = async (id) => {
  try {
    let services = await client.query(q.Get(q.Ref(q.Collection('ServicesCost'), id)));
    return services.data;
  } catch (error) {
    return;
  }
};

export const updateTransaction = (id, data) =>
  client.query(
    Update(Ref(Collection('ServicesCost'), id), {
      data: {
        ...data,
      },
    })
  );

export const deleteTransaction = (id) => client.query(Delete(Ref(Collection('ServicesCost'), id)));

 */
