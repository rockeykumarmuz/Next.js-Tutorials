import { Metadata } from 'next'

type Props = {
	params: Promise<{ productId: string }>
}

export const generateMetaData = async ({ params }: Props): Promise<Metadata> => {
	const id = (await params).productId
	const title = await new Promise(resolve => {
		setTimeout(() => {
			resolve(`iphone ${id}`)
		}, 1000)
	})
	return {
		title: `Product ${id}`,
	}
}

export default function productDetail({ params }: { params: Promise<{ productId: string }> }) {
	return (
		<div>
			<h1>Product Detail</h1>
		</div>
	)
}
