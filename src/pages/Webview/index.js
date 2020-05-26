import React, { useEffect } from 'react';
import { WebView } from 'react-native-webview';
import PropTypes from 'prop-types';

const Webview = ({ navigation, route }) => {
  const { item } = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: item.name,
    });
  }, []);

  return <WebView source={{ uri: item.html_url }} style={{ flex: 1 }} />;
};

Webview.propTypes = {
  navigation: PropTypes.shape({
    setOptions: PropTypes.func,
  }).isRequired,
  route: PropTypes.shape().isRequired,
};

export default Webview;
