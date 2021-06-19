import React, {useState, useMemo} from 'react';
import api from '../../../services/api';
import {useAppDispatch} from '../../../hooks/hooks';
import {loginActions} from '../../../store/Redux/login';
import {
	ComponentContainer,
	ComponentTitle,
	ComponentUI,
	ComponentInput,
	ComponentButton,
	ComponentTextButton,
} from '../styles';
import {AntDesign} from '@expo/vector-icons';
import {Alert, ScrollView} from 'react-native';

interface IUserRegister {
	name: string;
	email: string;
	password: string;
	password_confirmation: string;
}

const Register: React.FC = ({navigation}: any) => {
	const [email, setEmail] = useState<string>('');
	const [name, setName] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [passwordConfirm, setPasswordConfirm] = useState<string>('');
	const dispatch = useAppDispatch();

	const regexName = useMemo(() => /^([a-zA-Z0-9]{2,})/, []);
	const regexEmail = useMemo(
		() => /^[a-z0-9._]+@[a-z0-9]+\.[a-z]+\.?([a-z]+)?$/i,
		[]
	);
	const regexPassword = useMemo(() => /^([a-zA-Z0-9]{8,})$/, []);

	const submitHandler = async (event: React.SyntheticEvent) => {
		event.preventDefault();

		if (
			!email.match(regexEmail) ||
			!password.match(regexPassword) ||
			!name.match(regexName) ||
			passwordConfirm !== password
		) {
			Alert.alert('Insira dados válidos!');
			return;
		}

		try {
			var user: IUserRegister = {
				name: name,
				email: email,
				password: password,
				password_confirmation: passwordConfirm,
			};

			await api.post('users', user);

			Alert.alert('Usuário cadastrado com sucesso!');
		} catch (err) {
			Alert.alert('O usuário já existe!');
		}
	};

	const backHandler = (event: React.SyntheticEvent): void => {
		event.preventDefault();

		dispatch(loginActions.setLogin());
	};

	return (
		<ComponentContainer>
			<ComponentTitle>Register</ComponentTitle>
			<ComponentUI>
				<ComponentInput
					type="text"
					placeholder="Name"
					value={name}
					onChangeText={(
						nameInput: React.SetStateAction<string>
					) => setName(nameInput)}
				/>
				<ComponentInput
					type="email"
					placeholder="Email"
					value={email}
					onChangeText={(
						emailInput: React.SetStateAction<string>
					) => setEmail(emailInput)}
				/>
				<ComponentInput
					secureTextEntry={true}
					placeholder="Password"
					value={password}
					onChangeText={(
						passwordInput: React.SetStateAction<string>
					) => setPassword(passwordInput)}
				/>
				<ComponentInput
					type="text"
					placeholder="Password Confirmation"
					value={passwordConfirm}
					onChangeText={(
						passwordConfirmInput: React.SetStateAction<string>
					) => setPasswordConfirm(passwordConfirmInput)}
				/>
				<ComponentButton>
					<ComponentTextButton
						inUI={true}
						onPress={submitHandler}
					>
						Register
					</ComponentTextButton>
					<AntDesign
						name="arrowright"
						size={24}
						color="#b5c401"
					/>
				</ComponentButton>
			</ComponentUI>
			<ComponentButton onPress={backHandler}>
				<AntDesign name="arrowleft" size={24} color="#707070" />
				<ComponentTextButton inUI={false}>Back</ComponentTextButton>
			</ComponentButton>
		</ComponentContainer>
	);
};

export default Register;
