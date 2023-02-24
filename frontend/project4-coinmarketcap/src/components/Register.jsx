import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Data } from './Data';
import Footer from './Footer';

let RegisterPage = (props) => {
    let { auth, createUserWithEmailAndPassword, db, doc, updateDoc, arrayUnion } = props;
    const { register, handleSubmit, formState: { errors } } = useForm();

    let registerAuthentication = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                const updateUser = async (userId, newData) => {
                    const userDocRef = doc(db, "users", "userDocs");
                    try {
                        await updateDoc(userDocRef, {
                            dataUsers: arrayUnion({
                                id: Date.now(),
                                email: email,
                                password: password,
                            }),
                        });
                        toast("Đăng ký thành công");
                    } catch (error) {
                        toast(error.message);
                    }
                };
                updateUser();
            })
            .catch(error => {
                toast(error.message)
            });
    };

    return (
        <div className='page'>
            <div className="registerContainer">
                <div className="outRegister">
                    <Link to="/">
                        <i className="fa-solid fa-x"></i>
                    </Link>
                </div>
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
                            <label required className="form-check-label" htmlFor="exampleCheck1">I agree to receive marketing updated from CoinMarketCap</label>
                        </div>
                        <button type="click" className="btn btn-primary">Tạo tài khoản</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage;