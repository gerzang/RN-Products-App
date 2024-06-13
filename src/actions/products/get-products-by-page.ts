import { tesloApi } from "../../config/api/testloApi";
import type { Product } from "../../domain/entities/products";
import type { TesloProduct } from "../../infrasctructure/interfaces/teslo-products.response";
import { ProductMapper } from "../../infrasctructure/mappers/product.mapper";



export const getProductsByPage = async (page: number, limit: number = 20): Promise<Product[]> => {
    try {

        const { data } = await tesloApi.get<TesloProduct[]>(`/products?offset=${page * 10}&limit=${limit}`);

        const products = data.map(ProductMapper.tesloProductToEntity);

        return products;


    } catch (error) {
        console.log(error);
        throw new Error('Error getting products');
    }
}