import { useEffect } from "react";
import "./Getreport.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";

export const Getreport = () => {

   
  const [dpdat, setdpdata] = useState([]);

  useEffect(() => {
    

    // Your effect logic here
    const apiUrl = "http://localhost:8080";
    const batchNo = localStorage.getItem("flbthno");
    const batchId = localStorage.getItem("btiddd");
    const farmerId = localStorage.getItem("pk");
    const dailyrpob = { batchId, farmerId, batchNo };
   if(dailyrpob.batchId!==undefined && dailyrpob.batchId!==null&& !isNaN(dailyrpob.batchId) && dailyrpob.batchNo!==undefined && dailyrpob.batchNo!==null && !isNaN(dailyrpob.batchNo) )
    {
        try {
       
      axios.post(`${apiUrl}/getdailyrepforfarmer`, dailyrpob).then((ans) => {
        console.log(ans);
       
        setdpdata(ans.data);
        // toast.success("request sent to server successfully", toast.POSITION.TOP_RIGHT);
      });
    } catch (error) {
      toast.error("Bhai/didi tum naye ho pehle daily report bharo ");
    }

    try {
      axios.post(`${apiUrl}/getmorttotalbirds`, dailyrpob).then((res) => {
        if (
          res.data.totalbirds === null ||
          res.data.totalbirds === [] ||
          res.data.totalbirds === NaN ||
          res.data.totalbirds === undefined ||
          res.data.totalmorts === null ||
          res.data.totalmorts === [] ||
          res.data.totalmorts === NaN ||
          res.data.totalmorts === undefined
        ) {
          toast.error("data not found");
          return false;
        }
        console.log(res);
        localStorage.setItem("tobirds", res.data.totalbirds);
        localStorage.setItem("tomort", res.data.totalmorts);
      });
    } catch (error) {
      toast.error("Bhai/didi tum naye ho pehle daily report bharo ");
    }
  }
}, []);

  return (
    <>
      <h1 style={{ textAlign: "center", color: "greenyellow", textShadow: "1.3px 1.1px white", backgroundColor: "black" }}>
        Current Batch Report
      </h1>
      <ToastContainer />
      <h2> Total Birds: {localStorage.getItem("tobirds")}</h2>
      <h2> Available Birds: {localStorage.getItem("tobirds") - localStorage.getItem("tomort")}</h2>

      <div className="getfamreprotmaindiv">
        <table>
          <tr>
            <th>Day</th>
            <th>Date</th>
            <th>Mort</th>
            <th>Feed Intake(in kg)</th>
            <th>Body Weight(in grams)</th>
          </tr>

          {dpdat.map((info) => (
            <tr key={info.day}> {/* Add a unique key */}
              <td>{info.day}</td>
              <td>{info.date}</td>
              <td>{info.mort}</td>
              <td>{info.feedIntake}</td>
              <td>{info.bodyWieght}</td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
};
