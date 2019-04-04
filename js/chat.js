        var conv = "Welcome" +'<br>'
        var msg_txt = document.getElementById("messages")
        msg_txt.innerHTML = conv;
var greet = ['Hai', 'Hello', 'Hii', 'Hi'];    
var bye = ['Thank you. Have a good day', 'Thank you. It was great talking to you', 'Thank you']; 
        function bot() {
  var msg = document.getElementById("txtbox").value
  conv = conv + '<b>You : </b>'+msg + '<br>'
  msg_txt.innerHTML = conv;
  msg_txt.scrollTop = msg_txt.scrollHeight;
  document.getElementById("txtbox").value = ""
  var url='http://localhost:5000/parse?q='+msg+'&project=current'
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var pred_intent = JSON.parse(this.responseText)
        
        switch(pred_intent.intent.name) {
  case 'greet':
    var disp = greet[Math.floor(Math.random() * greet.length)];
    break;
  case 'intro':
     var disp = 'I am Kohul Raj'
    break;
  case 'bye':
     var disp = bye[Math.floor(Math.random() * bye.length)];
    break;
  case 'general_ask':
     var disp = 'I am doing good. Thanks for asking'
    break;
  case 'what':
     var disp = 'I am looking for a job'
    break;
   case 'affirm':
     var disp = 'Great!'
    break;             
  default:
     var disp = 'I am sorry i couldnt answer that. I am still learning'
}
      conv = conv + '<b>bot : </b>' + disp + '<br>'
      msg_txt.innerHTML = conv;
        msg_txt.scrollTop = msg_txt.scrollHeight;
    }
      else{
      msg_txt.innerHTML = "I am sorry. Couldn't connect to Server or Server Unavailable";
      }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

function openNav() {
  document.getElementById("myNav").style.display = "block";
}

function closeNav() {
  document.getElementById("myNav").style.display = "none";
}

