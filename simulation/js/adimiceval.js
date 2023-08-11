/**
 This Scrtpt file is developed by
Aditya Kameswara Rao Nandula
Senior Project Scientist,
Virtual Labs IIT Kharagpur.
LinkedIn: https://in.linkedin.com/in/akraonandula/
 */
$(document).ready(()=>{
$("#adinxt").hide();
$("#adiexp").hide();
});
let adi=0;
function adimes(a){
    if(a==0){
        $("#adiexp").show();
        adi=1;
    }
    else if(a==1){
        $("#adiexp").show();
        adi=2;
    }
    else if(a==2){
        if(adi==1){
            $("#adime").html("<div> <img class=\"img img-fluid\" src=\"./images/c1IM.png\" alt=\"Initial Setup\"></div>");
            $("#adinxt").show();
        }
        else if(adi==2){
            $("#adime").html("<div> <img class=\"img img-fluid\" src=\"./images/c2IM.png\" alt=\"Initial Setup\"></div>");
            $("#adinxt").show();
        }
}
else if(a==3){

    if(adi==1){
        $("#adinxt").hide();
    $("#adime").html("<div> <video id=\"adivid\" autoplay>  <source src=\"./images/c1v.mp4\" type=\"video/mp4\"> </video></div>");
    $("#adivid").width('100%');
    $("#adivid").on("ended",function(){
        $("#adime").html("<div> <img class=\"img img-fluid\" src=\"./images/c1FM.png\" alt=\"Initial Setup\"></div>");
    });
    }
    else if(adi==2){
        $("#adinxt").hide();
    $("#adime").html("<div> <video id=\"adivid\" autoplay>  <source src=\"./images/c2v.mp4\" type=\"video/mp4\"> </video></div>");
    $("#adivid").width('100%');
    $("#adivid").on("ended",function(){
        $("#adime").html("<div> <img class=\"img img-fluid\" src=\"./images/c2FM.png\" alt=\"Initial Setup\"></div>");
    });
    }
    

}
};
