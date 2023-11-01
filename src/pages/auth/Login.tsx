import React from 'react'
import { Helmet } from 'react-helmet'
import { FiMenu } from 'react-icons/fi'

const Login = () => {
  return (
    <div>
      <Helmet>
        <title>Login Now !</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className="y-8"> Login Now !</div>
      <FiMenu color="black" size={30} className="icons" />
    </div>
  )
}

export default Login
