import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let RegisterPage = (props) => {
    let { auth, createUserWithEmailAndPassword } = props;
    const { register, handleSubmit, formState: { errors } } = useForm();

    let registerAuthentication = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("user", user.email);
                toast('Đăng kí thành công')
            })
            .catch(error => {
                const errorCode = error.code;
                console.log(errorCode);
                const errorMessage = error.message;
                console.log(errorMessage);
                toast('Email đã được sử dụng')
            })
    }

    return (
        <div className='page'>
            <div className="registerContainer">
                <div className='form'>
                    <div className="title">
                        <div className="h3">
                            <Link to="/login" id='login2'>Đăng nhập</Link>

                        </div>
                        <div className="h3">
                            <Link to="/register" id='register2'>Đăng ký</Link>

                        </div>
                    </div>
                    <form className="userInfor" onSubmit={handleSubmit((data) => {
                        registerAuthentication(data.email, data.password);
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

                        <div>
                            <label htmlFor="inputId" className="form-label">Referral ID (Optional)</label>
                            <input type="text"
                                id="inputId"
                                className="form-control"
                                aria-describedby="passwordHelpBlock"
                                placeholder="Enter Referral ID ..."
                            />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">I agree to receive marketing updated from CoinMarketCap</label>
                        </div>
                        <button type="click" className="btn btn-primary">Tạo tài khoản</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage;