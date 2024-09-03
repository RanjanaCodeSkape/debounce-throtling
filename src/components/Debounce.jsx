import axios from "axios";
import { useEffect, useState } from "react";
import "../App.css";

export default function Debounce() {
  const [pinCode, setPinCode] = useState("");

 useEffect(() => {
    const getData = setTimeout(() => {
      axios
      .get(`https://api.postalpincode.in/pincode/${pinCode}`)
      .then((response) => {
        console.log(response.data[0].Message);
      });
    }, 4000)
    return () => clearTimeout(getData)
}, [pinCode])


  return (
    <div className="app">
      <input
      placeholder="Search Input.."
      onChange={(event) => setPinCode(event.target.value)}
 /><br/>
    </div>
  );
}


