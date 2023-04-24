import { FunctionComponent, useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { IProduct } from "../models/IProduct";
import { ProductService } from "../services/ProductService";

import '../css/ProductsPage.css';
import { useNavigate } from "react-router-dom";
import { ShoppingCartItemService } from "../services/ShoppingCartItemsService";

export interface ProductsPageProps{
    productsGridColumnsCount: number;
}

export const ProductsPage: FunctionComponent<ProductsPageProps> = ({productsGridColumnsCount}) => {
    const [products2DArray, setProducts2DArray] = useState<IProduct[][]>([])
    const navigate = useNavigate();

    useEffect( () => {
        const fetchProducts = async () => {
            const service: ProductService = new ProductService();
            let products: IProduct[] = await service.get();

            let products2DArray: IProduct[][] = [];
            for(let i=0;i<products.length;i+=productsGridColumnsCount){
                products2DArray.push(products.slice(i, i+productsGridColumnsCount));
            }

        setProducts2DArray( products2DArray );
        }

        fetchProducts();
    }, [] )

    const redirectToProductInfo = (id: number) => {
        navigate(`/products/${id}`);
    }

    const addToShoppingListButtonClick = (product: IProduct) => {
        const addProductToShoppingCart = async () => {
            const service = new ShoppingCartItemService();
            await service.addProductToShoppingCart( product );
        }

        addProductToShoppingCart();
    }

    return (
        <div id="ProductsGrid">
            <Container>
                {products2DArray.map( (productsRowList, key) => {
                    return (
                        <Row key={key} lg={productsGridColumnsCount}>
                            {productsRowList.map( (product) =>{
                                return (
                                    <Col key={product.id} className="d-flex">
                                        <Card className="flex-fill">
                                            <Card.Img variant="top" src={product.imageLink}/>
                                            <Card.Header>
                                                {product.name}
                                            </Card.Header>
                                            <Card.Body>
                                                {product.description}
                                            </Card.Body>
                                            <Card.Footer>
                                                <Button onClick={() => redirectToProductInfo(product.id)}>Info</Button>
                                                <Button variant="success" onClick={() => addToShoppingListButtonClick(product)}>Buy</Button>
                                            </Card.Footer>
                                        </Card>
                                    </Col>
                                );
                            } )}
                        </Row>
                    );
                } )}
            </Container>
        </div>
    );
}