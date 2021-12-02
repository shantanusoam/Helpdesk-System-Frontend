import React, {useState} from 'react'
import { LoginForm } from '../Components/Login.comp'
import { ResetPassword } from '../Components/PasswordReset.comp'
import './Entery.style.css'

export const Entery = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [frmLoad, setfrmLoad] = useState("login")
    const handleOnChange = e => {
        const {name, value} = e.target
        switch(name) {
            case 'email':
                setEmail(value);
                break;
            case 'password': 
                setPassword(value);
                break;
            default:
                break;    
        }
        console.log(name, value)
    }
    const handleOnSubmit = e => {
        e.preventDefault();
        if(!email || !password){
            alert("Please fill all the fields");
        }
        //to call api to submit the form
        
    }
    const handleOnResetSubmit = e => {
        e.preventDefault();
        if(!email){
            alert("Please Enter The Email");
        }
        //to call api to submit the form
        
    }
    const formSwitcher = frmtype => {
        setfrmLoad(frmtype);
    }
    
    return (
        <div className="entry-page bg-info flex-column ">
            <h1 className="heading ">Xl Helpdesk</h1>
            <div className="whiteboard">
                
                {frmLoad === "login" && <LoginForm handleOnChange={handleOnChange}
                email={email} password={password}
                handleOnSubmit={handleOnSubmit}
                formSwitcher={formSwitcher}
                >
                </LoginForm>}
                {frmLoad === "reset" && <ResetPassword handleOnChange={handleOnChange}
                email={email} 
                handleOnResetSubmit={handleOnResetSubmit}
                formSwitcher={formSwitcher}
                >
                </ResetPassword >}
                
            
            </div>
        </div>
    )

    }