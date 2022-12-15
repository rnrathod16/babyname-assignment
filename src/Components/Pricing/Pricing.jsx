import React from 'react'
import Card from '../Card/Card'
import Data from "../../JsonData/Data";

const Pricing = () => {
    return (
        <>
            <div className="mt-4 m-auto" style={{ maxWidth: "85vw" }}>
                <h1 className='text-center mb-5'>Pricing</h1>
                <div className='d-flex justify-content-around'>
                    {Data.map((val) => {
                        return <Card val={val} />
                    })}
                </div>

            </div>
        </>
    )
}

export default Pricing