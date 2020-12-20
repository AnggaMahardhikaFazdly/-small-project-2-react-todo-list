import React from 'react'
import { LoginBg } from '../../assets';
import { Button, Input, Gap, Link } from '../../components';
import { useHistory } from 'react-router-dom'

const Login = () => {
    const history = useHistory();
    return (
        <div className="main-page">
            <div className="left">
                <img src={LoginBg} className="bg-image" alt="imageBg" />
            </div>
            <div className="right">
                <p className="title">Login</p>
                <Gap height={18} />
                <Input label="Email" placeholder="Email" value="admin@todolist.com" />
                <Gap height={18} />
                <Input label="Password" placeholder="Password" value="********" />
                <Gap height={20} />
                <Button title="Login" onClick={() => history.push('/mainApp')} />
                <Gap height={100} />
                <Link title="Don't have an account yet, please register." onClick={() => history.push('/register')} />
            </div>
        </div>
    )
}

export default Login