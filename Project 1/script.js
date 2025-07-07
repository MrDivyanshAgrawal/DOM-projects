const buttons=document.querySelectorAll('.button')
const body=document.querySelector
('body');
buttons.forEach(function(button){
    // console.log(button); 
    button.addEventListener('click',function(e){
        switch(e.target.id){
            case "blue":
                body.style.backgroundColor='blue';
                break;
            case 'red':
                body.style.backgroundColor='red';
                break;
            case 'yellow':
                body.style.backgroundColor='yellow';
                break;
            case 'orange':
                body.style.backgroundColor='orange';
                break;
            default:
                body.backgroundColor='white';
                break;
        }
    })
});

