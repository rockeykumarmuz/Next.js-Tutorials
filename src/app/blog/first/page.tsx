import { Metadata } from 'next'
import Blog from '../page'

export const metaData: Metadata = {
	title: {
		absolute: 'Blog',
	},
}

export default function FirstBlog() {
	return (
		<div>
			<h1>First Blog</h1>
		</div>
	)
}
