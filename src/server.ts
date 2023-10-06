import dotenv from "dotenv";
import app from "./app";

dotenv.config();

const PORT = process.env.PORTA || 3000

app.listen(PORT,()=> console.log(`Subindo aplicacao na porta: ${PORT}`))