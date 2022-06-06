 import express from "express";
 import {GetServices,
        GetServicesById,
        CreatService,
        UpdateService,
        DeleteServiceById
} from "../controllers/service.js"; 

const router = express.Router(); 

//router for get all services
router.get("/",GetServices); 

//router for get one service with id
router.get("/:serviceId", GetServicesById)

//router for post service 
router.post("/", CreatService); 

//router for put service
router.put("/:serviceId",UpdateService); 

//router for delete service
router.delete("/:serviceId", DeleteServiceById)

export default router; 