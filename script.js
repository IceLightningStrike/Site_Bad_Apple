var FrameNumber = 0;
var FramesCount = 6574;


function start_interval_reading(milliseconds) {
    intervalReader = setInterval(FileReading, milliseconds); 
}


function FileReading() {
    FrameNumber = (FrameNumber % FramesCount) + 1;

    $.get(`data_${Math.floor((FrameNumber - 1) / 1000) + 1}/frame_${FrameNumber}.txt`, function(data) {
        document.getElementById("demonstration").innerHTML = data;
    });
}
