import ApolloClient, { createNetworkInterface } from 'apollo-client';

const networkInterface = createNetworkInterface({
  uri: `${process.env.BACKEND_URL}/graph`,
  dataIdFromObject: o => o.id,
});

export default new ApolloClient({
  networkInterface,
});
