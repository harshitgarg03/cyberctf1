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
        <h1><img src="https://i.ibb.co/3yPVL2k/right-qr-code-3.jpg" alt="right-qr-code" border="0"></img></h1>
        
    </div>
  );
}

export default Challenge;
