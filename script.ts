

const button = document.getElementById('toggle-section') as HTMLButtonElement;
const SideBar = document.getElementById('side') as HTMLElement;

button.addEventListener('click', ()=> {
    if(SideBar.style.display === 'none'){ 
        SideBar.style.display = 'block' 
        
     
    }
     
else {
    SideBar.style.display = 'none'

}
});
 