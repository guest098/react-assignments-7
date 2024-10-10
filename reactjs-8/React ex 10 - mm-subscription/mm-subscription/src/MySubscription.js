import React from "react";


export default function MySubscription() {

    const [subscription, setSubscription] = React.useState(getEmptySubscription())
    function handleChange(event){
        setSubscription((prevSub)=> {
            return {
                    ...prevSub,
                    [event.target.name]: event.target.type=="checkbox"?event.target.checked:
                                  event.target.value
            }
        })

    }
    function getEmptySubscription() {
        return {
            name:"aa",
            email:"",
            role:"",
            frequency:"",
            termAgreement: false
        }
    }

    React.useEffect(() =>{
      fetch('http://localhost:3001/mySubscription')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setSubscription(data.subscription)
      }) 
    },[])

    return (

        <div className="wrapper">
        <h2>Subscription</h2>
        <form >
          <div className="input-box">
            <input type="text" placeholder="Enter your name" required 
            name="name" value={subscription.name}  onChange={handleChange}/>
          </div>
          <div className="input-box">
            <input type="text" placeholder="Enter your email" required 
            name="email" value={subscription.email} onChange={handleChange}/>
          </div>
          <div className="input-box" required>
            <select name="role"  default={subscription.name} onChange={handleChange}>
            <option value="Role" default>Role</option>
            <option value="CXO">CXO</option>
            <option value="Manager">Manager</option>
            <option value="Engineer">Engineer</option>
            <option value="Others">Others</option>        
            </select>
          </div>
          <div className="input-radio">
          <p>How would you like to receive news-letters?</p>
            <span><input type="radio" id="daily" name="frequency" 
            checked={subscription.frequency=="daily"}  value="daily"
            onChange={handleChange}/>
            <label htmlFor="daily">Daily</label></span>

            <span><input type="radio" id="weekly" name="frequency"
            checked={subscription.frequency=="weekly"}   value="weekly"
            onChange={handleChange}/>
            <label htmlFor="weekly">Weekly</label></span>        
          </div>
          <div className="policy">
            <input type="checkbox" checked={subscription.termAgreement}
            onChange={handleChange} name="termAgreement"/>
            <h3>I accept all terms & condition</h3>
          </div>
          <div className="input-box button">
            <input type="Submit" value="Register Now"/>
          </div>
        </form>
      </div>
    




    )



}