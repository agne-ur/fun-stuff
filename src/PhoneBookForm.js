import React, { useState } from "react";


const style = {
  table: {
    borderCollapse: "collapse"
  },
  tableCell: {
    border: "1px solid gray",
    margin: 0,
    padding: "5px 10px",
    width: "max-content",
    minWidth: "150px"
  },
  form: {
    container: {
      padding: "20px",
      border: "1px solid #F0F8FF",
      borderRadius: "15px",
      width: "max-content",
      marginBottom: "40px"
    },
    inputs: {
      marginBottom: "5px"
    },
  }
}

function PhoneBookForm(props) {
  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");


        return (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              props.getNewUser(firstName, lastName, phoneNumber);
            }}
            style={style.form.container}
          >
            <label>First name:</label>
            <br />
            <input
              style={style.form.inputs}
              className="userFirstname"
              name="userFirstname"
              type="text"
              placeholder="Coder"
              onChange={e => {
                setfirstName(e.target.value);
              }}
            />
            <br />
            <label>Last name:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userLastname"
        name="userLastname"
        type="text"
        onChange={e => {
          setLastName(e.target.value);
        }}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userPhone"
        name="userPhone"
        type="text"
        onChange={e => {
          setPhoneNumber(e.target.value);
        }}
      />
      <br />
      <input
        style={style.form.submitBtn}
        className="submitButton"
        type="submit"
        />
    
        <input
          style={style.form.submitBtn}
          className="submitButton"
          type="submit"
          value="Add User"
        />
      </form>
    );
  }
   
  export default PhoneBookForm;