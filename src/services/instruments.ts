import { baseSplitApi } from "./baseApi";
import { IInstrument } from '../../interfaces/instrument'

export const instrumentApi = baseSplitApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllInstruments: builder.query<IInstrument[], void>({
      query: () => 'products',
    }),
    getInstrumentById: builder.query<IInstrument, number>({
      query: (id: number) => `products/${id}`,
    }),
    postInstrument: builder.mutation<IInstrument, IInstrument>({
      query: (body: IInstrument) => ({
        url: 'products',
        method: 'POST',
        body,
      })
    })
  }),
  overrideExisting: false,
})

export const {
  useGetAllInstrumentsQuery,
  useGetInstrumentByIdQuery,
  usePostInstrumentMutation,
} = instrumentApi;