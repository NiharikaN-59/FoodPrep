require('dotenv').config(); // MUST be first

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./config/dbConn');

const app = express();
const port = process.env.PORT || 4000;

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/image", express.static('uploads'));

// Routes
app.use('/api/cart', require('./routes/cartRouter'));
app.use('/api/food', require('./routes/foodRouter'));
app.use('/api/user', require('./routes/userRouter'));
app.use('/api/order', require('./routes/orderRouter'));

app.get("/", (req, res) => {
  res.send("API Working");
});

// ✅ Health check route
app.get("/health", (req, res) => {
  res.json({
    server: "ok",
    db:
      mongoose.connection.readyState === 1
        ? "connected"
        : "disconnected",
  });
});

// ✅ Start server ONLY after DB connects
const startServer = async () => {
  try {
    await connectDB();
    console.log("DB Connected");

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error("DB connection failed", error);
    process.exit(1);
  }
};

startServer();

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})