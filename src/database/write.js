import { collection, addDoc, doc, updateDoc } from "firebase/firestore"; 
import { db } from "./config";

export async function save(description, status){
    console.log('Saving...', {description, status});
    
    try {
        const docRef = await addDoc(collection(db, "Tasks"), {
            description: description,
            status: status
    });
        return docRef.id;
    } catch (e) {
        console.error("Error adding document: ", e);
        return null
    }
}

export async function update(id, data) {
    console.log('Updating...');
    
    const docRef = doc(db, "Tasks", id);
    const result = await updateDoc(docRef, data);
    console.log('Result: ', result);
    }