import '../model/connection.js'
import stuSchemaModel from '../model/student.model.js'
import jwt from 'jsonwebtoken';
import rs from 'randomstring';
import url from 'url'



export var save = async(req,res)=>{
  var stuDetails = req.body;
  var studentList = await stuSchemaModel.find()
  var l = studentList.length;
  var _id = l == 0 ?1 : studentList[l-1]._id+1;
  stuDetails = {...stuDetails, "_id":_id, "status":1, "info":Date(), "role" :"user"}

 try{
    var student = await stuSchemaModel.create(stuDetails);
    if(student){
        console.log(student);
        return res.status(201).json({"status":true})
    }
    else{
        return res.status(500).json({"status":false})
    }
 }
 catch(err){
    console.log(err);
   return res.status(404).json({"status":fail})  
 }
}

export var login = async(req,res)=>{
    var stuDetails = req.body;
    stuDetails = {...stuDetails,"status":1}
    var result = await stuSchemaModel.find(stuDetails);
    var l = result.length;
    if(l !=0 )
    {
        let payload = {"subject":result[0].email}
        let key = rs.generate();
        let token = jwt.sign(payload,key);
        return res.status(201).json({"token":token,"stuDetails":result[0]})
    }
    else{
        return res.status(500).json({"token":"error"})
    }
}
export var fetch = async(req,res,next)=>{
    var  conditon_object = url.parse(req.url,true).query;
     var studentList = await stuSchemaModel.find(conditon_object);
     console.log(studentList);
     var l = studentList.length;
     if( l!=0 ){
         return res.status(201).json(studentList);
     }
     else{
         return res.status(500).json({"Status":"Server Error"})
     }
 }
 export var updatestudentdetails = async(req,res)=>{
    let stuDetails = await stuSchemaModel.findOne((req.body.condition_obj));
    if(stuDetails){
       let student=await stuSchemaModel.updateOne((req.body.condition_obj),{$set:(req.body.content_obj)});   
       if(student)
        return res.status(201).json({"msg":"success"});
       else
        return res.status(500).json({error: "Server Error"});
    }
    else
     return res.status(404).json({error: "Requested resource not available"});
}