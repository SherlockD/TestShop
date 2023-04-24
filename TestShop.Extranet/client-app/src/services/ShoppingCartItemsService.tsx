import { IProduct } from "../models/IProduct";
import AxiosDefault from "./AxiosDefault";

export class ShoppingCartItemService{
    async addProductToShoppingCart(product: IProduct){
        console.log(product);
        return (await AxiosDefault.post<IProduct>('/ShoppingCartItems', product));
    }

    async getShoppingCartItems(): Promise<IProduct[]>{
        return (await AxiosDefault.get<IProduct[]>('/ShoppingCartItems')).data;
    }
}