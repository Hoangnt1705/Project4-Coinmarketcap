import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
let LoginPage = (props) => {
    let { auth, signInWithEmailAndPassword } = props;
    const { register, handleSubmit, formState: { errors } } = useForm();
    let loginAuthentication = (auth, email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("user", user);
                window.location.href = "http://localhost:3006";
                toast('Wellcome')
            })
            .catch((error) => {
                console.log(error.message);
                toast("Email hoặc mật khẩu không chính xác")
            })
    }

    return (
        <div className='page'>
            <div className="loginContainer">
                <div className='form'>
                    <div className="out">
                        <Link to="/">
                            <i class="fa-solid fa-x"></i>
                        </Link>
                    </div>
                    <div className="title">
                        <div className="h3">
                            <Link to="/login" id='login1'>Đăng nhập</Link>

                        </div>
                        <div className="h3">
                            <Link to="/register" id='register1'>Đăng ký</Link>

                        </div>
                    </div>
                    <form className="userInfor" onSubmit={handleSubmit((data) => {
                        loginAuthentication(auth, data.email, data.password)
                        console.log(data);
                        console.log(auth);
                    })}>
                        <div>
                            <label htmlFor="inputEmail" className="form-label">Địa chỉ email</label>
                            <input type="email"
                                id="inputEmail"
                                className="form-control"
                                aria-describedby="passwordHelpBlock"
                                placeholder="Nhập địa chỉ email của bạn ..."
                                {...register('email', {
                                    required: "Vui lòng nhập email của bạn"
                                })}
                            />
                            <p className='errMess'>{errors.email?.message}</p>
                            <ToastContainer />
                        </div>
                        <div>
                            <label htmlFor="inputPassword5" className="form-label">Password</label>
                            <input type="password"
                                id="inputPassword5"
                                className="form-control"
                                aria-describedby="passwordHelpBlock"
                                placeholder="Nhập mật khẩu của bạn ..."
                                {...register('password', {
                                    required: "Vui lòng nhập mật khẩu của bạn",
                                    minLength: {
                                        value: 7,
                                        message: "Mật khẩu phải bao gồm ít nhất 7 kí tự"
                                    }
                                }
                                )}
                            />
                            <p className='errMess'>{errors.password?.message}</p>
                        </div>

                        <br></br>
                        <button type="submit" className="btn btn-primary">Đăng nhập</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;