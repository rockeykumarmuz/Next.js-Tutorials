import { useState } from 'react'

export default function Counter() {
	const [count, setCount] = useState(0)

	return (
		<div className='m-4'>
			<p className='p-1'>Count: {count}</p>
			<button className='p-1 border rounded-bl-lg outline-0' onClick={() => setCount(count + 1)}>
				Increment +
			</button>
		</div>
	)
}
