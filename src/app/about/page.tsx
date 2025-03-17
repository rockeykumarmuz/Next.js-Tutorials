import { Metadata } from 'next'

export const metaData: Metadata = {
	title: {
		default: 'Next js tutorials by codevolutions',
		template: '%s | Codevolution',
		absolute: 'Mon Blog',
	},
}

export default function About() {
	return (
		<div>
			<h1> About Page</h1>
		</div>
	)
}
