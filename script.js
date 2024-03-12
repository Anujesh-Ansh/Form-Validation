
function zeroValue(){
    document.getElementById('name').value=''
    document.getElementById('prn').value=''
    document.getElementById('cgpa').value=''
    document.getElementById('result').innerHTML=''

}

function validate(){
    const name = document.getElementById('name').value;
    const prn = document.getElementById('prn').value;
    const cgpa = document.getElementById('cgpa').value;

    var result = document.getElementById('result');
    if (name == "" || prn == "" || cgpa == ""){
        alert('Please fill all the fields');
        return;
    }
    if (name.charAt(0) !== name.charAt(0).toUpperCase()) {
        alert('Name should start with a capital letter');
        zeroValue();
        return;
    }

    if(prn.length != 11){
        alert('Invalid PRN');
        zeroValue();
        return;
    }
    if(cgpa < 0 || cgpa > 10){
        alert('Invalid CGPA');
        zeroValue();
        return;
    }else{
        if(cgpa>=8){
            result.innerHTML = "Eligible";
            result.style.color = "green";
        }else{
            result.innerHTML = "Not Eligible";
            result.style.color="red";
        }
    }
}