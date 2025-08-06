import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from './config';


/**
 * Loads all documents from the Form collection
 * @returns 
 *  Array with the tasks.
 */
export async function load() {
    console.log('Loading...');

    try {
        const querySnapshot = await getDocs(collection(db, "Tasks"));
        return processQuerySnapshot(querySnapshot);
    }

    catch (error) {
        console.warn(error);
        throw new Error ('Faild to load the database.');
    }

/*     const data = [];

    const dbCollection = collection(db, 'Form');
    getDocs(dbCollection)
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const form = {
                    ...doc.data(),
                    id: doc.id
                };
                data.push(form)
            });
        })
        .catch((error) => {
            console.log('Error:', error);
        });

        return new Promise((resolve, reject) => {
            resolve('ok');
        }); */
}

/**
 * Loads all open tasks from the Form collection
 * @returns 
 *  Array with the tasks
 */
export async function loadOpen() {
    console.log('Load Open Tasks');
    try{
        const q = query(collection(db, "Tasks"), where("status", "==", "open"));
        const querySnapshot = await getDocs(q);
        return processQuerySnapshot(querySnapshot);
    }
    catch (error) {
        console.warn(error);
        throw new Error ('Faild to load the database.');
    }

}

/**
 * Converts a Firebase query snapshot into an array
 * 
 * @param {object} querySnapshot
 *  The query snapshot returned by Firebase
 * @returns 
 *  Array with the data
 */
function processQuerySnapshot (querySnapshot) {
    const data = [];

    querySnapshot.forEach((doc)=>{
        data.push({
            ...doc.data(),
            id: doc.id
        });
    });
    
    return data;
}
