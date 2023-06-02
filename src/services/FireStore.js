// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, addDoc, query, where, collection, getDocs, Timestamp} from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB00_X9dF1KtHa1AW8IQu1zwgJQfsmpAXM",

    authDomain: "coderreact-f9bc5.firebaseapp.com",
  
    projectId: "coderreact-f9bc5",
  
    storageBucket: "coderreact-f9bc5.appspot.com",
  
    messagingSenderId: "991898167810",
  
    appId: "1:991898167810:web:e8cbf7dc6556a59e6f551b",
  
    measurementId: "G-TKDBJJQ0C0"
  
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireStoreDb = getFirestore(app);

export default fireStoreDb;

// Obtengo todos los items de la DB

export async function getAllItems() {
    const miColec = collection(fireStoreDb,'items');
    const itemsSnapshot = await getDocs(miColec);

    return itemsSnapshot.docs.map(doc => {
        return {
        ...doc.data(),
        id: doc.id
        }
})};

export async function getItemsByCategory(category){
    const miColec = collection(fireStoreDb,'items');
    const queryItem = query(miColec, where("category", '==', category));
    const itemSnapshot = await getDocs(queryItem);

    return itemSnapshot.docs.map(doc => {
        return {
        ...doc.data(),
        id: doc.id
        }
    
})};

export async function getItem(id){
    const miColec = collection(fireStoreDb,'items');
    const itemRef = doc(miColec, id);
    const itemSnapshot = await getDoc(itemRef);

    
        return {
        ...itemSnapshot.data(),
        id: itemSnapshot.id
        }
    
};

export async function createBuyOrder(orderData){
    const buyTimeStamp = Timestamp.now();
    const orderWithDate = {
        ...orderData,
        date: buyTimeStamp
    };
    const miColec = collection(fireStoreDb,'buyOrders');
    const orderDoc = await addDoc(miColec, orderWithDate);
    console.log("Orden lista con el id ",orderDoc.id);
    return orderDoc.id;   
}
