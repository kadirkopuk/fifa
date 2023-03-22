import apiSlice from "../../redux/api/apiSlice";

export const contentApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getContents: builder.query({
      query: (body) => ({
        url: `${body.name}?page=${body.page}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetContentsQuery } = contentApiSlice;
