const manageOrder =() => {
    let orderId=document.getElementById('order-id-input').value;
    console.log(orderId);

    document.getElementById('order-no-display').innerText=`Status for Order No. ${orderId}`
    document.getElementById('order-no-display').style.display='block';
    
   document.getElementsByClassName('order-status-block')[0].classList.replace('btn-light','btn-success');
    
    document.getElementById('order-id-input').value= '';
    if(orderId ===''){
        document.getElementsByClassName('order-status-block')[0].classList.replace('btn-success', 'btn-light');
        alert('Error:ID is Required');
    }
        setTimeout(function(){
            console.log('chef received and started preparing');
            document.getElementsByClassName('order-status-block')[1].classList.replace('btn-light', 'btn-success');
            setTimeout(function(){
              console.log('pizza sauce added');
              document.getElementsByClassName('order-status-block')[2].classList.replace('btn-light', 'btn-success');
              setTimeout(function(){
                console.log('first layer of cheese added');
                document.getElementsByClassName('order-status-block')[3].classList.replace('btn-light', 'btn-success');
                setTimeout(function(){
                    console.log('2nd layer  of cheese added');
                    document.getElementsByClassName('order-status-block')[4].classList.replace('btn-light', 'btn-success');
                    setTimeout(function(){
                        console.log('Pizza baked');
                        document.getElementsByClassName('order-status-block')[5].classList.replace('btn-light', 'btn-success');
                        setTimeout(function(){
                            console.log('Oregano addded');
                            document.getElementsByClassName('order-status-block')[6].classList.replace('btn-light', 'btn-success');
                            setTimeout(function(){
                                console.log('packaged and received  to zomato boy');
                                document.getElementsByClassName('order-status-block')[7].classList.replace('btn-light', 'btn-success');
                                // callback();
                             },2000);
                            
                         },8000);
                        
                    },15000);
                    
                },5000);
                
               },5000);
              
            },10000);
        },2000) 
        
}