import React from 'react';
import { WebView } from 'react-native-webview';
import { Spinner } from 'native-base';
function WebScreen(props) {
  const { navigation } = props;
  const { sourceUrl } = navigation.state.params;

  return (
    // {isLoading?( ):(
    //
    // )}
    <WebView
      source={{ uri: sourceUrl }}
      startInLoadingState={true}
      renderLoading={() => <Spinner color="green" />}
    />
  );
}

export default WebScreen;
