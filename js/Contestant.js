class Contestant {
  constructor(){
    this.index = null;
    this.answer = 0;
    this.name = null;
  }

  getCount(){
    var contestantCountRef = database.ref('contestantCount');
//reto 1
    contestantCountRef.on("value",data =>{
       contestantCount = data.val();
     })


    
  }

  updateCount(count){
  

//reto 2
     database.ref('/').update({
       contestantCount: count
     });

  }

 
}