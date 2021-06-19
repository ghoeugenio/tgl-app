import React from 'react';
import {SafeAreaView, Text} from 'react-native';

import {Container, ScrollContainer} from './styles';

const Bet: React.FC = () => {
	return (
		<SafeAreaView>
			<ScrollContainer>
				<Container>
					<Text>Bet</Text>
				</Container>
			</ScrollContainer>
		</SafeAreaView>
	);
};

export default Bet;
