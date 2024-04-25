import React, { useState } from "react";
import OtpInput from "./OtpInput";

const PhoneOtp = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const handlePhoneNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault;
    setShowOtpInput(true);
    };
    const onOtpSubmit = (otp:string) => {
        console.log("hello " ,otp);
    }
  return (
    <div>
     { !showOtpInput ? <form onSubmit={handleSubmit}>
        <input type="number" value={phoneNumber} onChange={handlePhoneNumber} />
        <button type="submit">Submit</button>
          </form> : <div>
                  enter the otp send to {phoneNumber}
                  <OtpInput length={4} Otpfunc={onOtpSubmit} />
          </div>}
    </div>
  );
};

export default PhoneOtp;
