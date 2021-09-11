import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';

function PaymentComplete() {
	let history = useHistory();

	const { cart } = useContext(GlobalContext);

	return (
		<div>
			<br />
			<Card style={{ width: '31rem', margin: '0 auto' }}>
				<Card.Header style={{ background: '#212529' }}>
					<h2 style={{ color: 'white', marginTop: 10 }}>Payment Completed</h2>{' '}
				</Card.Header>
				<Card.Body>
					<FaCheckCircle style={{ fontSize: 60, color: '#167347' }} />
					<br />
					<br />
					<Card.Title>
						Total: $
						{cart
							.map((cartItem) => cartItem.price * cartItem.quantity)
							.reduce((a, b) => a + b, 0)}
					</Card.Title>
					<Card.Text style={{ marginTop: 20 }}>
						Payment Method Information
					</Card.Text>
				</Card.Body>
				<div className="text-center" style={{ marginTop: 10 }}>
					<Button
						style={{ fontWeight: 'bold' }}
						variant="dark"
						onClick={() => history.push('/')}
					>
						Back to Home
					</Button>{' '}
					{/* <Button
						style={{ marginLeft: 20, fontWeight: 'bold' }}
						variant="secondary"
					>
						Receipt PDF
					</Button> */}
				</div>
				<br />
			</Card>
		</div>
	);
}

export default PaymentComplete;
