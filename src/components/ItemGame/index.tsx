import React from 'react';
import ISelectNumbers from '../../interfaces/selectNumbers';
import {Container, Type, Numbers, MoreInfo, Date, Price} from './styles';

const ItemGame: React.FunctionComponent<ISelectNumbers> = ({
	type,
	price,
	color,
	numbers,
	onDelete,
	date,
	onCart,
}) => {
	if (onCart) {
		return <Container color={color}></Container>;
	} else {
		return (
			<Container color={color}>
				<Numbers>{numbers}</Numbers>
				<MoreInfo>
					<Date>{`${date} - `}</Date>
					<Price>{`(R$: ${price
						.toFixed(2)
						.toString()
						.replace(/[.]/, ',')})`}</Price>
				</MoreInfo>
				<Type color={color}>{type}</Type>
			</Container>
		);
	}
};

export default ItemGame;
