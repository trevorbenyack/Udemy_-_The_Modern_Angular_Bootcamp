import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  length = 0;

  // correspond to checkboxes on webpage
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  // this is used to store the generated password
  password = '';

  // This is called with whatever the user just entered into the text input
  // "value" could be anything, like "text" or "length"
  onChangeLength(value: string) {

    // this is needed because Angular passes in a string
    const parsedValue = parseInt(value);

    // isNaN is a built-in JavaScript function
    if(!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }
  

  // These methods are the password recipe checkbox actions executed
  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }
  
  onButtonClick() {
    const numbers = '1234567890'
    const letters = 'abcdefghijklmnopqrstuvwxyz'
    const symbols = '!@#$%^&*()'

    let validChars = '';
    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if(this.includeSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';
    for(let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }
}
