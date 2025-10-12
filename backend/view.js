import express from "express";
import cors from "cors";
import bcrypt from "bcrypt";
import mysql from "mysql2/promise";

const app = express();

// ✅ Parse JSON body
app.use(express.json());

// ✅ Enable CORS
app.use(cors({ origin: "http://localhost:5173" }));

// Database connection inside async function
async function startServer() {
    const db = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "getitdone"
    });
    console.log("DB connected");

    app.post("/signup", async (req, res) => {
        // Now req.body will have the JSON
        const { emailOrNumber, password, address1, address2, state, district } = req.body;

        if (!emailOrNumber || !password) {
            return res.status(400).json({ error: "Email/Number and password are required" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        try {
           await db.execute(
  `INSERT INTO consumers (emailorpass, password, Addressline1, address_line2, state, district)
   VALUES (?, ?, ?, ?, ?, ?)`,
  [emailOrNumber, hashedPassword, address1, address2, state, district]
);

            res.status(200).json({ message: "User registered successfully" });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });

    app.listen(5000, () => console.log("Server running on port 5000"));
}

startServer();
