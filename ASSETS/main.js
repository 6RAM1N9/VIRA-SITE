// POP-UP MENU
//---------------------------------------------------------------
var MenuOpenText = document.getElementById('menu-text');
var MenuOpenImage = document.getElementById('menu-img');
var PopUpWindow = document.getElementById('pop-up-window');
var MenuCloseText = document.getElementById('menu-close-text');
var MenuCloseImage = document.getElementById('menu-close-img');

function OpenPopUpMenu() {
    PopUpWindow.style.display = 'block';
    MenuOpenImage.style.display = 'none';
    MenuOpenText.style.display = 'none';
    MenuCloseImage.style.display = 'flex';
    MenuCloseText.style.display = 'flex';
}

function ClosePopUpMenu() {
    PopUpWindow.style.display = 'none';
    MenuOpenImage.style.display = 'flex';
    MenuOpenText.style.display = 'flex';
    MenuCloseImage.style.display = 'none';
    MenuCloseText.style.display = 'none';
}
// QUOTE
//-------------------------------------------------------
var btn_1 = document.getElementById('first-btn-ex');
var btn_2 = document.getElementById('second-btn-ex');
var TextBlock = document.getElementById('text-expert');
function first_quote() {
    TextBlock.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit molestiae facilis nisi neque repellat sapiente soluta voluptatum? Veritatis sapiente sunt itaque incidunt reiciendis, vero placeat quidem, minus temporibus tenetur at!';
    btn_2.style.width = '15px';
    btn_2.style.height = '15px';
    btn_1.style.width = '10px';
    btn_1.style.height = '10px';
}
function second_quote() {
    TextBlock.innerHTML = 'Semper auctor neque vitae tempus quam pellentesque nec nam aliquam sem et tortor consequat id porta nibh venenatis cras sed felis eget velit aliquet sagittis id consectetur purus ut faucibus';
    btn_1.style.width = '15px';
    btn_1.style.height = '15px';
    btn_2.style.width = '10px';
    btn_2.style.height = '10px';
}
// WORKSTATIONS
//----------------------------------------------------------------
var button_work_1 = document.getElementById('first-button-work');
var button_work_2 = document.getElementById('second-button-work');
var workstation_1 = document.getElementById('first_workstation');
var workstation_2 = document.getElementById('second_workstation');
function button_work_first() {
    workstation_2.style.display = 'none';
    workstation_1.style.display = 'block';
    button_work_2.style.height = '15px';
    button_work_2.style.width = '15px';
    button_work_1.style.height = '25px';
    button_work_1.style.width = '25px';
    button_work_2.style.marginTop = '5px';
    button_work_1.style.marginTop = '0px';
}
function button_work_second() {
    workstation_2.style.display = 'block';
    workstation_1.style.display = 'none';
    button_work_1.style.height = '15px';
    button_work_1.style.width = '15px';
    button_work_2.style.height = '25px';
    button_work_2.style.width = '25px';
    button_work_1.style.marginTop = '5px';
    button_work_2.style.marginTop = '0px';
}
// VIDEO
//----------------------------------------------------------------
function video_func() {
    alert('Функция просмотра видео будет добавлена позже!')
}
// NEWSLETTER
//----------------------------------------------------------------
function news() {
    alert('Ваша заявку подана на рассмотрение')
}