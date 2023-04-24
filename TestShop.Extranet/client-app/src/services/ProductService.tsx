import { IProduct } from "../models/IProduct";
import AxiosDefault from "./AxiosDefault";

export class ProductService {
    async get(): Promise<IProduct[]>{
        return (await AxiosDefault.get<IProduct[]>('products/')).data;
    }

    async getById(id: number): Promise<IProduct>{
        return (await AxiosDefault.get<IProduct>(`products/${id}`)).data;
    }
}