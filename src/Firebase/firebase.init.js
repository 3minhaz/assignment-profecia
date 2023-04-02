import { initializeApp } from 'firebase/app';
const firebaseConfig = {
    apiKey: "AIzaSyCr9VjgIMNtsvrHZ0XIJpey_GOU7BcEzKk",
    authDomain: "load-image-3d544.firebaseapp.com",
    projectId: "load-image-3d544",
    storageBucket: "load-image-3d544.appspot.com",
    messagingSenderId: "933176369888",
    appId: "1:933176369888:web:71f9385007e8352094e685"
  };
const initializeAuthentication= () => {
    return initializeApp(firebaseConfig)
}
 
export default initializeAuthentication;