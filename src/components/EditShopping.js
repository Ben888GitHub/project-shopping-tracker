import React, { useState, useEffect, useContext } from 'react';
import {
	Navbar,
	Container,
	InputGroup,
	Form,
	Modal,
	Button,
	FormControl,
	Card
} from 'react-bootstrap';
import { GlobalContext } from '../context/GlobalState';
import { useHistory, Link, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

function EditShopping() {
	const { products, editProduct } = useContext(GlobalContext);

	let { id } = useParams();
	let history = useHistory();
	// console.log(id);

	const [productName, setProductName] = useState('');
	const [productImg, setProductImg] = useState('');
	const [productPrice, setProductPrice] = useState('');

	const [disableAdd, setDisableAdd] = useState(true);

	useEffect(() => {
		if (productName === '' || productImg === '' || productPrice === '') {
			setDisableAdd(true);
		} else {
			setDisableAdd(false);
		}
	}, [productName, productImg, productPrice, id]);

	return (
		<Container className="d-flex flex-column align-items-center justify-content-center">
			<br />
			<Card style={{ width: '28rem', padding: 50 }}>
				<Form>
					<h2 style={{ marginLeft: -30, marginTop: -20 }}>
						{' '}
						<FaArrowLeft
							onClick={() => history.goBack()}
							style={{ marginBottom: 5, marginRight: 5, cursor: 'pointer' }}
						/>{' '}
						Update Product
					</h2>
					<br />
					<Form.Group>
						<Form.Label>Name</Form.Label>
						<Form.Control
							type="text"
							placeholder="New Product"
							value={productName}
							onChange={(e) => setProductName(e.target.value)}
						/>
					</Form.Group>
					<br />
					<Form.Group>
						<Form.Label>Image</Form.Label>
						<Form.Control
							type="text"
							placeholder="Place URL"
							value={productImg}
							onChange={(e) => setProductImg(e.target.value)}
						/>
					</Form.Group>
					<br />
					<Form.Group>
						<Form.Label>Price</Form.Label>
						<InputGroup className="mb-3">
							<InputGroup.Text>$</InputGroup.Text>
							<FormControl
								type="number"
								placeholder="Price"
								value={productPrice}
								onChange={(e) => setProductPrice(e.target.value)}
							/>
							{/* <InputGroup.Text>.00</InputGroup.Text> */}
						</InputGroup>
					</Form.Group>
					<br />
					<Button
						variant="primary"
						// type="submit"
						onClick={(e) => {
							// e.preventDefault();
							editProduct({
								id: id,
								name: productName,
								image: productImg,
								price: parseInt(productPrice),
								quantity: 1
							});
							history.push('/');
						}}
						disabled={disableAdd}
					>
						UPDATE
					</Button>
				</Form>
			</Card>
		</Container>
	);
}

export default EditShopping;
// type="submit"
