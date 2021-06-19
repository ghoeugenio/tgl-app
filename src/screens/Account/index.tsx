import React, {useMemo, useState} from 'react';
import {Alert, SafeAreaView, Text} from 'react-native';

import {
	Container,
	ScrollContainer,
	TitleInput,
	Input,
	Entries,
	Button,
	TextButton,
} from './styles';
import HeaderApp from '../../components/HeaderApp';
import api from '../../services/api';
import {useAppSelector} from '../../hooks/hooks';

const Account: React.FC = () => {
	const token = useAppSelector((state) => state.token.token);
	const [email, setEmail] = useState<string>('');
	const [name, setName] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const regexName = useMemo(() => /^([a-zA-Z0-9]{2,})/, []);
	const regexEmail = useMemo(
		() => /^[a-z0-9._]+@[a-z0-9]+\.[a-z]+\.?([a-z]+)?$/i,
		[]
	);
	const regexPassword = useMemo(() => /^([a-zA-Z0-9]{8,})$/, []);

	const changeNameHandler = async (event: React.SyntheticEvent) => {
		event.preventDefault();
		if (!name.match(regexName)) {
			Alert.alert('Nome inválido!');
			return;
		}

		try {
			await api.put(
				'/users',
				{name: name},
				{headers: {Authorization: token}}
			);
			Alert.alert('Nome alterado com sucesso!');
			setName('');
		} catch (err) {
			Alert.alert('Erro ao alterar nome!');
		}
	};

	const changeEmailHandler = async () => {
		if (!email.match(regexEmail)) {
			Alert.alert('Email inválido!');
			return;
		}

		try {
			await api.put(
				'/users',
				{email: email},
				{headers: {Authorization: token}}
			);
			Alert.alert('Email alterado com sucesso!');
			setEmail('');
		} catch (err) {
			Alert.alert('Erro ao alterar email!');
		}
	};

	const changePasswordHandler = async () => {
		if (!password.match(regexPassword)) {
			Alert.alert('Senha inválida!');
			return;
		}

		try {
			await api.put(
				'/users',
				{password: password},
				{headers: {Authorization: token}}
			);
			Alert.alert('Senha alterada com sucesso!');
			setPassword('');
		} catch (err) {
			Alert.alert('Erro ao alterar senha!');
		}
	};

	return (
		<SafeAreaView>
			<ScrollContainer>
				<HeaderApp />
				<Container>
					<TitleInput>Change Name</TitleInput>
					<Entries>
						<Input
							type="text"
							placeholder="Name"
							value={name}
							onChangeText={(
								nameInput: React.SetStateAction<string>
							) => setName(nameInput)}
						/>
						<Button onPress={changeNameHandler}>
							<TextButton>Save</TextButton>
						</Button>
					</Entries>

					<TitleInput>Change Email</TitleInput>

					<Entries>
						<Input
							type="text"
							placeholder="Email"
							value={email}
							onChangeText={(
								emailInput: React.SetStateAction<string>
							) => setEmail(emailInput)}
						/>
						<Button onPress={changeEmailHandler}>
							<TextButton>Save</TextButton>
						</Button>
					</Entries>
					<TitleInput>Change Password</TitleInput>

					<Entries>
						<Input
							type="text"
							placeholder="Password"
							value={password}
							onChangeText={(
								passwordInput: React.SetStateAction<string>
							) => setPassword(passwordInput)}
						/>
						<Button onPress={changePasswordHandler}>
							<TextButton>Save</TextButton>
						</Button>
					</Entries>
				</Container>
			</ScrollContainer>
		</SafeAreaView>
	);
};

export default Account;
