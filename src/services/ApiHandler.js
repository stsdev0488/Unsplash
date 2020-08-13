import Unsplash from 'unsplash-js/native';
import { ACCESS_KEY } from 'config';

const ApiHandler = new Unsplash({
  accessKey: ACCESS_KEY,
  timeout: 500,
});

export default ApiHandler;
