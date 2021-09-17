import React, { useContext } from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';

function Footer() {
	const { products, cart } = useContext(GlobalContext);

	console.log(products.length);
	return (
		<Navbar className="border" bg="light" variant="light">
			<Container>
				<Navbar.Brand style={{ fontWeight: '600' }}>
					Total Products: {products.length}
				</Navbar.Brand>

				{products.length > 0 && (
					<Link
						style={{
							textDecoration: 'none',
							color: 'white'
						}}
						to="/cart"
					>
						<Button variant="success">
							<FaShoppingCart style={{ fontSize: 25 }} />{' '}
							<span style={{ fontWeight: 600 }}>
								{cart
									.map((cartItem) => parseInt(cartItem.quantity))
									.reduce((a, b) => a + b, 0)}
							</span>
						</Button>
					</Link>
				)}
			</Container>
		</Navbar>
	);
}

export default Footer;
