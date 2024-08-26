import '../model/connection.js';
import CategorySchemaModel from '../model/category.model.js'
import rs from 'randomstring';
import url from 'url'
import path from 'path';

const __dirname= url.fileURLToPath(new URL('.',import.meta.url));  

    export var save = async(req,res)=>{
        var catDetails = req.body;
        var caticon = req.files.caticon;
         var img =  Date.now()+"-"+rs.generate()+"-"+caticon.name;
         catDetails.img= img;


           var uploadpath = path.join(__dirname,"../../ui/src/assets/upload",img)
     var catList = await CategorySchemaModel.find();
     var l = catList.length;
     var _id = l == 0 ?1 : catList[l-1]._id+1;
     catDetails = {...catDetails, "_id":_id , "info":Date()}
     try{
    var cat = await CategorySchemaModel.create(catDetails);
    if(cat){
        console.log(cat);
        caticon.mv(uploadpath)
        return res.status(201).json({"status":true})   
    }        
    else{
     return res.status(500).json({"status":false})       
    }

     }
     catch(error){
        console.log(error);
        return res.status(404).json({"status":false})
        
     }
        
    }
    export var fetch = async(req,res,next)=>{
        var  conditon_object = url.parse(req.url,true).query;
         var catList = await CategorySchemaModel.find(conditon_object);
         console.log(catList);
         var l = catList.length;
         if( l!=0 ){
             return res.status(201).json(catList);
         }
         else{
             console.log(error);
             
             return res.status(500).json({"Status":"Server Error"})
         }
     }
     