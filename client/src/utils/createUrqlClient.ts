import { cacheExchange } from "@urql/exchange-graphcache";
import { dedupExchange, fetchExchange } from "urql";
import { betterUpdateQuery } from "./betterUpdateQuery";
import { isServer } from "./isServer";

export const createUrqlClient = (ssrExchange: any, ctx: any) => {
    let cookie = "";
    if (isServer()) {
        cookie = ctx.req.headers.cookie;
    }

    return {
        url: "http://localhost:4000/graphql",
        fetchOptions: {
            credentials: "include" as const,
            headers: cookie
                ? {
                      cookie,
                  }
                : undefined,
        },
        // When to update cache
        exchanges: [
            dedupExchange,
            ssrExchange,
            cacheExchange({
                keys: {
                    PaginatedPosts: () => null,
                },
                resolvers: {},
                updates: {
                    Mutation: {
                        // logout: (_result, args, cache, info) => {
                        //     betterUpdateQuery<LogoutMutation, MeQuery>(
                        //         cache,
                        //         { query: MeDocument },
                        //         _result,
                        //         () => ({ me: null })
                        //     );
                        // },
                        // login: (_result, args, cache, info) => {
                        //     betterUpdateQuery<LoginMutation, MeQuery>(
                        //         cache,
                        //         { query: MeDocument },
                        //         _result,
                        //         (result, query) => {
                        //             if (result.login.errors) {
                        //                 return query;
                        //             } else {
                        //                 return {
                        //                     me: result.login.user,
                        //                 };
                        //             }
                        //         }
                        //     );
                        // },
                        // register: (_result, args, cache, info) => {
                        //     betterUpdateQuery<RegisterMutation, MeQuery>(
                        //         cache,
                        //         { query: MeDocument },
                        //         _result,
                        //         (result, query) => {
                        //             if (result.register.errors) {
                        //                 return query;
                        //             } else {
                        //                 return {
                        //                     me: result.register.user,
                        //                 };
                        //             }
                        //         }
                        //     );
                        // },
                    },
                },
            }),
            // errorExchange,
            ssrExchange,
            fetchExchange,
        ],
    };
};
