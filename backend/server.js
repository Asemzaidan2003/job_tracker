import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import companyRoutes from './routes/company.routes.js';
import analyticsRoutes from './routes/analytics.routes.js';
import authRouts from './routes/auth.routes.js';


dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: "https://job-tracker-frontend-xlsz.onrender.com", 
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(express.json());

app.use("/api/auth", authRouts);
app.use('/api/company', companyRoutes);
app.use('/api/analytics', analyticsRoutes);
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
