import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiFillCheckCircle } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";
import "./Card.css"


const Card = ({ val }) => {

    const [price, setPrice] = useState(val.price)

    const getvalue = (e) => {
        const multiply = e.target.value;
        setPrice(price * multiply)
    }

    const notify = () => toast.success('Your Payment is Successful', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });;

    return (
        <>
            <div className="card mb-4 shadow-lg" style={{ width: '30%' }}>
                <div className="card-header">
                    <h4 className="my-0 font-weight-normal text-center">{val.title}</h4>
                </div>
                <div className="card-body">
                    <h1 className="card-title pricing-card-title text-center mt-3 ">${price}</h1>
                    <div className="dropdown d-flex justify-content-center mb-4 container">
                        <select className="custom-select" style={{ width: "40%" }} name="price" onChange={getvalue}>

                            <option value={1} selected>1 Month</option>
                            <option value={2}>3 Month</option>
                            <option value={3}>9 Month</option>
                        </select>
                    </div>
                    <ul className="list-unstyled mt-3 mb-4">
                        <li className='mb-3'><b>{val.symbol[0] === 1 ? <AiFillCheckCircle color='green' /> : <AiFillCloseCircle color='red' />} WhatsApp Group : </b>{val.group}</li>
                        <li className='mb-3'><b>{val.symbol[1] === 1 ? <AiFillCheckCircle color='green' /> : <AiFillCloseCircle color='red' />} Basic Medical Queries : </b>{val.queries}</li>
                        <li className='mb-3'><b>{val.symbol[2] === 1 ? <AiFillCheckCircle color='green' /> : <AiFillCloseCircle color='red' />} Private Chat : </b>{val.chat}</li>
                        <li className='mb-3'><b>{val.symbol[3] === 1 ? <AiFillCheckCircle color='green' /> : <AiFillCloseCircle color='red' />} Video Consultation : </b>{val.video}</li>
                        <li className='mb-3'><b>{val.symbol[4] === 1 ? <AiFillCheckCircle color='green' /> : <AiFillCloseCircle color='red' />} Growth tracking for baby : </b>{val.growth}</li>

                    </ul>
                    <button type="button" className="btn btn-lg btn-block btn-outline-success mt-5" onClick={notify}>Pay Now</button>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default Card