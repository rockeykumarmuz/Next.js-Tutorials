import { notFound } from 'next/navigation'

export default async function produuctReview({ params }: { params: Promise<{ productId: string; reviewId: string }> }) {
	const { productId, reviewId } = await params

	if (Number(productId) > 1000) {
		notFound()
	}

	return (
		<div>
			<h1>
				Product of {productId} and Review Id {reviewId}
			</h1>
		</div>
	)
}
