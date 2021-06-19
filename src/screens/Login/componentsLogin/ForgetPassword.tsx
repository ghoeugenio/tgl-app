import React, {useState} from 'react';
import api from '../../../services/api';
import {useAppDispatch} from '../../../hooks/hooks';
import {currentUserActions} from '../../../store/Redux/currentUser';
import {loginActions} from '../../../store/Redux/login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import IUser from '../../../interfaces/users';
import {
	ComponentContainer,
	ComponentTitle,
	ComponentUI,
	ComponentInput,
	ComponentButton,
	ComponentTextButton,
} from '../styles';
import {AntDesign} from '@expo/vector-icons';
import {Alert} from 'react-native';

const ForgetPassword: React.FC = ({navigation}: any) => {
	const [email, setEmail] = useState<string>('');
	const dispatch = useAppDispatch();
	const regexEmail = /^[a-z0-9._]+@[a-z0-9]+\.[a-z]+\.?([a-z]+)?$/i;

	const submitHandler = async (event: React.SyntheticEvent) => {
		event.preventDefault();
		if (!email.match(regexEmail)) {
			Alert.alert('Insira dados válidos!');
			return;
		}

		try {
			await api.post('password', {
				email: email,
				redirect_url: 'http://localhost:3000/redirect',
			});
			Alert.alert(
				`Um email foi enviado para ${email}! Só é possivel recuperar pelo Desktop!`
			);
		} catch {
			Alert.alert('Erro ao recuperar senha!');
		}
	};

	const backHandler = (event: React.SyntheticEvent): void => {
		event.preventDefault();
		dispatch(loginActions.setLogin());
	};

	return (
		<ComponentContainer>
			<ComponentTitle>Reset Password</ComponentTitle>
			<ComponentUI>
				<ComponentInput
					placeholder="Email"
					value={email}
					onChangeText={(
						emailInput: React.SetStateAction<string>
					) => setEmail(emailInput)}
				/>
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
			<ComponentButton onPress={backHandler}>
				<AntDesign name="arrowleft" size={24} color="#707070" />
				<ComponentTextButton inUI={false}>Back</ComponentTextButton>
			</ComponentButton>
		</ComponentContainer>
	);
};

export default ForgetPassword;
