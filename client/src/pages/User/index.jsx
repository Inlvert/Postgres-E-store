import React from "react";
import Header from "../../components/Header";
import UserForm from "../../components/UserForm";
import UserList from "../../components/UserList";


const UserPage = () => {
  return (
    <div>
      <div>
        <h1>UserPage</h1>
      </div>
      <Header />
      <UserForm />
      <UserList/>
    </div>
  );
};

export default UserPage;