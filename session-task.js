

// خلينا المتغيرات جلوبال سكوب (عشان لو فيه كذا فانكشن محتاجة تتعامل معاهم )
// (عشان الاداء برضوا ... بدل م الكومبايلر يفضل رايح جاي بين ال (اتش تي ام ال) و (الجافا اسكريبت

    var emailInput = document.getElementById('email');
    var nameInput = document.getElementById('name');
    var domainInput = document.getElementById('domain');

function cutEmail(){
 
    var emailValue = emailInput.value;

    // if (emailValue != '' && emailValue.includes('@')){
    if (emailValue != '' && emailValue.indexOf('@') != -1){
        
        var atIndex = emailValue.indexOf('@');
        nameInput.value = emailValue.slice(0,atIndex);
                    
    // var domainvalue = emailValue.slice( atIndex + 1 , emailValue.length);
        var domainvalue = emailValue.slice(atIndex + 1);

            if (domainvalue.length >5 && domainvalue.includes('.')){

                domainInput.value = domainvalue ;

            }else{
                alert('enter correct domain')
            }
    

        }
        else{
            alert('please enter correct email');
        }


            console.log(nameInput.value);
            
        }

    // cutEmail();

