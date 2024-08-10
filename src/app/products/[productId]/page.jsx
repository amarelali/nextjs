import Image from "next/image";
import { Metadata } from 'next'

export async function generateMetadata(
    { params },
) {
    const id = params.productId
    const { title, description } = await fetch(`https://dummyjson.com/products/${id}`).then((res) => res.json())
    return {
        title: title,
        description: description
    }
}
async function getData(id) {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
const Product = async ({ params }) => {
    const { title, thumbnail, description, price } = await getData(params.productId);
    return (
        <div className="max-w-sm shadow-lg rounded-lg overflow-hidden">
            <Image src={thumbnail} width={150} height={150} alt={title} />
            <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <p className="text-gray-700 dark:text-white mb-4">{description}</p>
                <p className="text-gray-900 dark:text-white font-semibold">${price}</p>
            </div>
        </div>
    );
};
export default Product;