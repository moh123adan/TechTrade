import { ImageSourcePropType } from 'react-native';
import { Category } from './Category';

export type Product = {
    id: number;
    title: string;
    slug: string;
    imagesUrl: ImageSourcePropType[];
    price: number;
    heroImage: ImageSourcePropType;
    category: Omit<Category, 'products'>;
    maxQuantity: number;
};