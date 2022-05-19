import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsAPI = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://627fc0f2be1ccb0a46646711.mockapi.io',
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Contacts'],
    }),
    getContactById: builder.query({
      query: id => `/contacts/${id}`,
      providesTags: ['Contacts'],
    }),

    addContact: builder.mutation({
      query: newContact => ({
        url: `/contacts`,
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
    updateContact: builder.mutation({
      query: newData => ({
        url: `/contacts/${newData.id}`,
        method: 'PUT',
        body: newData,
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactByIdQuery,
  useFetchContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
  useUpdateContactMutation,
} = contactsAPI;
