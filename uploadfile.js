const form = document.querySelector("form"),
fileInput = form.querySelector(".file-input"),
progressArea = document.querySelector(".progress-area"),
uploadedArea = document.querySelector(".uploaded-area");

form.addEventlistener("click" , ()=>{
    fileInput.click();
});


    fileInput.onchange = ({target})=>{
    let file = target.files[0]; //getting file and [0] this means if user has selected multiple file  one only
     if (file){ //if file is selected 
        let fileName = file.name; //getting selected file name
      uploadFile(fileName); // calling uploadFile with passing file name as an argument

     }
    }
    
function uploadFile(name){
    let xhr = new XMLHttpRequest(); //creating new uml obj (AJAX)
    xhr.open ("POST" , "php/upload.php"); // sending post request to the specified url/file
    xhr.send ("");
}
