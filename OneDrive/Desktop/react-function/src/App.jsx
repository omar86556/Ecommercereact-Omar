import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from './layout/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import AllProducts from './components/AllProducts';
import CreateProduct from './components/CreateProduct';
import Cart from './components/Cart';



function App() {
	let [purchacedProducts, setPts] = useState([])
	const [prods, setProds] = useState([])
	const [view, setView] = useState("home")
	
	console.log(purchacedProducts, "these are the not purchased products")

	function addToCart(id) {
		setPts(...purchacedProducts, id)
	}
	console.log(addToCart)

	function changeView(toWhere) {
		setView(toWhere)
	}
	useEffect(() => {
		axios.get("http://localhost:3000/products.json").then(res => setProds(res.data)).catch(err => console.log(err))
	}, [])
	console.log(prods, "those are my products")
	return (
		<div>
			<NavBar changeView={changeView}  pts={purchacedProducts.length}/>
			

			{view === "home" && <AllProducts data={prods} pts={purchacedProducts} addToCart={addToCart}/>}
			{view === "create" && <CreateProduct  data={prods} />}
			{view === "cart" && <Cart data={prods} />}
		</div>
	)
}

export default App