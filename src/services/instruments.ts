import { baseSplitApi } from "./baseApi";
import { IInstrument } from '../../interfaces/instrument'

export const instrumentApi = baseSplitApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllInstruments: builder.query<IInstrument[], void>({
      query: () => 'instruments',
    }),
    getInstrumentById: builder.query<IInstrument, number>({
      query: (id) => `instruments/${id}`,
    })
  }),
  overrideExisting: false,
})

export const {
  useGetAllInstrumentsQuery,
  useGetInstrumentByIdQuery,
} = instrumentApi;