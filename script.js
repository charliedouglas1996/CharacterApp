function submitForm(){
    //race
    var races=document.getElementById("races");
    var race = races.options[races.selectedIndex].value;
    document.getElementById("race").innerHTML=" "+race;
    //class
    var classes=document.getElementById("classes");
    var classr = classes.options[classes.selectedIndex].value;
    document.getElementById("classr").innerHTML=" "+classr;
    //gender
    var genders = document.getElementsByName('gender');
    var gender="";
    for(var i = 0; i < genders.length; i++){
      if(genders[i].checked){
        gender = genders[i].value;
      }
    }
    document.getElementById("gender").innerHTML=" "+gender;
    //name
    var name=document.getElementById("Cname").value;
    document.getElementById("name").innerHTML=" "+name;
    //alignment
    var alignments=document.getElementById("alignments");
    var alignment = alignments.options[alignments.selectedIndex].value;
    document.getElementById("alignment").innerHTML=" "+alignment;
    //age
    var age=document.getElementById("Cage").value;
    document.getElementById("age").innerHTML=" "+age;
    //languages
    var language = ""; 
    var languages = document.getElementsByClassName('languages');
    for(var i=0; languages[i]; i++){
      if(languages[i].checked){
        language =language+ " "+ languages[i].value;
      }
    }
    document.getElementById("language").innerHTML=" "+language;
    //backgrounds
    var backgrounds=document.getElementById("backgrounds");
    var backgroundr = backgrounds.options[backgrounds.selectedIndex].value;
    document.getElementById("backgroundr").innerHTML=" "+backgroundr;
    //paragraph
    document.getElementById("paragraph").innerHTML=name+" is a "+age+
    " year old "+race+" "+classr+". "+gender+" has an alignment of "+
    alignment+", "+gender+" has a background of being a "+backgroundr+ 
    " and speaks "+language;
  }