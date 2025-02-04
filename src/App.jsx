import axios from './utils/axios.customize.js';
import { useEffect, useState } from 'react'
function App() {

	useEffect(() => {
		const fetchHelloWorld = async() => {
			const res = await axios.get(`/v1/api`);
			console.log('Check response: ', res);
		}

		fetchHelloWorld();
	}, [])
	return (
		<>
			Hello world
		</>
	)
}

export default App
