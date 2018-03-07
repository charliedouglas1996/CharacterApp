function submitForm(){
  //race
  var races=document.getElementById("races");
  var race = races.options[races.selectedIndex].value;
  document.getElementById("race").innerHTML=" "+race.charAt(0).toUpperCase() + race.slice(1);
  
  //class
  var classes=document.getElementById("classes");
  var classr = classes.options[classes.selectedIndex].value;
  document.getElementById("classr").innerHTML=" "+classr.charAt(0).toUpperCase() + classr.slice(1);
  
  //gender
  var genders = document.getElementsByName('gender');
  var gender="";
  for(var i = 0; i < genders.length; i++){
    if(genders[i].checked){
      gender = genders[i].value;
    }
  }
  var pronoun="";
  var pHas="";
  switch(gender){
    case "male":
      pronoun="he";
      pHas=" has";
      break;  
    case "female":
      pronoun="she";
      pHas=" has";
      break;
    default:
      pronoun="they";
      pHas=" have";
  }
  document.getElementById("gender").innerHTML=" "+gender.charAt(0).toUpperCase() + gender.slice(1);
  
  //name
  var name=document.getElementById("Cname").value;
  name=name.charAt(0).toUpperCase() + name.slice(1);
  document.getElementById("name").innerHTML=" "+name;
  
  //alignment
  var alignments=document.getElementById("alignments");
  var al = alignments.options[alignments.selectedIndex].value;
  var alignment="";
  switch(al.charAt(0)){
    case "l":
      alignment="lawful";
      break;  
    case "c":
      alignment="chaotic";
      break;
    default:
    alignment="neutral";
  }
  if(al.charAt(1)==='g'){
    alignment+=" good";
  }
  else if(al.charAt(1)==='e'){
    alignment+=" evil";
  }
  else if(al!=="nn"){
    alignment+=" neutral";
  }
  if(al==="") alignment="";
  document.getElementById("alignment").innerHTML=" "+alignment.charAt(0).toUpperCase() + alignment.slice(1);
  
  //age
  var age=document.getElementById("Cage").value;
  var anAge=" ";
  if(age==18||age==11||age.charAt(0)==8){
    anAge="n ";
  }
  document.getElementById("age").innerHTML=" "+age;
  
  //languages
  var language = ""; 
  var languageList="";
  var languages = document.getElementsByClassName('languages');
  var knownLanguages=[];
  for(var i=0; languages[i]; i++){
    if(languages[i].checked){
      knownLanguages.push(languages[i].value);
    }
  }
  languages=knownLanguages;
  if(languages.length==1) languageList=language=languages[0];
  else if(languages.length>1){
    language=languages[0];
    for(var i=1;i<languages.length-1;i++){
      language+=", "+languages[i];
    }
    languageList=language+", "+languages[languages.length-1];
    language+=" and "+languages[languages.length-1];
  }
  document.getElementById("language").innerHTML=" "+languageList.charAt(0).toUpperCase() + languageList.slice(1);
  
  //backgrounds
  var backgrounds=document.getElementById("backgrounds");
  var backgroundr = backgrounds.options[backgrounds.selectedIndex].value;
  var c=backgroundr.charAt(0);
  var anBack=" ";
  if(c==='a' || c==='e' || c==='i' || c==='o' || c==='u')
    anBack="n ";
  document.getElementById("backgroundr").innerHTML=" "+backgroundr.charAt(0).toUpperCase() + backgroundr.slice(1);
  
  //paragraph
  document.getElementById("paragraph").innerHTML=name+" is a"+anAge+age+
  " year old "+race+" "+classr+". "+pronoun.charAt(0).toUpperCase()+pronoun.slice(1)+pHas+" an alignment of "+
  alignment+", "+pronoun+pHas+" a background of being a"+anBack+backgroundr+ 
  " and "+pronoun+" speak"+((pHas===" has")?"s ":" ")+language+".";
}