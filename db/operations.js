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
} from 'faunadb';

const client = new faunadb.Client({
  secret: import.meta.env.VITE_APP_FAUNA_KEY,
  domain: import.meta.env.REACT_APP_FAUNA_DOMAIN
    ? import.meta.env.REACT_APP_FAUNA_DOMAIN
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

export const updateTransaction = (id, data) =>
  client.query(
    Update(Ref(Collection('ServicesCost'), id), {
      data: {
        ...data,
      },
    })
  );

export const deleteTransaction = (id) => client.query(Delete(Ref(Collection('ServicesCost'), id)));
