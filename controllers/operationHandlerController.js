const model = require("../config/gemeniConfig.js")

const operationHandlerController = async(req,res) => {
try {  
    
    const {q} = req.body ;
    if(!req.body || !q || q === "" ) {
        return res.status(400).json({message:"invalid parameters"})
    }
    
    const result = await model.generateContent(`${q} only answer in one line`); 
    const modelRes =  result.response.text() 
    return res.status(200).json({message:`${modelRes}`})
} catch (error) {
    console.log(error);
    
        return res.status(500).json({message:"interval server error"})
    
}
}


const getCodeHandlerController = async(_,res) => {
try { 

    return res.sendFile(`${__dirname}/client.js`)
} catch (error) {
    console.log(error);
    
        return res.status(500).json({message:"interval server error"})
    
}
}


module.exports = {operationHandlerController,getCodeHandlerController}