const dotenv = require("dotenv")
dotenv.config()

const {GoogleGenerativeAI}  = require('@google/generative-ai'); 
console.log(process.env.GEMINI_API_KEY || "null");



const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY); 
const model = genAI.getGenerativeModel({model:"gemini-1.5-flash"}); 

module.exports = model
