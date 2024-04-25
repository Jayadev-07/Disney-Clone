import axios from "axios";
import { useState } from "react";

const useUserList = () => {
  const [userInfo, setUserInfo] = useState<Tdata>();
  const [userData, setUserData] = useState<Tdata[] >([]);
    const [error, setError] = useState<string>("");
    const [complete, setComplete] = useState(false);
  const getUserByPhoneNo = async (phoneNo: string) => {
    try {
      const response = await axios.get("http://localhost:3000/users", {
        params: {
          phoneNo: phoneNo,
        },
      });
      console.log(response.data);
      setUserData(response.data);
    } catch (error: any) {
      setError(error);
    }
  };
    const putUserData = async (data: Tdata) => {
        console.log(data);
    try {
        const response = await axios.put(`http://localhost:3000/users/${data.id}`, data)
      setUserData(response.data);
      setUserInfo(response.data);
        setComplete(true)
    }
    catch (e:any){
        setError(e);
    }
}
  return { userData, error, getUserByPhoneNo, putUserData, complete, userInfo };
};


export default useUserList;

export type Tdata = {
  id: string;
  phoneNo: string;
  Otp: string;
  expTime: string;
};
