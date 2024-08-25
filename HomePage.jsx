import { useState, useEffect} from "react";
import { Link } from "react-router-dom"
import {collection, orderBy, onSnapshot, query, getDoc, doc, updateDoc, deleteDoc } from "firebase/firestore"
import { dbase } from "./Firebase";
import { auth } from "./Firebase";


const HomePage = () => {
  const [customer, setCustomers] = useState(null)
  const [user, setUser] = useState('')
  // const audioRef = useRef(null);
  const User = auth.currentUser;

  useEffect(() => {
    if (User) {
      setUser(User);
    }
  }, [User]);


  const AvgserviceTime = 15; 

  const fetchCustomer = async () => {
    const q = query(collection(dbase, 'customers'), orderBy('createdAt', 'asc' ));
    onSnapshot(q, async (snapshot) => {
      const customers = [];
      for (const doc of snapshot.docs) {
        const customerItem = { ...doc.data(), id: doc.id };
        customers.push(customerItem);
      }
      setCustomers(customers);
      
      console.log(customers)
    });
  };

  useEffect(() => {
    fetchCustomer();
  }, []);



  
      //Updating the Queue
      const handleClick = async (customerName, customerId) => {
        try {
          if (customerId) {
            // const handlePlayPause = () => {

            //     setTimeout(audioRef.current.play(),1000)
                
            // };
            // Notifies the customer that their table is ready
            alert(`${customerName}, your table is ready!`);
      
            // Deletes the customer from the Firebase collection
            const colRef = collection(dbase, 'customers');
            const docToDelete = doc(colRef, customerId);
            await deleteDoc(docToDelete);
            console.log('Customer deleted successfully:', customerId);

          } else {
            alert('Customer delete failed, please contact the developer.');
          }
        } catch (error) {
          console.error('Error in handleClick:', error);
          alert('An error occurred, please try again.');
        }
      };
      

  return (
    <div className='HomePageWrapper w-9/12 h-fit py-12 px-12 bg-white opacity-95 mt-12 mx-auto flex justify-center rounded-lg'>
      <div className="Queue flex flex-col gap-6 w-full h-fit">
        <div className="head flex justify-center items-center gap-4 w-full">
          <Link to='/CustomerInfo' className="joinQueueBtn headElement w-full text-white text-center rounded-md px-8 py-2 font-semibold text-nowrap">CLICK TO JOIN QUEUE</Link>
          <div className="serviceTime headElement w-full text-white font-semibold flex rounded-md">
            <p className="Desc w-full h-full bg-green-700 px-4 py-2 rounded-md text-nowrap text-center">SERVICE TIME</p>
            <p className="time w-full py-2 px-4 text-nowrap text-center">{AvgserviceTime} MINS.</p>
          </div>
        </div>
        <div className="indicator flex gap-4 justify-center items-center">
            <div className="queueNumber w-fit h-fit flex gap-2 justify-start items-center">
              <div className="box w-2 h-2 bg-amber-600"></div>
              <p className="text-xs font-semibold text-nowrap">QUEUE NUMBER</p>
            </div>
             <div className="customerData w-fit h-fit flex gap-2 justify-start items-center">
              <div className="box w-2 h-2"></div>
              <p className="text-xs font-semibold text-nowrap">CUSTOMER INFO</p>
            </div>
            <div className="waitTime w-fit h-fi flex gap-2 justify-start items-center">
              <div className="box bg-red-500 w-2 h-2"></div>
              <p className="text-xs font-semibold text-nowrap">WAITING TIME</p>
            </div>
          </div>
          {customer && customer.map((customer, index) => (
          <div key={customer.id} className="queueList w-full h-fit flex justify-center items-center text-center gap-4 font-semibold mt-6 border-b-2 border-green-200 pb-4">
            <p className="numBer bg-amber-600 py-1 px-4 rounded-md text-nowrap w-full">{index + 1}</p>
            <p className="name py-1 px-4 text-nowrap rounded-md w-full">{customer.name}</p>
            <div className="wait bg-red-700 py-1 px-4 w-full rounded-md text-nowrap">{(index + 1) * AvgserviceTime} mins</div>
            {user ? <div className="serviceStatus bg-red-500 py-1 px-4 w-full cursor-pointer rounded-md text-nowrap" onClick={() => {handleClick(customer.name, customer.id)}}>CHECK</div> : <div>PENDING</div> }
          </div>
          )) }
      </div>
    </div>
  )
}

export default HomePage