        var conv = "Welcome" +'<br>'
        var msg_txt = document.getElementById("messages")
        msg_txt.innerHTML = conv;
var greet = ['Hai', 'Hello', 'Hii', 'Hi'];    
var bye = ['Thank you. Have a good day', 'Thank you. It was great talking to you', 'Thank you']; 
var hru = ['I am doing good. Thanks for asking', 'I am good. Thanks for asking', 'Good']; 
var what = ['I am looking for a job']; 
var name = ['I am kohul raj. You can ask me to introduce myself to know more about me', 'I am Kohul raj.']; 
var hobbies = ['In my free time i watch movies, play dota, eat, sleep, and do some technological stuffs']; 
var contact = ['My contact info: kohulraj@live.com']; 

        function bot() {
  var msg = document.getElementById("txtbox").value
  conv = conv + '<b>You : </b>'+msg + '<br>'
  msg_txt.innerHTML = conv;
  msg_txt.scrollTop = msg_txt.scrollHeight;
  document.getElementById("txtbox").value = ""
  var url='http://104.196.163.202:5000/parse?q='+msg+'&project=current&model=model1'
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var pred_intent = JSON.parse(this.responseText)
        
        switch(pred_intent.intent.name) {
  case 'greet':
    var disp = greet[Math.floor(Math.random() * greet.length)];
    break;
  case 'intro':
     var disp = 'I am Kohul Raj. <place holder>'
    break;
  case 'bye':
     var disp = bye[Math.floor(Math.random() * bye.length)];
    break;
  case 'hru':
     var disp = hru[Math.floor(Math.random() * hru.length)];
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
     var disp = name[Math.floor(Math.random() * name.length)];
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

