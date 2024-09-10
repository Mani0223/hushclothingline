import Client from '@shopify/buy-sdk';

const client = Client.buildClient({
  domain: 'fda732-6d.myshopify.com',  
  storefrontAccessToken: '7059b67513404a460fb473d92a9cc30c',  
});

export default client;
