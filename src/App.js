import './App.css';
import ShoppingList from './components/ShoppingList';
import ShoppingCart from './components/ShoppingCart';
import EditShopping from './components/EditShopping';
import PaymentDetails from './components/PaymentDetails';
import PaymentComplete from './components/PaymentComplete';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';

// Import Context API provider
import { GlobalProvider } from './context/GlobalState';

function App() {
	return (
		<GlobalProvider>
			<div>
				<Switch>
					<Route exact path="/">
						<div className="App">
							<ShoppingList />
						</div>
					</Route>
					<Route path="/edit-shopping/:id">
						<EditShopping />
					</Route>
					<Route path="/cart">
						<div className="App">
							<ShoppingCart />
						</div>
					</Route>
					<Route path="/payment">
						<PaymentDetails />
					</Route>
					<Route path="/complete">
						<div className="App">
							<PaymentComplete />
						</div>
					</Route>
				</Switch>
			</div>
		</GlobalProvider>
	);
}

export default App;
