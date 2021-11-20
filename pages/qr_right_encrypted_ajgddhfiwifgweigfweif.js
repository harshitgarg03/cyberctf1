import React, { useEffect, useCallback, useContext } from "react";
import Router from "next/router";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../redux/actions";
import { Card, Form, Input, Button, Divider, Typography } from "antd";
import { API_BASE_URL } from "../constants/apiConstants";
import axios from "axios";

const { Link } = Typography;

function Challenge() {

    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.currentUser);



    useEffect(()=>{
        if(currentUser.loggedIn){

        } else {
            Router.push("/");
        }
    }, [])

    const logout = () => {
        dispatch(allActions.userActions.logOut());
        Router.push("/");
      };

  return (
    <div>
        <h1><img src="https://lh6.googleusercontent.com/QSh7yrb5XMpln13Yn-fgtjQuNu1eVL0OHFmQfR4P_HPGZzFgJ7Cf6XSPd0tJMH6HDRbIyvW_Fiffjg=w1919-h880"></img></h1>
        
    </div>
  );
}

export default Challenge;
