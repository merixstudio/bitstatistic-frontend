import ApolloClient, { createNetworkInterface } from 'apollo-client';

const networkInterface = createNetworkInterface({
  uri: 'http://develop.bitstatistics-backend.next.mrx.gd/graph',
  dataIdFromObject: o => o.id,
});

export default new ApolloClient({
  networkInterface,
});
