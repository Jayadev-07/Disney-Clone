import axios from "axios";
import { useEffect, useState } from "react";
import useUserList from "./useUserList";

const useUserData = (url: string) => {
  const [UserData, setUserData] = useState<Tdata>();
  const [data, setData] = useState<Tdata>();
  const { userData, getUserByPhoneNo } = useUserList();

  const postData = async (postData: Tdata) => {
    await getUserByPhoneNo(postData.phoneNo);
    setUserData(postData);
  };
  useEffect(() => {
    if (userData.length > 0) {
      console.log(userData.length);

      if (userData.length > 0) {
          const path = url + "" + `/${userData[0].id}`;
          const Ditem = userData.map((item) => ({
              ...item,
              ...UserData
          }))
        console.log(path);
        if (UserData) UserUpdate(Ditem[0], path);
      }
    } else {
      if (UserData) UserFetch(UserData);
    }
  }, [userData]);

  //insert new user into list
  const UserFetch = async (data: Tdata) => {
    try {
      const response = await axios.post(url, data);
      setData(response.data);
      console.log("yes", response.data);
    } catch {
      console.log("something went wrong");
    }
  };

  // update existing user OTP
  const UserUpdate = async (data:Tdata, path: string) => {
    try {
      const response = await axios.put(path, data);
      setData(response.data);
      console.log("yes", response.data);
    } catch {
      console.log("something went wrong");
    }
  };

  return { data, postData };
};

export default useUserData;
type Tdata = {
  phoneNo: string;
  Otp: string;
  expTime: string;
  id?: string;
  username?:string
};
