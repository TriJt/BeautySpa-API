import SmallServices from "../models/SmallService.js";
import Services from "../models/Service.js"; 

/*
    Get all smallservice
    GET api/smallservice
*/
export  const GetSmallServices = async(req,res,next)=>{
    SmallServices.find((err,result) =>{ 
        if(err) return next(err)
        res.json(result)
    })
}

/*
    Get one service with id service
    GET api/smallservice/:id
*/ 


export const GetSmallServicesById = async(req,res,next) => {

    SmallServices.findById(req.params.id, (err,result)=>{ 
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
    const ServiceId = req.params.serviceid; 
    const newSmallService = new SmallServices( req.body);
    try{ 
        const saveSmallService = await newSmallService.save(); 
        try {
            await Services.findByIdAndUpdate(ServiceId, {
              $push: { smallservice: saveSmallService._id},
            });
          } catch (err) {   
            next(err);
          }
          res.status(200).json(saveSmallService);
    }catch(err){ 
        next(err)
    }
   
}



/* 
Put a smallservice in database
PUT api/smallservice/:id
*/

export const UpdateSmallService = async(req, res, next) => {
    try{ 
        const updateSmall = await SmallServices.findByIdAndUpdate(req.params.id, 
            {$set: req.body}, 
            {new: true}); 
        res.status(200).json(updateSmall)
    } 
    catch(err){ 
        next(err); 
    }
    
}

/*
Delete smallservice in database 
DELETE api/smallservice/:id 
*/ 

export const DeleteSmallServiceById = async(req, res, next) => { 
    try{ 
        // xóa smallservice 
        await  SmallServices.findByIdAndDelete(req.params.id); 
        // tìm id smallservice trong service và xóa nó đi
        try{ 
            const service = await Services.findOne({smallservice: req.params.id}); 
            if(service !=null)
                { 
                    await Services.findByIdAndUpdate(service.id, { 
                       $pull: {smallservice: req.params.id} 
                    })
                }
        }catch(err){
            next(err)
        }
    }
    catch(err){ 
        next(err); 
    }
}