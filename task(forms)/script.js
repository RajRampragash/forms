var cncel_btn = document.querySelector('.modal-button');
//console.log(cncel_btn);
cncel_btn.addEventListener('click',()=>{
    var modal = document.querySelector('.modal');
    modal.style.display = 'none';
});

var form = document.querySelector('form')  

form.addEventListener('submit',(e)=>{
    e.preventDefault() 
    
    var f_name = document.querySelector('#first-name')
    f_name =f_name.value;
    var l_name = document.querySelector('#last-name') 
    l_name = l_name.value;
    // console.log(f_name.value);
    var email = document.querySelector('#email') 
    email = email.value;
    var number = document.querySelector('#number') 
    number = number.value;
    var addr = document.querySelector('#address')
    var state = document.querySelector('#state')
    var country = document.querySelector('#country')
    var pincode = document.querySelector('#pincode') 
   
    var address = `${addr.value}, ${state.value}, ${country.value}, ${pincode.value}`;
    //console.log(address);
    var gender = document.querySelector('[name = "gender"]:checked')
    if(gender != null){
        //console.log(gender);     
        gender = gender.value; 

        var food = document.querySelectorAll('[name = "food"]:checked') 
        var food_all = "";
        //console.log(food, food.length);
        if(food.length < 2){
                var modal = document.querySelector('.modal')
                var modalmsg = document.querySelector('#modal-msg')
                modalmsg.innerHTML = 'Pick atleast 2 food choices'
                modal.style.display = 'block'; 
        }
        else{ 
            for(let i of food){
                food_all += i.value + " ";
            } 
            food_all = food_all.trim();
            food_all = food_all.split(" ").join(", ")
            var data = [f_name, l_name, gender, food_all, email,  number, address]
                try{
                    var tr_data = document.createElement('tr')
                for( i of data) {
                    var td = document.createElement('td')
                    td.innerText = i;
                    tr_data.append(td)
                }
                var body_data = document.querySelector('tbody')
                body_data.append(tr_data)

                }
                catch(err){
                var modal = document.querySelector('.modal')
                var modalmsg = document.querySelector('#modal-msg')
                modalmsg.innerHTML = 'Error adding details to table'
                modal.style.display = 'block'; 

                }
            document.querySelector('#first-name').value = "" 
            document.querySelector('#last-name') .value= ""
            document.querySelector('#email').value= "" 
            document.querySelector('#number').value= ""
            document.querySelector('#address').value= ""
            document.querySelector('#state').value= ""
            document.querySelector('#country').value= ""
            document.querySelector('#pincode').value= "" 
            var gender = document.querySelector('[name = "gender"]:checked')
            gender.checked = false;
            var food = document.querySelectorAll('[name = "food"]:checked')
            for(let i of food){
                 i.checked = false;
            }  
               
        }
    }
    else{  
            var modal = document.querySelector('.modal')
            var modalmsg = document.querySelector('#modal-msg')
            modalmsg.innerHTML = 'Gender field cannot be empty'
            modal.style.display = 'block'; 
    }

})