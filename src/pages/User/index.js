import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import api from '../../services/api';
import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  Stars,
  Starred,
  OwnerAvatar,
  Info,
  Title,
  Author,
  Loading,
} from './styles';

export default function User({ navigation, route }) {
  const { user } = route.params;
  const [stars, setStars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const [loadingMore, setMore] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    navigation.setOptions({
      title: user.name,
    });

    async function getStarts() {
      const response = await api.get(`/users/${user.login}/starred?page=1`);
      setStars(response.data);
      setPage(1);
      setLoading(false);
      setRefresh(false);
    }

    getStarts();
  }, [refresh]);

  useEffect(() => {
    async function getStarts() {
      if (page > 1) {
        setMore(true);
        const response = await api.get(`/users/${user.login}/starred`, {
          params: {
            page,
          },
        });
        setStars([...stars, ...response.data]);
        setMore(false);
      }
    }

    getStarts();
  }, [page]);

  function handleStar(item) {
    navigation.push('Webview', { item });
  }

  return (
    <Container>
      <Header>
        <Avatar source={{ uri: user.avatar }} />
        <Name>{user.name}</Name>
        <Bio>{user.bio}</Bio>
      </Header>

      {loading ? (
        <Loading>
          <ActivityIndicator color="#7159c1" size="large" />
        </Loading>
      ) : (
        <>
          <Stars
            data={stars}
            keyExtractor={(star) => String(star.id)}
            onRefresh={() => setRefresh(true)} // Função dispara quando o usuário arrasta a lista pra baixo
            refreshing={refresh}
            onEndReachedThreshold={0.2} // Carrega mais itens quando chegar em 20% do fim
            onEndReached={() => setPage((prev) => prev + 1)}
            renderItem={({ item }) => (
              <Starred onPress={() => handleStar(item)}>
                <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
                <Info>
                  <Title>{item.name}</Title>
                  <Author>{item.owner.login}</Author>
                </Info>
              </Starred>
            )}
          />
          {loadingMore ? (
            <ActivityIndicator color="#7159c1" size="small" />
          ) : null}
        </>
      )}
    </Container>
  );
}

User.propTypes = {
  navigation: PropTypes.shape({
    setOptions: PropTypes.func,
    push: PropTypes.func,
  }).isRequired,
  route: PropTypes.shape().isRequired,
};
