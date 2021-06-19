import styled from 'styled-components';

interface IButtonFilter {
	color?: string;
	isSelect?: boolean;
}

export const ButtonFilter = styled.TouchableOpacity<IButtonFilter>`
	align-items: center;
	justify-content: center;
	margin-right: 15px;

	width: 100px;
	height: 30px;
	background-color: ${(props: IButtonFilter) =>
		props.isSelect ? props.color : '#fff'};
	border-color: ${(props: IButtonFilter) => props.color};
	border-width: 2px;
	border-radius: 15px;
`;

export const TextButtonFilter = styled.Text<IButtonFilter>`
	color: ${(props: IButtonFilter) =>
		props.isSelect ? '#fff' : props.color};
	font-family: 'Roboto Classic';
`;
