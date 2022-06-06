import SmallServices from "../models/SmallService";
import Services from "../models/Service.js"; 

/*
    Get all smallservice
    GET api/service/smallservice
*/
export  const GetSmallServices = async(req,res,next)=>{
    SmallServices.find((err,result) =>{ 
        if(err) return next(err)
        res.json(result)
    })
}

/*
    Get one service with id service
    GET api/smallservice/:smallserviceId
*/ 


export const GetSmallServicesById = async(req,res,next) => {

    SmallServices.findById(req.params.smalllServiceId, (err,result)=>{ 
        if(err) return next(err)
        res.json(result); 
    })
}

/*
Post  a service to database
POST api/smallservice
when post smallservice, id smallservice will be add into service 
*/

export const CreatSmallService = async(req, res, next) =>{ 
    SmallServices.create(req.body, (err,post) => { 
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