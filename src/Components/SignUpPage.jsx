import React, { useState } from 'react'

import { Link } from 'react-router-dom';
import allIndia from '../state&district.json'
const allstate = allIndia.states.map(data => data.state)
console.log(allstate)






const SignUpPage = () => {
    const [emailOrNumber, setEmailOrNumber] = useState("");
    const [password, setPassword] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [district, setDistrict] = useState("");

    const [state, selectState] = useState("");
    console.log(state, "selected state")
    console.log(allIndia)
    const alldistricts = allIndia.states.find(s => s.state === state)?.districts || [];
    

    const handleSignUp = async () => {
    const userData = {
        emailOrNumber,
        password,      // hash in backend before storing
        address1,
        address2,
        state,
        district
    };

    try {
        const res = await fetch("http://localhost:5000/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData)
        });

        const data = await res.json();
        console.log(data);
        alert("Signup successful!");
    } catch (err) {
        console.error(err);
        alert("Error signing up");
    }
};

    console.log(alldistricts, "all districts")
    return (

        <div className="min-h-screen flex items-center justify-center bg-primary text-white px-2">

            <div className="bg-white text-black p-6 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">SIGN UP</h2>

                <div className="space-y-4">
                    <input
                        type="text"
                        placeholder="Enter your number or email"
                        value={emailOrNumber}
                        onChange={e => setEmailOrNumber(e.target.value)}
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                    />

                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                    />

                    <input
                        type="text"
                        placeholder="Address Line 1"
                        value={address1}
                        onChange={e => setAddress1(e.target.value)}
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                    />

                    <input
                        type="text"
                        placeholder="Address Line 2"
                        value={address2}
                        onChange={e => setAddress2(e.target.value)}
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                    />

                    <select
                        id='states'
                        value={state}
                        onChange={(e) => selectState(e.target.value)}
                    >
                        <option value="" disabled>Select State</option>
                        {
                            allstate.map(response => <option key={response} value={response}>{response}</option>)
                        }
                    </select>
                    <select id="districts"
                        value={district}
                        onChange={(e) => setDistrict(e.target.value)}
                    >
                        <option value="" >Select District</option>
                        {
                            alldistricts.map(response => <option key={response} value={response}>{response}</option>)
                        }
                    </select>


                    <button 
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                      onClick={handleSignUp}
                    >
                        Sign up
                    </button>

                    <p className="text-primary hover:text-secondary cursor-pointer text-center">
                        <Link to={"/login"} > Already have an account? <span className="underline"  >Click here</span></Link>
                    </p>

                </div>

            </div>
        </div>
    );
}

export default SignUpPage