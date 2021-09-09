import React, { useContext } from 'react';
import { Navbar, Container, Button, Badge } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';

function Header() {
	const { products } = useContext(GlobalContext);

	return (
		<Navbar className="border" bg="light" variant="light">
			<Container>
				<Navbar.Brand style={{ fontWeight: '600' }}>
					Number of Products: {products.length}
				</Navbar.Brand>
				{/* <Navbar.Brand style={{ fontWeight: '600' }}>
					To be purchased: 3
				</Navbar.Brand> */}
				<Button variant="success">
					<Link
						style={{
							textDecoration: 'none',
							color: 'white'
						}}
						to="/cart"
						// component={PurchaseList}
					>
						<FaShoppingCart style={{ fontSize: 25 }} />{' '}
						<span style={{ fontWeight: 600 }}>10</span>
						{/* {products.filter((product) => product.completed).length} */}
					</Link>
				</Button>
			</Container>
		</Navbar>
	);
}

export default Header;
