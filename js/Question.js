class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number
    
    this.ending = createElement('h4')

    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.title1 = createElement('h3')
    this.input2 = createInput("Enter Your Answer");
    this.title2 = createElement('h4')



    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
   
    this.message.hide();
    //Add hide() for questions, options & input box





  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

    //Create html() and position() for each question, input and answers.
    this.title1.html("Question:- What starts and ends with 'E', but has only one letter?");
    this.title1.position(200,80);

    this.title2.html("1: Everyone</br> 2: Envelope</br> 3: Estimate</br> 4: Example</br>");
    this.title2.position(200,110);

    this.input1.position(150, 230);
    this.button.position(350, 300);

    this.input2.position(450,230);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
      this.input1.hide();
      this.input2.hide();
      var message = `Hello ${this.input.value()}!!! </br> Your Answer Has Been Recorded!!!`;
      this.ending.html(message);
    })


  }
}
