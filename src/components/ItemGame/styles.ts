import styled from 'styled-components';

interface IItemGame {
	color: string;
}

export const Container = styled.View<IItemGame>`
	border-left-width: 6px;
	border-left-color: ${(props: IItemGame) => props.color};
	border-radius: 6px;
	height: 80px;
	padding-left: 20px;
	margin-bottom: 20px;
	justify-content: center;
`;

export const Type = styled.Text<IItemGame>`
	font-size: 16px;
	font-family: 'Roboto Classic';
	color: ${(props: IItemGame) => props.color};
	margin-bottom: 4px;
`;

export const Numbers = styled.Text`
	font-family: 'Roboto Classic';
	margin-bottom: 4px;
`;

export const MoreInfo = styled.View`
	flex-direction: row;
`;

export const Date = styled.Text`
	margin-bottom: 4px;
`;

export const Price = styled.Text`
	margin-bottom: 4px;
`;
