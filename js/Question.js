class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Escribe tu nombre aquí...");
    this.input2 = createInput("Escribe el número de opción correcto...");
    this.button = createButton('Enviar');
    this.question = createElement('h3');
    this.question0 = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
  }

  display(){
    this.title.html("Juego MiQuiz");
    this.title.position(350, 0);

    this.question.html("Soy alto siendo joven y corto cuando soy viejo. Resplandezco") 
    this.question0.html( " con la vida y el viento es mi mayor enemigo. ¿Qué soy?" );
   
    this.question.position(95, 60);
    this.question0.position(95, 80);

    this.option1.html("1: Un arbol" );
    this.option1.position(150, 110);
    this.option2.html("2: Un poste de luz" );
    this.option2.position(150, 130);
    this.option3.html("3: Una vela" );
    this.option3.position(150, 150);
    this.option4.html("4: Una helice" );
    this.option4.position(150, 170);

    this.input1.position(150, 230);
    this.input2.position(350, 230);
    this.button.position(290, 300);


    this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      //contestant.update();
      contestant.updateCount(contestantCount);
    });
  }
}