import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: import.meta.env.VITE_URL,
    headers : {
        Autorizathion : `Bearer ${import.meta.env.VITE_ACESS_TOKEN} `
    },
    cache: new InMemoryCache()
})