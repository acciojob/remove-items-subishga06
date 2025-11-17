
window.onload = function () {
    const select = document.getElementById("colorSelect");
    const button = document.querySelector('input[type="button"]');

    button.onclick = function () {
        // Remove the selected option
        select.remove(select.selectedIndex);
    };
};

