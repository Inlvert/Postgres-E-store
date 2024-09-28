import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registration } from "../../redux/slice/authSlice";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "",
    isMale: false,
    birthday: "",
    bonusAmount: 10,
    avatar: null,
  });

  const initialFormState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "",
    isMale: false,
    birthday: "",
    bonusAmount: 10,
    avatar: null,
  };

  const resetForm = () => {
    setFormData(initialFormState);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      avatar: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(e);

    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    dispatch(registration(formDataToSend));

    console.log(formDataToSend);

    resetForm();
  };

  return (
    <form
      onSubmit={handleSubmit}
      encType="multipart/form-data"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        maxWidth: "400px",
        padding: "20px",
        border: "solid",
      }}
    >
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="role">Role:</label>
        <input
          type="text"
          id="role"
          name="role"
          value={formData.role}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="isMale">Male:</label>
        <input
          type="checkbox"
          id="isMale"
          name="isMale"
          checked={formData.isMale}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="birthday">Birthday:</label>
        <input
          type="date"
          id="birthday"
          name="birthday"
          value={formData.birthday}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="bonusAmount">Bonus Amount:</label>
        <input
          type="number"
          id="bonusAmount"
          name="bonusAmount"
          value={formData.bonusAmount}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="avatar">Avatar:</label>
        <input
          type="file"
          id="avatar"
          name="avatar"
          onChange={handleFileChange}
        />
      </div>
      <button type="submit">
        Submit
      </button>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
    </form>
  );
};

export default RegistrationForm;
