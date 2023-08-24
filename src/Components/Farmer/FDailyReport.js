import React from "react";
import "./FDailyReport.css";

export const FDailyReport = () => {




 const handledailyreportfarmer=(e)=>{
       e.preventDefault();


 }



  return (
    <div id="whole">
      
      <div id="header">
        <h1>Daily Report</h1>
      </div>
      <div id="content">
        <div id="frm">
          <form>
            <table className="tbl">
              <tr className="tblr1">
                <th><h3> Date</h3></th>
                <th><h3> Age </h3></th>
                <th><h3> Mort </h3></th>
                {/* <th><h3>  Total Mort </h3></th> */}
                {/* <th><h3> Total Stock Available </h3></th> */}
                {/* <th><h3> Min Feed Intake </h3></th> */}
                <th><h3> Actual Feed Intake </h3></th>
                {/* <th><h3> Min Body Weight </h3></th> */}
                <th><h3> Actual Body Weight </h3></th>
                <th><h3>Status of batch </h3></th>
              </tr>
              <tr id="tblr2">
                <td>
                  <input type="date" />
                </td>
                <td>
                  <input type="number" />
                </td>
                <td>
                  <input type="number" />
                </td>
                <td>
                  <input type="number" />
                </td>
                <td>
                  <input type="number" />
                </td>
                {/* <td>
                  <input type="number" />
                </td>
                <td>
                  <input type="number" />
                </td> */}
                <td>
                  {/* <input type="number" /> */}
                </td>
                <td>
                  <select><option value={true}>open</option><option value={false}>ended</option> </select>
                </td>
              </tr>
              <tr>
                <td >
                 
                </td>
              </tr>
            </table>
          </form>
          <div className="btns">
          <button id="subbtn" onClick={handledailyreportfarmer}>Submit</button>
                  <button type="reset" id="resbtn">
                    Clear
                  </button>
                  </div>
        </div>
      </div>
    </div>
  );
};
