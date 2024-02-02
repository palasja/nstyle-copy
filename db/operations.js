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
  Update
} from 'faunadb';
const client = new faunadb.Client({
  secret: import.meta.env.VITE_APP_FAUNA_KEY,
  domain: import.meta.env.REACT_APP_FAUNA_DOMAIN ? import.meta.env.REACT_APP_FAUNA_DOMAIN : 'db.fauna.com',
});


export const newTransaction = (data) => client.query(
  Create(
    Collection('Transaction'),
    { data: {
      ...data
    } }
  )
)

export default client;

export const getTransactionRef = (id) => Ref(Collection('Transaction'), id);

// Define the reference to the target set
export const getSetRef = (collectionName) => Documents(Collection(collectionName));

// All Transactions
export const allTransactions = () => client.query(
  Map(
    Paginate(Documents(Collection('Transaction'))),
    Lambda(x => Get(x))
  )
)

export const updateTransaction = (id, data) => client.query(
  Update(
    Ref(Collection('Transaction'), id),
    {
      data: {
        ...data
      },
    },
  )
)

export const deleteTransaction = id => client.query(
  Delete(Ref(Collection('Transaction'), id))
)