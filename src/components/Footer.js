import React, { useContext, useEffect } from 'react';
import { Navbar, Container, Button, Badge } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';

function Header() {
	const { products, cart } = useContext(GlobalContext);
	return (
		<Navbar className="border" bg="light" variant="light">
			<Container>
				<Navbar.Brand style={{ fontWeight: '600' }}>
					Total Products: {products.length}
				</Navbar.Brand>
				{/* <Navbar.Brand style={{ fontWeight: '600' }}>
					To be purchased: 3
				</Navbar.Brand> */}
				<Link
					style={{
						textDecoration: 'none',
						color: 'white'
					}}
					to="/cart"
					// component={PurchaseList}
				>
					<Button variant="success">
						<FaShoppingCart style={{ fontSize: 25 }} />{' '}
						<span style={{ fontWeight: 600 }}>
							{cart
								.map((cartItem) => parseInt(cartItem.quantity))
								.reduce((a, b) => a + b, 0)}
						</span>
						{/* {products.filter((product) => product.completed).length} */}
					</Button>
				</Link>
			</Container>
		</Navbar>
	);
}

export default Header;
