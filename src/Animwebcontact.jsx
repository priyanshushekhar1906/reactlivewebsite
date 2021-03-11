import React, { useState } from 'react';

const Animcontact = () => {
    const [data,setData]=useState({
        fullname:"",
        phone:"",
        email:"",
        message:"",
    });
    const inputEvent=(event)=>{
        const {name,value}=event.target;
        setData((prev)=>{
            return {...prev,[name]:value,}
        })
    }
    const formSubmit=(e)=>{
        e.preventDefault();
        alert(`My name is ${data.fullname}.My mobile number is ${data.phone} and email is ${data.email},Here is what i want to say ${data.message}. `);

    };
    return (<>
        <div className="my-5">
            <h1 className="text-center">Contact Us</h1>
        </div>
        <div className="container contact_div my-5">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={formSubmit}>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label" >FullName</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={inputEvent}  placeholder="Enter your name"   autoComplete="off" required/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Phone no</label>
                            <input type="number" className="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={inputEvent} placeholder="Mobile number"  autoComplete="off"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={inputEvent} placeholder="name@example.com"  autoComplete="off" required/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" name="message" value={data.message} onChange={inputEvent} rows="3" autoComplete="off"></textarea>
                        </div>
                        <div class="col-12">
                            <button class="btn btn-outline-primary" type="submit">Submit form</button>
                        </div>
                    </form>

                </div>

            </div>
        </div>

    </>)
}


export default Animcontact;