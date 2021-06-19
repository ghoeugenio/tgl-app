import React, {useEffect, useState} from 'react';
import {useAppSelector, useAppDispatch} from '../../hooks/hooks';
import {fetchGames} from '../../store/Redux/game';
import Authentication from './componentsLogin/Authentication';
import {Container, Title, TitleText, ScrollContainer} from './styles';
import ForgetPassword from './componentsLogin/ForgetPassword';
import Register from './componentsLogin/Register';
import {SafeAreaView} from 'react-native-safe-area-context';
import Loader from '../../components/Loader';

const Login: React.FC = ({navigation}: any) => {
	const loginScreen = useAppSelector((state) => state.login.loginScreen);
	const dispatchGame = useAppDispatch();

	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		dispatchGame(fetchGames());
		let myGreeting = setTimeout(function () {
			setLoaded(true);
		}, 2000);
	}, [dispatchGame]);

	const navigationHandler = navigation;

	if (loaded) {
		return (
			<SafeAreaView>
				<ScrollContainer>
					<Container>
						<Title>
							<TitleText>TGL</TitleText>
						</Title>
						{loginScreen === 'login' ? (
							<Authentication
								navigationHandler={navigationHandler}
							/>
						) : loginScreen === 'forget' ? (
							<ForgetPassword />
						) : (
							<Register />
						)}
					</Container>
				</ScrollContainer>
			</SafeAreaView>
		);
	} else {
		return <Loader />;
	}
};

export default Login;
