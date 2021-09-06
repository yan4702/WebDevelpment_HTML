
//function for log.html.
function getInputCalorie(){
    //To retrieve value from parameters.
    var weiVal=document.getElementById('WeightInput').value;   

    var walkVal = document.getElementById('walkInput').value;

    var runVal = document.getElementById('runInput').value;

    var swimVal = document.getElementById('swimInput').value;

    var bicyVal = document.getElementById('bicyInput').value;

    var date=document.getElementById("dateTimeInput").value;

    //Calculation formula of calorie. 
    var walkAns = (parseInt(walkVal)* 0.084) * weiVal //walking.
    var runAns = (parseInt(runVal)* 0.21) * weiVal //running.
    var swimAns = (parseInt(swimVal)* 0.13) * weiVal //swimming.
    var bicyAns = (parseInt(bicyVal)* 0.064) * weiVal //bicycling.

    var resultsCal = walkAns+ runAns + swimAns + bicyAns

    
    //Display calculation result of calorie.
    document.getElementById('pasteResult').innerHTML= resultsCal.toFixed(0) ;
}

