const asynchaldeler=(reqesthalndeler)=>{
    (req,res,next)=>{
        Promise.resolve(reqesthalndeler(req,res,next)).catch((err)=>next(err))
    }
}
export{asynchaldeler}