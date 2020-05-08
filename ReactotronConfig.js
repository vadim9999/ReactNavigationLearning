import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
// import { AsyncStorage } from 'react-native';

const reactotron = Reactotron.configure({ name: 'React Native Demo' })
  .use(reactotronRedux())
  .connect();

export default reactotron;

/* Reactotron.log({
  numbers: [1, 2, 3],
  boolean: false,
  nested: { here: 'we go' },
});
Reactotron.warn('glares');
Reactotron.error("Now error");
Reactotron.display({
  name: 'KNOCK KNOCK',
  preview: 'Who\'s there?',
  value: 'Orange.'
}); */

// Reactotron.setAsyncStorageHandler(AsyncStorage)
//   .configure()
//   .useReactNative()
//   .connect();
