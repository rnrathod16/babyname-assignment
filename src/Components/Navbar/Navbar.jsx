import React from 'react'
import { FiCoffee } from "react-icons/fi";

const Navbar = () => {
    return (
        <>

            <div className="container d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white">
                <h5 className="my-0 mr-md-auto font-weight-normal"> <FiCoffee color='purple' /> <b>BabyNama</b></h5>
                <nav className="my-2 my-md-0 mr-md-3">
                    <a className="p-2 text-dark" href="/">Home</a>
                    <a className="p-2 text-dark" href="/">Testimonials</a>
                    <a className="p-2 text-dark" href="/">About</a>
                    <a className="p-2 text-dark" href="/">Services</a>
                </nav>
            </div>

        </>
    )
}

export default Navbar