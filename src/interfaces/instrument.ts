import { IImages } from "./images";

export interface IInstrument {
  id?: number;
  name: string;
  type: string;
  brand: string;
  price: string;
  info: string;
  status?: string;
  images?: FileList;
  productImages: IImages[];
}