import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {Redirect} from 'react-router-dom'
function Login(){
    const isLoggined = useSelector(state => state.isLoggined)
    const dispatch = useDispatch();
    const [login,setLogin]=useState(null);
    const [pass,setPass]=useState(null);

    function loginChangeHandler(e){
        setLogin(e.target.value);
    }

    function passChangeHandler(e){
        setPass(e.target.value);
    }

    function checkForm(e){
        e.preventDefault();
        if(login=="Admin" && pass=="12345") 
        dispatch({type:'SET_LOGGINED',payload:true});
    }
    return(
        <form>
            {isLoggined ? <Redirect to="/profile"/>:null}
            <label>Login</label>
            <input onChange={loginChangeHandler}/>
            <label>Password</label>
            <input onChange={passChangeHandler}/>
            <button onClick={checkForm}>Sign in</button>
        </form>
    )
}

export default Login;