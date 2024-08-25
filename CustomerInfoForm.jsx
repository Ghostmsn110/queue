import { getDoc, doc, updateDoc, serverTimestamp, addDoc, collection, } from "firebase/firestore"; 
import { redirect } from "react-router-dom";
import { dbase } from "../Firebase";

export const CustomerInfoForm = async ({request}) => {
    const data = await request.formData()
    const customerData = {
      name: data.get('name'),
      number: data.get('number')
    }
    console.log(customerData);

    try {

      const colRef = collection(dbase, 'customers');
      await addDoc(colRef, {
        name: customerData.name,
        number: customerData.number,
        createdAt: serverTimestamp(),
      });
    } catch (error) {
      alert(error.message);
    }

    return redirect('/')
}
