var button = document.getElementById('toggle-section');
var SideBar = document.getElementById('side');
button.addEventListener('click', function () {
    if (SideBar.style.display === 'none') {
        SideBar.style.display = 'block';
    }
    else {
        SideBar.style.display = 'none';
    }
});
