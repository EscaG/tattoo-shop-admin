import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Components/hoc/Layout';
import LoginPage from './Pages/Login/LoginPage';
import RegistrationPage from './Pages/Registration/RegistrationPage';
import CartPage from './Pages/Cart/CartPage';
import FavoritePage from './Pages/Favorite/FavoritePage';
import ProfilePage from './Pages/Profile/ProfilePage';
import MainPage from './Pages/Main/MainPage';
import Error from './Components/hoc/ErrorHoc';
import Error404 from './Pages/ErrorPage/Error404';



function App() {


	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<MainPage />} />
					<Route path='login' element={<LoginPage />} />
					<Route path='registration' element={<RegistrationPage />} />
					<Route path='cart' element={<CartPage />} />
					<Route path='favorite' element={<FavoritePage />} />
					<Route path='profile' element={<ProfilePage />} />


					<Route path='404' element={<Error404 />} />
					<Route path='*' element={
						<Error>
							<Error404 />
						</Error>
					}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
