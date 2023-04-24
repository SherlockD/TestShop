import { FunctionComponent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IProduct } from "../models/IProduct";
import { ProductService } from "../services/ProductService";

export const ProductPage: FunctionComponent = () => {
    let { id } = useParams();

    const [product, setProduct] = useState<IProduct>();
    
    useEffect(() =>{
        const fetchData = async () => {
            const service = new ProductService();
            let product: IProduct = await service.getById( Number(id) );
            setProduct( product );
        }

        fetchData();
    }, [])

    return (
        <div>
            {product?.id}<br/>
            {product?.name}<br/>
            {product?.description}
        </div>
    );
}