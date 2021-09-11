import React, { useContext } from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';

import { FaEdit, FaRegTrashAlt } from 'react-icons/fa';

import { GlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom';

function ShoppingList() {
	const {
		products,
		deleteProduct,
		searchResult,
		addToCart,
		cart,
		removeFromCart
	} = useContext(GlobalContext);

	console.log(products);

	return (
		<Container>
			<br />
			<div className="border" style={{ background: '#E5E7EB' }}>
				<Header />

				{products.length > 0 ? (
					<Row xs={1} md={3} className="g-4" style={{ margin: 15 }}>
						{searchResult.map((product, idx) => (
							<Col key={idx}>
								<Card>
									<Card.Header
										style={{
											fontWeight: '600',
											fontSize: 20,
											background: '#212529',
											color: 'white'
										}}
									>
										<FaRegTrashAlt
											onClick={() => deleteProduct(product)}
											style={{
												float: 'right',
												fontSize: 27,
												marginTop: 2,
												cursor: 'pointer'
											}}
										/>
									</Card.Header>
									<Card.Img
										variant="top"
										src={product.image}
										width="460"
										height="345"
										className="border"
									/>
									<Card.Body className="border">
										<Card.Title>
											{product.name}
											<Link
												to={`/edit-shopping/${product.id}`}
												// component={<EditShopping name={product.name} />}
											>
												<FaEdit
													onClick={() => {
														console.log(product);
													}}
													// EditProduct component
													style={{
														marginLeft: 5,
														marginBottom: 5,
														color: '#5B636A'
													}}
												/>
											</Link>
										</Card.Title>

										<Card.Text style={{ fontWeight: 500 }}>
											${product.price}
										</Card.Text>
										<Button
											style={{
												fontWeight: 'bold',
												marginBottom: 5,
												marginRight: 10
											}}
											variant="primary"
											onClick={() => {
												addToCart(product);
											}}
										>
											Add to Cart
										</Button>
										{cart.filter((cartItem) => cartItem.name === product.name)
											.length > 0 && (
											<Button
												style={{ fontWeight: 'bold', marginBottom: 5 }}
												variant="danger"
												onClick={() => removeFromCart(product)}
											>
												Remove from Cart
											</Button>
										)}
									</Card.Body>
								</Card>
							</Col>
						))}
					</Row>
				) : (
					<>
						<br />
						<h5>No Products to show, please add new product</h5>
					</>
				)}

				<br />
				<br />
				<Footer />
			</div>
		</Container>
	);
}

export default ShoppingList;
