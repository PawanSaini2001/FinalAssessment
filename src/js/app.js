var date =  new Date();
year = date.getFullYear();
month = date.getMonth() + 1;
day = date.getDate();
var text= document.getElementById('currentdate');
text.innerHTML="Date: "+month+"/"+day+"/"+year;
function validation(){
    var ans1= phone();
    var ans2= postcode();
    if (ans1===true && ans2===true) {
        return true;
    }
    return false;
};
function postcode(){
    var pcode = document.form1.pcode.value.trim();
    if (pcode.length!=6) {
        document.form1.pcode.focus();
        return false;
    }
    var reg= /^[A-Za-z]\d[A-Za-z]\d[A-Za-z]\d$/;
    var res=reg.test(pcode);
    if (res==false) {
        document.form1.pcode.focus();
        return false;
    }
    
    return true;
};
function phone(){
    var phone = document.form1.phone.value.trim();
    if (phone.length!=10) {
        document.form1.phone.focus();
        return false;
    }
    if (parseInt(phone)!=phone) {
        document.form1.phone.focus();
        return false;
    }
    return true;
};
document.getElementById("hide").onclick=function(){
    document.getElementById("show").style.display = "none";
    document.getElementById("pay").setAttribute("", "");
}
document.getElementById("display").onclick=function(){
    document.getElementById("show").style.display = "block";
    document.getElementById("pay").setAttribute("required", "");
}



