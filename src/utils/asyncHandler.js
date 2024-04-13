const asyncHandler =(requestHandler)=>{

    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).
        catch((err)=>next(err))
    }
}

export {asyncHandler}

// const asyncHandler =()=>{}
// const asyncHandler =(function)=>{}
// const asyncHandler =(fun) => async()=>{}

/*//2nd method of doing
const asyncHandler =(fun) => async ()=>{
    try {
        await fun(req,res,next)
    } catch (error) {
        resizeBy.status(err.code || 500).json({
            success: false,
            message:err.message
        })
    }
}
*/