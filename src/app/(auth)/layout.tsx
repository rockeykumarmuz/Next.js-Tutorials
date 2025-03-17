'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
	const navlinks = [
		{ name: 'Register', path: '/register' },
		{ name: 'Login', path: '/login' },
		{ name: 'Forgot Password', path: '/forgot-password' },
	]

	const pathname = usePathname()

	return (
		<div>
			{navlinks.map(ele => {
				const isActive = pathname === ele.path || (pathname.startsWith(ele.path) && pathname !== '/')
				return (
					<Link href={ele.path} key={ele.name}>
						{ele.name}
					</Link>
				)
			})}
		</div>
	)
}
