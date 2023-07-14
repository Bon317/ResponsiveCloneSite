document.addEventListener("click", e=> {
    var container = document.getElementsByClassName('menuSelect')[0];
    const isDropdownButton = (container.contains(e.target))
    if(document.getElementsByClassName('menuContent')[0].contains(e.target)) return

    if(isDropdownButton) {
        document.getElementsByClassName('dropdownMenu')[0].classList.toggle('active')
    }
    else if( document.getElementsByClassName('dropdownMenu active')[0] != null){
        document.getElementsByClassName('dropdownMenu')[0].classList.toggle('active')
    }
})