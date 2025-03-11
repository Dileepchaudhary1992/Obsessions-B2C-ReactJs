function Loginform(){
 return(
          <>

          <div className="loginform">   
           <div className="conatiner"> 
            <div className="row">
                <div className="col-md-12"> 
                 <h2> Login form </h2>
                 <label style={{color:'#FFF'}}> Name: <input name="myInput" className="form-control" /> </label>
                  <p> <label style={{color:'#FFF'}}> Email id: <input name="myInput" className="form-control" /> </label></p> 
                  <p> <label style={{color:'#FFF'}}> Mobile No.: <input name="myInput" className="form-control" /> </label></p> 
                  <p>  <label style={{color:'#FFF'}}> Mobile No.: <textarea name="" className="form-control"></textarea> </label></p> 
                  <p> <label> <button className="btn btn-primary"> SUBMIT </button> </label></p> 
                </div> 
            </div>
           </div>
          </div>

          </>
 )

}
export default Loginform;