import {AppRegistry} from 'react-native';
import Router from './App';
import {name as appName} from './app.json';
import { PersistGate } from 'redux-persist/integration/react'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import storage from './src/storages/store';
import OneSignal from 'react-native-onesignal';

const { store, persistor } = storage()
class App extends Component {
  async componentDidMount() {
    /* O N E S I G N A L   S E T U P */
    OneSignal.setAppId("d83c72e3-c673-42ff-aa02-85c5f7cb2cbc");
    OneSignal.setLogLevel(6, 0);
    OneSignal.setRequiresUserPrivacyConsent(this.state.requiresPrivacyConsent);
    OneSignal.promptForPushNotificationsWithUserResponse(response => {
        this.OSLog("Prompt response:", response);
    });

    /* O N E S I G N A L  H A N D L E R S */
    OneSignal.setNotificationWillShowInForegroundHandler(notifReceivedEvent => {
        this.OSLog("OneSignal: notification will show in foreground:", notifReceivedEvent);
        let notif = notifReceivedEvent.getNotification();

        const button1 = {
            text: "Cancel",
            onPress: () => { notifReceivedEvent.complete(); },
            style: "cancel"
        };

        const button2 = { text: "Complete", onPress: () => { notifReceivedEvent.complete(notif); } };

        Alert.alert("Complete notification?", "Test", [button1, button2], { cancelable: true });
    });
    OneSignal.setNotificationOpenedHandler(notification => {
        this.OSLog("OneSignal: notification opened:", notification);
    });
    OneSignal.setInAppMessageClickHandler(event => {
        this.OSLog("OneSignal IAM clicked:", event);
    });
    OneSignal.addEmailSubscriptionObserver((event) => {
        this.OSLog("OneSignal: email subscription changed: ", event);
    });
    OneSignal.addSubscriptionObserver(event => {
        this.OSLog("OneSignal: subscription changed:", event);
        this.setState({ isSubscribed: event.to.isSubscribed })
    });
    OneSignal.addPermissionObserver(event => {
        this.OSLog("OneSignal: permission changed:", event);
    });

    const deviceState = await OneSignal.getDeviceState();

    this.setState({
        isSubscribed: deviceState.isSubscribed
    });
}
    render() {
      return (
        <Provider store={store}>
          <PersistGate persistor={persistor}>
              <Router />
          </PersistGate>
        </Provider>
      )
    }
  }

AppRegistry.registerComponent(appName, () => App);
