        var conv = ""
        var msg_txt = document.getElementById("messages")
        msg_txt.innerHTML = conv;
var greet = ['Hai', 'Hello', 'Hey, there', 'Hi'];    
var bye = ['Thank you. Have a good day', 'Thank you. It was great talking to you', 'Thank you']; 
var hru = ['I am doing good. Thanks for asking', 'I am good. Thanks for asking', 'Good']; 
var what = ['I am looking for a job']; 
var abilities = ['I can solve Analytics, Machine Learning problems']; 
var my_name = ['I am kohul raj. You can ask me to tell more about myself.']; 
var hobbies = ['In my free time i watch movies, game - dota 2, eat, sleep, and do some tech stuffs', 'I spend time in movies, game - dota 2 and active member of xda community']; 
var contact = ['My Mail id: kohulraj@live.com and My Mobile No: 2148621016']; 

        function bot() {
  var msg = document.getElementById("txtbox").value 
  
  conv = conv + '<b>You : </b>'+msg + '<br>'
  msg_txt.innerHTML = conv;
  msg_txt.scrollTop = msg_txt.scrollHeight;
  document.getElementById("txtbox").value = ""
  var url='https://35.233.148.166:5000/parse?q='+msg
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var pred_intent = JSON.parse(this.responseText)
        
        switch(pred_intent.intent.name) {
  case 'greet':
    var disp = greet[Math.floor(Math.random() * greet.length)];
    break;
  case 'intro':
     var disp = 'I am Kohul Raj. [place holder]'
    break;
  case 'bye':
     var disp = bye[Math.floor(Math.random() * bye.length)];
    break;
  case 'hru':
     var disp = hru[Math.floor(Math.random() * hru.length)];
    break;
  case 'abilities':
     var disp = abilities[Math.floor(Math.random() * abilities.length)];
    break;
  case 'what':
     var disp = what[Math.floor(Math.random() * what.length)];
    break;
   case 'affirm':
     var disp = 'Great!'
    break;   
  case 'hobbies':
     var disp = hobbies[Math.floor(Math.random() * hobbies.length)];
    break;
   case 'name':
     var disp = my_name[Math.floor(Math.random() * my_name.length)];
    break;
   case 'contact':
     var disp = contact[Math.floor(Math.random() * contact.length)];
    break;
  default:
     var disp = 'I am sorry i couldnt answer that. I am still learning'
}
      conv = conv + '<b>bot : </b>' + disp + '<br>'
      msg_txt.innerHTML = conv;
        msg_txt.scrollTop = msg_txt.scrollHeight;
    }
      else{
      msg_txt.innerHTML = "Please allow Load blocked Scripts at the top of your browser. It is just a connection to my Google Cloud Instance.<br><br> Since it is a HTTP request from HTTPS site, the connection is blocked by default.";
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

