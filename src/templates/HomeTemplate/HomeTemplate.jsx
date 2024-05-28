import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import PageFooter from "../../components/Footer/Footer";
import { userLocal } from "../../services/userLocal";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserInfo,
  initUserFromStorage,
} from "../../redux/actions/userActions";
import { jwtDecode } from "jwt-decode";

const HomeTemplate = () => {
  const user = useSelector((state) => state?.auth?.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (user) {
      const jwt = jwtDecode(user);
      dispatch(getUserInfo(jwt.id));
    }
  }, [user, dispatch]);
  useEffect(() => {
    const user = userLocal.get();
    if (user) {
      dispatch(initUserFromStorage(user));
    }
  }, [dispatch]);
  return (
    <div>
      <Header />
      <Outlet />
      <PageFooter />
    </div>
  );
};

export default HomeTemplate;
