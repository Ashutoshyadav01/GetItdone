import React, { useState } from "react";
import { Link } from "react-router-dom";

const PostWork = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");
  const [workType, setWorkType] = useState("remote"); // example radio field

  const handleSubmit = (e) => {
    e.preventDefault();

    const postData = {
      title,
      description,
      budget,
      district,
      state,
      workType,
    };

    console.log("Post data:", postData);
    // You can call an API here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary text-white px-2">
      <div className="bg-white text-black p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">POST WORK</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Title for your work.."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <textarea
            placeholder="Description for your work.."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
            rows="3"
          />

          <input
            type="number"
            placeholder="Budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
          />
             <div className="flex items-center gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="workType"
                value="remote"
                checked={workType === "remote"}
                onChange={(e) => setWorkType(e.target.value)}
              />
              Remote
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="workType"
                value="onsite"
                checked={workType === "onsite"}
                onChange={(e) => setWorkType(e.target.value)}
              />
              On-site
            </label>
          </div>

          <input
            type="text"
            placeholder="District"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <input
            type="text"
            placeholder="State"
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
          />


          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            POST
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostWork;
