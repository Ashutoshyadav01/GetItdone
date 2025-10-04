import React, { useState } from 'react'

import { Link } from 'react-router-dom';
import allIndia from '../state&district.json'
const allstate = allIndia.states.map(data => data.state)
console.log(allstate)
const SignUpPage = () => {
    const [state, selectState] = useState("");
    console.log(state,"selected state")
    console.log(allIndia)
 const alldistricts = allIndia.states.find(s => s.state === state)?.districts || [];

    console.log(alldistricts,"all districts")
    return (

        <div className="min-h-screen flex items-center justify-center bg-primary text-white px-2">

            <div className="bg-white text-black p-6 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">SIGN UP</h2>

                <div className="space-y-4">
                    <input
                        type="text"
                        placeholder="Enter your number or email"
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input
                        type="password"
                        placeholder="Enter your password"
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input
                        type="text"
                        placeholder="Address Line 1"
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input
                        type="text"
                        placeholder="Address Line 2"
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
                    <select id="districts">
                          <option value="" >Select District</option>
                        {
                            alldistricts.map(response => <option key={response} value={response}>{response}</option>)
                        }
                    </select>


                    <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                        Login
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