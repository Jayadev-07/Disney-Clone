import axios from "axios";
import { useEffect, useState } from "react";

type user = {
  name: string;
  age: number;
  place: string;
  dob: string;
  role: string;
};
const Datafetch = () => {
  const [data, setData] = useState<user[]>([]);
  useEffect(() => {
    axios
      .get("http://localhost:3031/users")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <div>
      {data.map((user, index) => (
        <ul key={index}>
          <li>name:{user.name}</li>
          <li>name:{user.age}</li>
          <li>name:{user.place}</li>
          <li>name:{user.dob}</li>
          <li>name:{user.role}</li>
        </ul>
      ))}
    </div>
  );
};

export default Datafetch;
