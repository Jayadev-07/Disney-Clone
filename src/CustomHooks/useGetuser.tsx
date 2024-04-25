import axios from "axios";
import { useEffect, useState } from "react";

const useGetuser = () => {
  const date = new Date();
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    //  timeZone: 'Asia/Kolkata' // Set the time zone to Indian Standard Time
  };
  const [valid, setValid] = useState(false);
  const [user, setUser] = useState<Tuser[]>([]);
  const [error, setError] = useState<string>("");
  const [otp, setOtp] = useState("");
  const getUserByPhoneNo = async (phoneNo: string, otp: string) => {
    setOtp(otp);
    try {
      const response = await axios.get("http://localhost:3000/users", {
        params: {
          phoneNo: phoneNo,
        },
      });
      console.log(response.data);
      setUser(response.data);
    } catch (error: any) {
      setError(error);
    }
  };

  useEffect(() => {
    if (user.length > 0) {
      OtpMatch();
    }
  }, [user]);

  const OtpMatch = () => {
    console.log("hello");
    if (user) {
      console.log("yes");
      console.log(user[0].Otp, otp);
      const exp = isExpired(user[0].expTime);
      if (user[0].Otp == otp && exp) {
        setValid(true);
      } else {
        setValid(false);
      }
    }
  };

  const isExpired = (value: string) => {
    const time = date.toLocaleString("en-IN", options);
    console.log(time, value);
    return value >= time;
  };
  return { getUserByPhoneNo, valid, error };
};

export default useGetuser;

type Tuser = {
  Otp: string;
  expTime: string;
};
