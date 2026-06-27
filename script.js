function openFeatures() {

    // Displaying all cards individually
    var allElem = document.querySelectorAll('.elem');
    var FUllElemPage = document.querySelectorAll('.fullElem');
    var FUllElemPageBackBtn = document.querySelectorAll('.fullElem .back');

    allElem.forEach(function (elem) {
        elem.addEventListener('click', function () {
            FUllElemPage[elem.id].style.display = 'block';
        });
    });

    // Back Button
    FUllElemPageBackBtn.forEach(function (back) {
        back.addEventListener('click', function () {
            FUllElemPage[back.id].style.display = 'none';
        });
    });

}

// openFeatures();