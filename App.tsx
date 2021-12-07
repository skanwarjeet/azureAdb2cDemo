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
  Platform,
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
    'https://ksg1806.b2clogin.com/22c7745c-fd5a-4214-ba7a-bc07bf05684b/v2.0/',
  clientId: '43e96235-af0e-480b-9b93-8f6d28dca287',
  redirectUrl: 'com.demo.azureb2c://callback/',
  additionalParameters: {},
  scopes: ['openid', 'offline_access'],
  serviceConfiguration: {
    authorizationEndpoint:
      'https://ksg1806.b2clogin.com/ksg1806.onmicrosoft.com/b2c_1_signup_signin/oauth2/v2.0/authorize',
    tokenEndpoint:
      'https://ksg1806.b2clogin.com/ksg1806.onmicrosoft.com/b2c_1_signup_signin/oauth2/v2.0/token',
    revocationEndpoint:
      'https://ksg1806.b2clogin.com/ksg1806.onmicrosoft.com/b2c_1_signup_signin/oauth2/v2.0/logout',
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
      const result = await authorize(config);
      // this.animateState(
      //   {
      //     hasLoggedInOnce: true,
      //     accessToken: authState.accessToken,
      //     accessTokenExpirationDate: authState.accessTokenExpirationDate,
      //     refreshToken: authState.refreshToken
      //   },
      //   500
      // );

      // console.log('hello');
      console.log(result);
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
