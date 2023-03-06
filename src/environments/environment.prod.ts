import packageInfo from '../../package.json';
export const environment = {
  production: true,
  apiURL: 'http://localhost:8080/',
  appVersion: packageInfo.version
};
