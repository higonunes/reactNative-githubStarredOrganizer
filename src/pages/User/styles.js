import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 15px 20px;
  padding-bottom: 1px;
`;

export const Header = styled.View`
  align-items: center;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #d3d3d3;
`;

export const Loading = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background: #d3d3d3;
`;

export const Name = styled.Text`
  font-size: 14px;
  color: #333;
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
`;

export const Bio = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 13px;
  line-height: 18px;
  color: #999;
  margin-top: 5px;
  text-align: center;
`;

export const Stars = styled.FlatList`
  margin-top: 20px;
`;

export const Starred = styled(RectButton)`
  background: #f5f5f5;
  border-radius: 4px;
  padding: 10px 10px;
  margin-bottom: 20px;
  flex-direction: row;
  align-items: center;
`;

export const OwnerAvatar = styled.Image`
  height: 42px;
  width: 42px;
  border-radius: 21px;
  background: #eee;
`;

export const Info = styled.View`
  margin-left: 10px;
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #333;
`;

export const Author = styled.Text`
  font-size: 15px;
  color: #666;
  margin-top: 2px;
`;
