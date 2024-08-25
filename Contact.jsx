import { redirect } from "react-router-dom";
import { dbase} from "../Firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export const contact = async ({request}) => {
    const data = await request.formData()
    const messageInfo = {
      name: data.get('name'),
      email: data.get('email'),
      message: data.get('message')
    }
    console.log(messageInfo);

    try {
      const colRef = collection(dbase, 'contacts');
      await addDoc(colRef, {
        name: messageInfo.name,
        email: messageInfo.email,
        message: messageInfo.message,
        createdAt: serverTimestamp(),
      });
    } catch (error) {
      alert(error.message);
    }

    return redirect('/')

}
