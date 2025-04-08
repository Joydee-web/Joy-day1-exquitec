function Calc() {
    let form = document.getElementById("form");
    let length = Number(document.getElementById("length").value);
    let width = Number(document.getElementById("width").value);
    let height = Number(document.getElementById("height").value);
    let base = Number(document.getElementById("base").value);
    let lengthBox = document.getElementById("lengthBox");
    let widthBox = document.getElementById("widthBox");
    let heightBox = document.getElementById("heightBox");
    let baseBox = document.getElementById("baseBox");
    let areaSol = 0;
    let periSol = 0;
    let area = document.getElementById("area-sol");
    let peri = document.getElementById("peri-sol");
    let sol = document.querySelectorAll(".sol");
    let selector = document.getElementById("shape-selector");
    let selected = selector.value;
    let shapeName = document.getElementsByClassName("shape-name");
    let triSideOneBox = document.getElementById("side1--triangle");
    let triSideTwoBox = document.getElementById("side2--triangle");
    let triSideThreeBox = document.getElementById("side3--triangle");
    
    let triSideOne = Number(document.getElementById("side1").value);
    let triSideTwo = Number(document.getElementById("side2").value);
    let triSideThree = Number(document.getElementById("side3").value);

    let triPeriHeading = document.getElementById("peri-h2");

    if (selected) {
        if (selected === "nil") {
            area.innerHTML = "undefined";
            peri.innerHTML = "undefined";
            triSideOneBox.style.display = "none";
            triSideTwoBox.style.display = "none";
            triSideThreeBox.style.display = "none";
            triPeriHeading.style.display = "none";
            baseBox.style.display = "none";
            if (length != "" || height != "" || width != "") {
                alert("Please Select a different Option");
            }
        }
        if (selected === "rectangle") {
            lengthBox.style.display = "block";
            widthBox.style.display = "block";
            heightBox.style.display = "none";
            triSideOneBox.style.display = "none";
            triSideTwoBox.style.display = "none";
            triSideThreeBox.style.display = "none";
            triPeriHeading.style.display = "none";
            baseBox.style.display = "none";
            if (length && width) { 
                let areaSol = length * width;
                let periSol = 2 * length + 2 * width;
                area.innerHTML = areaSol;
                peri.innerHTML = periSol;
            }
            if (length == width && length != "" && length != 0) {
                alert("Shape is not a Rectangle");
            }
            shapeName[0].innerHTML = "Rectangle's";
            shapeName[1].innerHTML = "Rectangle's";
            return false;
        }else {
            heightBox.style.display = "block";
        }
        if (selected === "square") {
            widthBox.style.display = "none";
            heightBox.style.display = "none";
            lengthBox.style.display = "block";
            shapeName[0].innerHTML = "Square's";
            shapeName[1].innerHTML = "Square's";
            triSideOneBox.style.display = "none";
            triSideTwoBox.style.display = "none";
            triSideThreeBox.style.display = "none";
            triPeriHeading.style.display = "none";
            baseBox.style.display = "none";
            if (length) {
                let areaSol = length * length;
                let periSol = 4 * length;
                area.innerHTML = areaSol;
                peri.innerHTML = periSol;
            }
        }else {
            widthBox.style.display = "block";
            heightBox.style.display = "block";
        }
        if (selected === "triangle") {
            lengthBox.style.display = "none";
            widthBox.style.display = "none";
            baseBox.style.display = "block";
            shapeName[0].innerHTML = "Triangle's";
            shapeName[1].innerHTML = "Triangle's";
            triSideOneBox.style.display = "block";
            triSideTwoBox.style.display = "block";
            triSideThreeBox.style.display = "block";
            triPeriHeading.style.display = "block";
            triPeriHeading.style.fontSize = "23px";
            triPeriHeading.style.fontWeight = 700;
            triPeriHeading.innerHTML = "For Perimeter,"

            if (height && base) {
                let areaSol = 0.5 * base * height;
                area.innerHTML = areaSol;
            }
            if (triSideOne && triSideTwo && triSideThree) {
                let periSol = triSideOne + triSideTwo + triSideThree;
                peri.innerHTML = periSol;
            }else {
                peri.innerHTML = "undefined";
            }
        }else {
            baseBox.style.display = "none";
            triPeriHeading.style.display = "none";
            triSideOneBox.style.display = "none";
            triSideTwoBox.style.display = "none";
            triSideThreeBox.style.display = "none";
            triPeriHeading.style.display = "none";
        }
    } else {
        if (length.length < 1 || width.length < 1) {
            area.innerHTML = "undefined";
            peri.innerHTML = "undefined";
        }
    }


    return false;
}

function resetForm() {
    let length = document.getElementById("length");
    let width = document.getElementById("width");
    let height = document.getElementById("height");
    let base = document.getElementById("base");
    let triSideOne = document.getElementById("side1");
    let triSideTwo = document.getElementById("side2");
    let triSideThree = document.getElementById("side3");
    

    length.value = "";
    width.value = "";
    height.value = "";
    base.value = "";
    triSideOne.value = "";
    triSideTwo.value = "";
    triSideThree.value = "";
}