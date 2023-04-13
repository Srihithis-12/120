https://teachablemachine.withgoogle.com/models/RZB_HM6ba/model.jason
const video = document.querySelector('video');


const startWebCam = ()=>{
if(navigator.mediaDevices.getUserMedia){
    navigator.mediaDevices.getUserMedia({video: true })
    .then(stream => video.srcObject = stream)
    .catch(error => console.log('error'));
}
}

startWebCam();