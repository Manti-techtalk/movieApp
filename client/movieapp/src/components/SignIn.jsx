import React,{useState} from 'react'
import styles from './SignIn.module.css'
import {Link} from 'react-router-dom'


function SignIn() {
    const [mail,setMail] = useState('')
    const [password,setPassword] = useState('')
  return (
    <div className={styles.container}>
            <div className={styles.btn}>
                <button className={styles.btn1}>MovieBox</button>
            </div>
            <div className={styles.rest}>
                <h3>Welcome Back</h3>
                <p className={styles.dim}>Signin to continue watching</p>
            
            <form action="" className={styles.form} >
                <input value={mail}
                onChange={(e)=>{setMail(e.target.value)}}
                className={styles.input}
                required
                type="email"
                placeholder='Email Address' />
                <br /> <br />
                <input value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                className={styles.input}
                required
                type="password" 
                placeholder='Password'/>
                <div className={styles.rem_forg}>
                    <p className={styles.rememberMe}>
                        <input  type="checkbox" /> <span>Remember Me</span>
                    </p>
                    <p className={styles.forgotPass}>
                        <Link>forgot Password?</Link>
                    </p>
                </div>
                <div className={styles.btnn}>
                    <button className={styles.btnn}>Login</button>
                </div>
                <p className={styles.dim}>
                    <p className={styles.span}>or continue with</p>
                </p>
                <div className={styles.options}>
                    <p className={styles.option}><i className="fa-brands fa-google"></i></p>
                    <p className={styles.option}><i className="fa-brands fa-github"></i></p>
                    <p className={styles.option}><i className="fa-brands fa-facebook"></i></p>
                </div>
            </form>
            </div>
    </div>
  )
}

export default SignIn