import React from 'react'
import { HomeBg } from '../../assets';
import { Button } from '../../components';
import { useHistory } from 'react-router-dom'

const Login = () => {
    const history = useHistory();
    return (
        <div className="home-page">
            <div className="start">
                {/* <img src={HomeBg} className="bg-image" alt="imageBg" /> */}
                <Button title="Start" onClick={() => history.push('/login')} />
            </div>
        </div>
    )
}

export default Login