import "./FProblemSuggestion.css" ;
export const FProblemSuggestion=()=>
{
    const id =101 ;
        var dt = new Date();
        
    return(<>
    <div className="fprobsugges"> 
      <div id="prob">
      <h1>Problems</h1>
      <form action="/Farmerlogin/dashboard/problemsolution/data" method="post"> 
      <table id="tb1">
        <div id="tbod"> 
       <tr>
        <td>Id</td>  <td>Date</td> <td>Select Problem </td> <td> Remark</td> <td>Upload Photo</td>
       </tr>
       <tr> <td>{id}</td><td><input type="date"/></td>
       <td> <select><option selected>None</option> <option>flue</option> <option>Feed stock over</option> <option>Medicines over </option>  </select> </td>
       <td><input type="text"/></td><td><input type="file"/></td></tr>

       <tr> <td colSpan={5}><div className="but"> <input type="submit" className="s1"/> <input type="reset" className="s1"/> </div> </td> </tr> 
       </div>
      </table>
      </form>
      </div>
        
        <div id="sugges"> 
      <h1>Suggetions from Company </h1>
       <form>
        <table id="tb2">
            <tr><td>Sr.No</td><td>ID</td><td>Date</td><td>Problem</td><td>Solution</td></tr>
            <tr><td>1</td><td>{id}</td><td>{dt.getDate.toString}</td><td> </td><td> </td></tr>
        </table>
       </form>
    
    
      </div>


      </div>
    
    </>)
}