import { redirect } from "react-router-dom";
import { auth} from "../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export const AdminForm = async ({request}) => {
    const data = await request.formData()
    const adminData = {
      email: data.get('email'),
      password: data.get('password')
    }
    console.log(adminData);
    
    signInWithEmailAndPassword(auth, adminData.email, adminData.password )
        .then(() => {
            alert('LOGIN SUCCESS!')
        }).catch((err) => {
            alert(err.message)
        })

    return redirect('/')

}