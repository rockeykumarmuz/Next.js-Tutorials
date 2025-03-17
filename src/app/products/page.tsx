import Link from 'next/link'

export default function ProductList() {
	return (
		<>
			<Link href='/'>Home</Link>
			<h1>Product List</h1>
			<ul>
				<li>Product 1</li>
				<li>Product 2</li>
				<li>Product 3</li>
				<li>Product 4</li>
				<li>Product 5</li>
			</ul>
		</>
	)
}
