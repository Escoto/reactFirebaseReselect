import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAvXw4CQbeLx9PbpwAKPMNvAP_dGo3hOIE',
  authDomain: 'testblog-ac758.firebaseio.com',
  databaseURL: 'https://testblog-ac758.firebaseio.com/'
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;