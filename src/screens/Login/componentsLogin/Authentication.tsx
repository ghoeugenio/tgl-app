import React, {useState, useEffect} from 'react';
import api from '../../../services/api';
import {useAppDispatch} from '../../../hooks/hooks';
import {currentUserActions} from '../../../store/Redux/currentUser';
import {loginActions} from '../../../store/Redux/login';
import {tokenActions} from '../../../store/Redux/token';
import IUser from '../../../interfaces/users';
import {
	ComponentContainer,
	ComponentTitle,
	ComponentUI,
	ComponentInput,
	ForgetPassword,
	ForgetPasswordText,
	ComponentButton,
	ComponentTextButton,
	ShowPassword,
} from '../styles';
import {AntDesign} from '@expo/vector-icons';
import {Alert} from 'react-native';
import Loader from '../../../components/Loader';

const Authentication: any = ({navigationHandler}: any) => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [passwordSecure, setPasswordSecure] = useState<boolean>(true);
	const [loading, setLoading] = useState<boolean>(false);
	const dispatch = useAppDispatch();
	const regexEmail = /^[a-z0-9._]+@[a-z0-9]+\.[a-z]+\.?([a-z]+)?$/i;
	const regexPassword = /^([a-zA-Z0-9]{8,})$/;

	const submitHandler = async (event: React.SyntheticEvent) => {
		event.preventDefault();
		setLoading(true);
		if (!email.match(regexEmail) || !password.match(regexPassword)) {
			setLoading(false);
			Alert.alert('Insira dados válidos');
			return;
		}
		try {
			await api
				.post('sessions', {
					email: email,
					password: password,
				})
				.then((response) => {
					dispatch(
						tokenActions.setToken(response.data.token.token)
					);
					const currentUser: IUser = {
						id: response.data.user.id,
						name: response.data.user.name,
						email: response.data.user.email,
					};
					dispatch(
						currentUserActions.setCurrentUser(currentUser)
					);
					navigationHandler.navigate('LoggedScreen', {
						screen: 'Home',
					});
					setLoading(false);
				});
		} catch (err) {
			Alert.alert('Usuário ou senha incorretos!');
		}
	};

	const registerHandler = (event: React.SyntheticEvent): void => {
		event.preventDefault();
		dispatch(loginActions.setRegister());
	};

	const forgotHandler = (event: React.SyntheticEvent): void => {
		event.preventDefault();
		dispatch(loginActions.setForget());
	};

	const showPassword = () => {
		if (passwordSecure) {
			setPasswordSecure(false);
		} else {
			setPasswordSecure(true);
		}
	};
	return (
		<ComponentContainer>
			{loading && <Loader />}
			<ComponentTitle>Authentication</ComponentTitle>
			<ComponentUI>
				<ComponentInput
					placeholder="Email"
					value={email}
					onChangeText={(
						emailInput: React.SetStateAction<string>
					) => setEmail(emailInput)}
				/>

				<ComponentInput
					secureTextEntry={passwordSecure}
					placeholder="Password"
					value={password}
					onChangeText={(
						passwordInput: React.SetStateAction<string>
					) => setPassword(passwordInput)}
				/>

				<ShowPassword onPress={showPassword}>
					<AntDesign name="eyeo" size={24} color="#707070" />
				</ShowPassword>
				<ForgetPassword onPress={forgotHandler}>
					<ForgetPasswordText>
						I forget my password
					</ForgetPasswordText>
				</ForgetPassword>
				<ComponentButton>
					<ComponentTextButton
						inUI={true}
						onPress={submitHandler}
					>
						Login In
					</ComponentTextButton>
					<AntDesign
						name="arrowright"
						size={24}
						color="#b5c401"
					/>
				</ComponentButton>
			</ComponentUI>
			<ComponentButton onPress={registerHandler}>
				<ComponentTextButton inUI={false}>
					Sign In
				</ComponentTextButton>
				<AntDesign name="arrowright" size={24} color="#707070" />
			</ComponentButton>
		</ComponentContainer>
	);
};

export default Authentication;
