
function toggle(selector) {
    var selectorIsValid = document.querySelector(selector);
    if(selectorIsValid) {
        document.querySelector(selector).toggle();
    }
}

function isExpanded(opened) {
    return String(opened);
}


module.exports = {
    toggle: toggle,
    isExpanded: isExpanded
};