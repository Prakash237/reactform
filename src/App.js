import React from "react";
import "./App.css";
import HOC from "./HOC";
import Ternary from "./Components/Ternary"
import { useForm } from "react-hook-form";
import NameList from "./Components/NameList";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  

 
  // console.log(errors.name)

  return (
    <div>
      <div>
        <div>
          <HOC />
          {/* <Ternary />
          <NameList /> */}
          <h1>Login Form</h1>
          <form onSubmit={handleSubmit(onSubmit)}><br />
            <div>
              <label><h2>Name</h2></label>
              <input
                type="text" placeholder="Enter name"
                className={`form-control ${errors.name && "invalid"}`}
                {...register("name", { required: "Name is Required" })}
                onKeyUp={() => {
                  trigger("name");
                }}
              />
              {errors.name && (
                <small>{errors.name.message}</small>
              )}
            </div><br />
            <div>
              <label><h2>Password</h2></label>
              <input
                type="password" placeholder="Enter password"
                className={`form-control ${errors.age && "invalid"}`}
                {...register("password", {
                  required: "password is Required",
                  pattern: {
                    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
                    message: "password must contaions at least 8 characters with Uppercase,Lowercase,Character,Number",
                  }
                })}
                onKeyUp={() => {
                  trigger("password");
                }}
              />
              {errors.password && (
                <small className="text-danger">{errors.password.message}</small>
              )}
            </div><br />
            <div>
              <label><h2>Email</h2></label>
              <input
                type="text" placeholder="Enter email address"
                className={`form-control ${errors.email && "invalid"}`}
                {...register("email", { required: "Email is Required" ,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                }})}
                onKeyUp={() => {
                  trigger("email");
                }}
              />
              {errors.email && (
                <small className="text-danger">{errors.email.message}</small>
              )}
            </div><br />
            <div>
              <label><h2>Mobile</h2></label>
              <input
                type="text" placeholder="Enter mobile number"
                className={`form-control ${errors.mobile && "invalid"}`}
                {...register("mobile", { required: "mobile is Required",
                pattern: {
                  value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                  message: "Invalid mobile no",
                },
               })}
               onKeyUp={() => {
                trigger("mobile");
              }}
              />
              {errors.mobile && (
                <small className="text-danger">{errors.mobile.message}</small>
              )}
            </div><br /><br />
            <input
              type="submit"
              className="btn btn-primary my-3"
              value="Submit"
            /><br /> <br />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;             