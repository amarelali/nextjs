import Link from 'next/link';
async function getData() {
    const res = await fetch('https://dummyjson.com/products');
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

const Products = async () => {
    const { products } = await getData();
    return (<>
        <h2>Clickable products</h2>
        <ul>
            {products.map((e, idx) => <li key={idx}><Link className='text-blue-300 underline' href={"/products/" + (idx + 1)}>Product {idx + 1} - {e.title}</Link></li>)}
        </ul>
    </>);

}
export default Products;