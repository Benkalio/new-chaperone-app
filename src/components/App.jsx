import React from "react";
import contacts from "../contacts";
import Avatar from "./Avatar";
import Card from './Card';

function createCard(contact){
  return(
    <Card
      id={contact.id}
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
  />)
}

function App() {
  return(
    <div>
      <h1 className="heading">Contact List</h1>
      <Avatar 
        img="https://media-exp1.licdn.com/dms/image/C4D03AQGdL_0pa434lw/profile-displayphoto-shrink_200_200/0/1591319393524?e=1638403200&v=beta&t=A0IF59IOnnyzCZHrxc6fsPBHq8QObFdpbNKa_6zdN2o"
      />
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
