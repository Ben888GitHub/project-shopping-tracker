import React, { useState, useEffect, useContext } from 'react';
import {
	Navbar,
	Container,
	InputGroup,
	Form,
	Modal,
	Button,
	FormControl
} from 'react-bootstrap';
import SearchShopping from './SearchShopping';
import { FaRegPlusSquare } from 'react-icons/fa';
import { GlobalContext } from '../context/GlobalState';
import uuid from 'react-uuid';
import ImageUploading from 'react-images-uploading';

function AddShopping() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<Navbar bg="dark" variant="dark">
			<Container style={{ marginBottom: 12 }}>
				<InputGroup style={{ width: '35%' }}>
					<Navbar.Brand style={{ marginLeft: 5 }}>Add New Product</Navbar.Brand>
					<FaRegPlusSquare
						style={{
							color: 'white',

							fontSize: 27,
							cursor: 'pointer',
							marginTop: 6
						}}
						onClick={() => {
							handleShow();
						}}
					/>
				</InputGroup>
				<SearchShopping />
			</Container>
			<AddModal show={show} handleClose={handleClose} />
		</Navbar>
	);
}

const AddModal = ({ show, handleClose }) => {
	const { addProduct } = useContext(GlobalContext);

	const [productName, setProductName] = useState('');
	const [productImg, setProductImg] = useState('');
	const [productPrice, setProductPrice] = useState('');
	const [productImgStr, setProductImgStr] = useState('');

	const [disableAdd, setDisableAdd] = useState(true);

	const [disableUpload, setDisableUpload] = useState(false);

	useEffect(() => {
		if (productName === '' || productImg === '' || productPrice === '') {
			setDisableAdd(true);
		} else {
			setDisableAdd(false);
		}
	}, [productName, productImg, productPrice]);

	const onChange = (imageList, addUpdateIndex) => {
		// data for submit
		console.log(imageList, addUpdateIndex);
		setProductImg(imageList);
		console.log(imageList);
		setDisableUpload(true);
		imageList.map((image) => setProductImgStr(image.data_url));
	};

	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Add New Product</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
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
						<ImageUploading
							multiple
							value={productImg}
							onChange={onChange}
							maxNumber={1}
							dataURLKey="data_url"
						>
							{({
								imageList,
								onImageUpload,
								isDragging,
								dragProps,
								onImageUpdate
							}) => (
								<div className="upload__image-wrapper">
									<Button
										style={isDragging ? { color: 'red' } : undefined}
										onClick={onImageUpload}
										{...dragProps}
										disabled={disableUpload}
									>
										Upload
									</Button>

									{imageList.map((image, index) => (
										<div key={index} className="image-item">
											<br />
											<img
												onChange={() => {
													setProductImg(image.data_url);
												}}
												src={image.data_url}
												alt=""
												width="100"
											/>
											<div className="image-item__btn-wrapper"></div>
											<br />
											<Button
												onClick={() => onImageUpdate(index)}
												{...dragProps}
											>
												Update
											</Button>
										</div>
									))}
								</div>
							)}
						</ImageUploading>
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
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					Close
				</Button>
				<Button
					variant="primary"
					onClick={() => {
						handleClose();
						console.log(`${productName}, ${productImg}, ${productPrice}`);
						addProduct({
							id: uuid(),
							name: productName,
							image: productImgStr,
							price: parseInt(productPrice),
							quantity: 1
						});
						setProductName('');
						setProductImg('');
						setProductPrice('');
						setDisableUpload(false);
					}}
					disabled={disableAdd}
				>
					ADD
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default AddShopping;
