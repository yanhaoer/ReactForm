import React from 'react';
import { Redirect } from "react-router-dom";


import Login from '../views/Login';
import Dashboard from '../views/dashboard';
const routes = [
  {
    path: "/",
    exact: true,
    render: () => (
      <Redirect to="/login" />
    )
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/dashboard",
    component: Dashboard
  }
];

export default routes;