import "dotenv/config";
import express from "express";
import path from "path";
import { createServer } from "./server"; 

const __dirname = path.resolve();

const app = createServer(); 
app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api/')) {
    return next(); 
  }
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
export default app;