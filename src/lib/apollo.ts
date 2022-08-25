import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri:"https://api-sa-east-1.hygraph.com/v2/cl78hpjq80u8n01t2fnikd24d/master",
    cache: new InMemoryCache()
})