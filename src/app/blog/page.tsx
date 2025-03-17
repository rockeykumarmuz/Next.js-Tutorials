import Link from 'next/link'

export default function Blog() {
	return (
		<div>
			<h1> Blog</h1>
			<Link href='blog/first'>First Blogs</Link>
			<br />
			<Link href='blog/second'>Second Blogs</Link>
		</div>
	)
}
