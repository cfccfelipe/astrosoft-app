import React from 'react'

const Login = () => {
  return (
    <div class="wrapper fadeInDown">
      <div id="formContent">

        <div class="fadeIn first">
        <img
						src='logoblue.png'
						width={100}
						classNameName='img-fluid'
						alt='Astro'
					/>
        </div>
        <form>
          <input type="text" id="login" class="fadeIn second" name="login" placeholder="login" />
          <input type="text" id="password" class="fadeIn third" name="login" placeholder="password" />
          <input type="submit" class="fadeIn fourth" value="Log In" />
        </form>
      </div>

    </div>
  )
}

export default Login
