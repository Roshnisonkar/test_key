import '../model/connection.js'
import adminSchemaModel from '../model/admin.model.js'
import url from 'url'

export var save = async(req,res)=>{
    var adminDetails = req.body;
    var adminList = await adminSchemaModel.find();
    var l = adminList.length;
    var _id = l == 0 ?1 : adminList[l-1]._id+1;
    adminDetails = {...adminDetails, "_id":_id , "info":Date()}

    try{
     var admin = await adminSchemaModel.create(adminDetails);
     if(admin){
        console.log(admin);
        return res.status(201).json({"status":true})
     }
     else{
        return res.status(500).json({"status":false})
     }
    }
    catch(error){
console.log(error);
    res.status(404).json({"status":'fail'})
    }
}

export var fetch = async(req,res,next)=>{
   var  conditon_object = url.parse(req.url,true).query;
    var adminList = await adminSchemaModel.find(conditon_object);
    console.log(adminList);
    var l = adminList.length;
    if( l!=0 ){
        return res.status(201).json(adminList);
    }
    else{
        console.log(error);
        
        return res.status(500).json({"Status":"Server Error"})
    }
}

export var deletestudent = async (req,res)=>{
    var conditon_object = req.body;
    var student = await adminSchemaModel.find(conditon_object);
     var l = student.length;
     if( l!=0 ){
        let result = await adminSchemaModel.deleteOne(conditon_object);
        if(result){
            return res.status(201).json({"msg":'Success'});
        }
        else{
            return res.status(500).json({error:"server error"})
        }
     }
     else{
       return res.status(404).json({error : "Resource not found"})      
     }
}

export var updatestudent = async(req,res)=>{
    let adminDetails = await adminSchemaModel.findOne((req.body.condition_obj));
    if(adminDetails){
       let student=await adminSchemaModel.updateOne((req.body.condition_obj),{$set:(req.body.content_obj)});   
       if(student)
        return res.status(201).json({"msg":"success"});
       else
        return res.status(500).json({error: "Server Error"});
    }
    else
     return res.status(404).json({error: "Requested resource not available"});
}