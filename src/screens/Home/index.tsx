import React, {useEffect, useState} from 'react';
import {Text, SafeAreaView, Alert, View} from 'react-native';
import {useAppSelector} from '../../hooks/hooks';
import {
	Container,
	ScrollContainer,
	TitleHome,
	SubtitleHome,
	ButtonFilterDocker,
	RecentGames,
	EmptyList,
	EmptyListText,
} from './styles';
import HeaderApp from '../../components/HeaderApp';
import ItemGame from '../../components/ItemGame';
import IData from '../../interfaces/data';
import formateDate from '../../utils/formateDate';
import api from '../../services/api';
import Skeleton from '../../components/Skeleton';
import ButtonType from '../../components/ButtonType';
interface IBets {
	id: number;
	game_id: number;
	user_id: number;
	price: number;
	numbers: string;
	created_at: Date;
	updated_at: Date;
}

const Home: React.FC = ({navigation}: any) => {
	const [loading, setLoading] = useState<boolean>(true);
	const gameData: any = useAppSelector((state) => state.game.game);
	const currentUser = useAppSelector(
		(state) => state.currentUser.currentUser
	);
	const token = 'Bearer ' + useAppSelector((state) => state.token.token);
	const [filterSelect, setFilterSelect] = useState<Array<IData>>([
		gameData[0],
	]);
	const [recentBets, setRecentBets] = useState<Array<IBets>>();

	useEffect(() => {
		try {
			api.get('games/bet/all', {
				headers: {
					Authorization: token,
				},
			}).then((response) => {
				setRecentBets(response.data);
				setLoading(false);
			});
		} catch (err) {
			return;
		}
	}, [token, filterSelect]);

	const setButtonHandler = (item: IData) => {
		setLoading(true);
		const exist = filterSelect.findIndex(
			(element) => element.type === item.type
		);

		if (exist !== -1) {
			const remove = filterSelect.filter(
				(element) => element.type !== item.type
			);
			setFilterSelect(remove);
			return;
		}

		const add = filterSelect.concat(item);
		setFilterSelect(add);
	};

	const getColor = (id: number): string => {
		const index = gameData.findIndex((item: any) => {
			return item.id === id;
		});

		return gameData[index].color;
	};

	const getType = (id: number): string => {
		const index = gameData.findIndex((item: any) => {
			return item.id === id;
		});

		return gameData[index].type;
	};

	return (
		<SafeAreaView>
			<ScrollContainer>
				<HeaderApp navigation={navigation} />
				<Container>
					<TitleHome>RECENT GAMES</TitleHome>
					<SubtitleHome>Filters</SubtitleHome>
					<ButtonFilterDocker>
						{gameData.map((item: IData) => (
							<ButtonType
								type={item.type}
								color={item.color}
								isSelect={
									!!filterSelect?.find(
										(info) =>
											info.type === item.type
									)
								}
								pressed={() => setButtonHandler(item)}
							/>
						))}
					</ButtonFilterDocker>
					{loading ? (
						<RecentGames>
							<Skeleton />
							<Skeleton />
							<Skeleton />
							<Skeleton />
						</RecentGames>
					) : (
						<RecentGames>
							{recentBets?.length === 0 && (
								<EmptyList>
									<EmptyListText>
										No found Bets of this type.
									</EmptyListText>
								</EmptyList>
							)}
							{filterSelect.length === 0 &&
								recentBets?.map((item) => (
									<ItemGame
										game_id={item.game_id}
										type={getType(item.game_id)}
										color={getColor(item.game_id)}
										price={item.price}
										numbers={item.numbers}
										date={formateDate(
											item.created_at
										)}
										onCart={false}
									/>
								))}
							{recentBets?.map((item) =>
								filterSelect.map((filter) => {
									if (filter.id === item.game_id) {
										return (
											<ItemGame
												game_id={
													item.game_id
												}
												type={getType(
													item.game_id
												)}
												color={getColor(
													item.game_id
												)}
												price={item.price}
												numbers={
													item.numbers
												}
												date={formateDate(
													item.created_at
												)}
												onCart={false}
											/>
										);
									}
								})
							)}
						</RecentGames>
					)}
				</Container>
			</ScrollContainer>
		</SafeAreaView>
	);
};

export default Home;
