/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  Button,
  Alert,
  UIManager,
  LayoutAnimation,
} from 'react-native';
import {authorize, refresh, revoke} from 'react-native-app-auth';

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

type State = {
  hasLoggedInOnce: boolean;
  accessToken: string | null;
  accessTokenExpirationDate: string | null;
  refreshToken: string | null;
};

const config = {
  issuer:
    'https://gfkms.b2clogin.com/8e7676b3-bef5-4494-a5a9-af4a338a7ef8/v2.0/',
  clientId: '1d3789c1-85cf-4270-9704-cf295b0f5be1',
  redirectUrl: 'azuredemo://callback',
  additionalParameters: {},
  scopes: ['openid'],
  serviceConfiguration: {
    authorizationEndpoint:
      'https://gfkms.b2clogin.com/GFKMS.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_consumer_voice_test',
    tokenEndpoint:
      'https://gfkms.b2clogin.com/GFKMS.onmicrosoft.com/B2C_1_consumer_voice_test/oauth2/v2.0/token',
    revocationEndpoint:
      'https://gfkms.b2clogin.com/GFKMS.onmicrosoft.com/B2C_1_consumer_voice_test/oauth2/v2.0/logout',
  },
};

const App = () => {
  const [state, setState] = useState({
    hasLoggedInOnce: false,
    accessToken: '',
    accessTokenExpirationDate: '',
    refreshToken: '',
  });

  const onauthorize = async () => {
    try {
      const authState = await authorize(config);
      // this.animateState(
      //   {
      //     hasLoggedInOnce: true,
      //     accessToken: authState.accessToken,
      //     accessTokenExpirationDate: authState.accessTokenExpirationDate,
      //     refreshToken: authState.refreshToken
      //   },
      //   500
      // );
      console.log(authState);
    } catch (error: any) {
      Alert.alert('Failed to log in', error.message);
    }
  };

  return (
    <SafeAreaView>
      <Button title="Sign In" onPress={onauthorize} />
    </SafeAreaView>
  );
};

export default App;
