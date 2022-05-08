import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Components/hoc/Layout';
import Login from './Pages/Login/Login';
import Registration from './Pages/Registration/Registration';
import Main from './Pages/Main/Main';



function App() {


	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Main />} />
					<Route path='login' element={<Login />} />
					<Route path='registration' element={<Registration />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
