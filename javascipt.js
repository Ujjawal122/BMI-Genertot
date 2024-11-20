const form=document.querySelector('form')
//form is submit by the post type and gettype value goes to url
//to stop this 
form.addEventListener('submit',function(e){
    e.preventDefault();
    const height=parseInt(document.querySelector('#Height').value);
    //value in the string then change into integer
    const weight=parseInt(document.querySelector('#weight').value);
    //value inside the eventbcz for the when value is input
    const result=document.querySelector('#result');

    if(height===''||height<0||isNaN(height)){
        result.innerHTML=`please give the valid height ${height}`;
    }
   else if(weight===''||weight<0||isNaN(weight)){
        result.innerHTML=`please give the valid weight ${weight}`;
    }
    else{
       const BMI=(weight/((height*height)/10000)).toFixed(2)
       //show the result
       result.innerHTML=`<span>${BMI}</span>`;
    }
    if(BMI<18.6){
        result.innerHTML+='Under weight';
    }
    else if(BMI>18.6 ||BMI<24.9){
        result.innerHTML+='Normal Range' ;

    }else{
        result.innerHTML+='Over Weight';
    }

})