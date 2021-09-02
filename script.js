console.log('start script');
function Calculer(){
    var x=document.getElementById('txt_x').value;
    var y= document.getElementById('txt_y').value;
   if(document.getElementById('txt_x').value!='' && document.getElementById('txt_y').value!=''){
    var result=parseInt(x)+parseInt(y);
    document.getElementById('txt_result').value=result;
    document.getElementById('label_result').innerHTML='<p>Votre resultat est</p>'
   }
    
}