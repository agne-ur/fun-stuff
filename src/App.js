
import './App.css';
import PhoneBookForm from "./PhoneBookForm";
import InformationTable from "./InformationTable"
import {useState, useEffect} from "react";

const data = [{
  firstName: "Aola",
  lastName: "Munshine",
  phoneNumber: 6564466
},
{
  firstName: "Bola",
  lastName: "Sunshine",
  phoneNumber: 6564466 
},
{firstName: "Cola",
  lastName: "Zunshine",
  phoneNumber: 6564466,
}
]

function App() {

const [userData, setUserData] = useState(data);

function getNewUser(firstName, lastName, phoneNumber) {
  data.push({firstName, lastName, phoneNumber});
  setUserData([...data]);
  console.log("data", data)
}

  return (
    <section>
      <PhoneBookForm getNewUser={getNewUser}/>
      <InformationTable data={userData}/>
    </section>
  );
}

export default App;
