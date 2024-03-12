
function zeroValue(){
    document.getElementById('name').value=''
    document.getElementById('prn').value=''
    document.getElementById('cgpa').value=''

}

function validate(){
    const name = document.getElementById('name').value;
    const prn = document.getElementById('prn').value;
    const cgpa = document.getElementById('cgpa').value;

    var p = document.getElementById('p');
    if (name == "" || prn == "" || cgpa == ""){
        alert('Please fill all the fields');
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
            p.innerHTML = "You are Valid for the Placement Round";
            p.style.color = "green";
        }else{
            p.innerHTML = "You are not Valid for the Placement Round";
            p.style.color="red";
        }
    }
}