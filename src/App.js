
import './App.css';
import PhoneBookForm from "./PhoneBookForm";
import InformationTable from "./InformationTable"

function App() {
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

  return (
    <section>
      <PhoneBookForm />
      <InformationTable data={data}/>
  </section>
  );
}

export default App;
