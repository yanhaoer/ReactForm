import React from "react";
import { Card } from "antd";
import LoginForm from "./login-form/login-form";
import "./index.css";

function index() {
  return (
    <div className="LoginContainer">
      <Card hoverable title="登录表单" className="card-center">
        <LoginForm />
      </Card>
    </div>
  );
}

export default index;
