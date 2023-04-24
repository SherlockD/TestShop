import { FunctionComponent, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { IProduct } from "../models/IProduct";
import { ShoppingCartItemService } from "../services/ShoppingCartItemsService";

export const ShippingCartPage:FunctionComponent = () => {
    const [cartItems, setCartItems] = useState<IProduct[]>([]);
    useEffect( () => {
        const fetchCartItems = async () => {
            const service: ShoppingCartItemService = new ShoppingCartItemService();
            let cartItems = await service.getShoppingCartItems();

            setCartItems( cartItems );
        }

        fetchCartItems();
    })

    return(
        <div id="ShippingCart" >
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map( (item, index) => {
                        return (
                            <tr>
                                <td>{index}</td>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                            </tr>
                        );
                    } )}
                </tbody>
            </Table>
        </div>
    );
}