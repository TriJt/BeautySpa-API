import Services from "../models/Service.js"; 


/*
    Get all service
    GET api/service/
*/
export  const GetServices = async(req,res,next)=>{
    Services.find((err,result) =>{ 
        if(err) return next(err)
        res.json(result)
    })
}

/*
    Get one service with id service
    GET api/service/:serviceId
*/ 

export const GetServicesById = async(req,res,next) => { 
    Services.findById(req.params.serviceId, (err,result)=>{ 
        if(err) return next(err)
        res.json(result); 
    })
}

/*
Post  a service to database
POST api/service
*/

export const CreatService = async(req, res, next) =>{ 
    Services.create(req.body, (err,post) => { 
        if(err) return next(err)
        res.json(post)
    })
}



/* 
Put a service in database
PUT api/service
*/

export const UpdateService = async(req, res, next) => { 
    Services.findByIdAndUpdate(req.params.serviceId, req.body, (err, post)=> { 
        if(err) return next(err)
        res.json(post)
    })
}

/*
Delete service in database when the spa don't service again
DELETE api/service/:serviceId  
*/ 

export const DeleteServiceById = async(req, res, next) => { 
    Services.findByIdAndDelete(req.params.serviceId, req.body, (err, post)=> { 
        if(err) return next(err)
        res.json(post)
    })
}