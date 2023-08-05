import { PRODUCT_URL } from "../constants";
import { apiSlice } from "./apiSlice";


export const listingApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getListing: builder.query({
            query: () => ({
                url: PRODUCT_URL,
            }),
            keepUnusedDataFor: 5
        })
    }),

});


export const { useGetListingQuery} = listingApiSlice;