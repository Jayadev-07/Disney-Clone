import React, { useEffect, useRef, useState } from "react";
import "../scss/componentStyle/OtpInput.scss";
type Otp = {
  length: number;
  Otpfunc: (a: string) => void;
};

const OtpInput = ({ length, Otpfunc }: Otp) => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>(
    Array.from({ length }, () => null),
  );
  const [otp, setOtp] = useState(new Array(length).fill(""));

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0]?.focus();
    }
  }, []);

  const handleChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = e.target.value;
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);
    const combinedOtp = newOtp.join("");
    if (combinedOtp.length === length) {
      Otpfunc(combinedOtp);
    }

    // Move to next
    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (
      e.key === "Backspace" &&
      index > 0 &&
      !otp[index] &&
      inputRefs.current[index - 1]
    ) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <>
      {otp.map((value, index) => (
        <input
          key={index}
          type="number"
          value={value}
          ref={(input) => (inputRefs.current[index] = input)}
          onChange={(e) => handleChange(index, e)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          className="otpBox"
        />
      ))}
    </>
  );
};

export default OtpInput;
