import React, { useState } from 'react'
import FirstStep from './step1'
import SecondStep from './step2'
import ThirdStep from './step3'
import LastStep from './step4'
import './payment.css'


const Payment = () => {
    const steps = [<FirstStep />,
    <SecondStep />,
    <ThirdStep />,
    <LastStep />]
    // const steps = ["Customer Info", "Shipping Info", "Payment", "Step 4"];
    const [currentStep, setCurrentStep] = useState(1);
    const [complete, setComplete] = useState(false);
    return (
        <>
            <div className="">
                {steps?.map((step, i) => (
                    <div
                        key={i}
                        className={`step-item ${currentStep === i + 1 && "active"} ${(i + 1 < currentStep || complete) && "complete"
                            } `}
                    >
                        <div className="text-gray-500 text-center">{step}</div>


                    </div>
                ))}
            </div>
            <div className='justify-center text-center '>
                <button
                    className="btn"
                    onClick={(event) => {
                        event.preventDefault();
                        window.open("https://www.tgr.gov.ma/wps/portal/donsenligneseisme2023", "_blank");
                    }}
                >
                    Donate
                </button>
                {/* {!complete && (
                    currentStep === 1
                        ? <div></div>
                        : <button
                            className="btn"
                            onClick={() => {
                                setCurrentStep((prev) => prev - 1);
                            }}
                        >
                            {"back"}
                        </button>
                )}
                {!complete && (
                    <button
                        className="bton"
                        onClick={() => {
                            currentStep === steps.length
                                ? setComplete(true)
                                : setCurrentStep((prev) => prev + 1);
                        }}
                    >
                        {currentStep === steps.length ? "Finish" : "Next"}
                    </button>
                )} */}
            </div >
            <br></br>
            {/* <div className='justify-center text-center'>

                <span className='paymentbutton ' > Card </span>
            </div> */}


        </>
    );
}

export default Payment