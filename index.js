function sending(){
    const name1=document.getElementById("name").value;
    const email1=document.getElementById("gmail").value;
    const feedback1 = document.getElementById("feedbackk").value;

    console.log(name1);
    console.log(email1);
    console.log(feedback1);

    event.preventDefault(); //prevents page reloads
}



        // const express = require("express");
        // const app=express();
        // const PORT= 3000;

        
        // app.use(express.urlencoded({extended:true}));
        // const path = require("path");
        // app.use(express.static(path.join(__dirname)));

        // const Datas=[];
        
        // app.post('/submit' , (req,res)=>{

        //     const{name,email,feedback } = req.body;
        //     const dataObj={name , email , feedback};
        //     Datas.push(dataObj);//pushing the object

        //     console.log("Datas Arrays:" , Datas);

        //     res.send("Form data stored successfully");

        // })

        // app.listen(3000);