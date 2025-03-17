import Link from 'next/link'

export default function Home() {
	return (
		<div>
			<h1>Welcome home</h1>
			<Link href='blog'>Blogs</Link>
		</div>
	)
}
