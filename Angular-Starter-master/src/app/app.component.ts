import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Book } from './Book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  dateText: string;
  buttonFlag: boolean;
  hobbiesFlag: boolean;
  hobbies: string[];
  hobbyButtonText: string;
  defaultHobbies: string[];
  showView: boolean;
  books: any[];
  book:Book;

  constructor() {
    this.book = new Book();
    this.dateText = 'Hover on blue button to see the date.';
    this.buttonFlag = false;
    this.hobbies = ['Reading', 'Music', 'Coding'];
    this.defaultHobbies = ['Reading', 'Music', 'Coding'];
    this.hobbiesFlag = true;
    this.hobbyButtonText = 'hide hobbies';
    this.showView = true;
    this.books = [
      { id: 1, name: 'Java', auth: "New 1", price: 14 },
      { id: 2, name: 'C#', auth: "New 2", price: 18 },
      { id: 3, name: 'Angular', auth: "New 3", price: 13 },
      { id: 4, name: 'Android', auth: "New 4", price: 17 },
      { id: 5, name: 'Ruby', auth: "New 5", price: 19 }
    ];
  }

  buttonClick() {
    this.buttonFlag = true;
  }

  closeClick() {
    this.buttonFlag = false;
  }

  mouseOver() {
    this.dateText = new Date().toString();
  }

  mouseOut() {
    this.dateText = 'Hover on blue button to see the date';
  }

  addHobby() {
    this.hobbies.push('New Hobby');
    // this.hobbies.unshift('New Item');
  }

  resetHobby() {
    this.hobbies = ['Reading', 'Music', 'Coding'];
  }

  deleteHobby(i) {
    this.hobbies.splice(i, 1);
  }

  hobbyClick() {
    if (!this.hobbiesFlag) {
      this.hobbiesFlag = true;
      this.hobbyButtonText = 'hide hobbies';
    }
    else {
      this.hobbiesFlag = false;
      this.hobbyButtonText = 'show hobbies';
    }
  }

  viewClicked() {
    this.showView = !this.showView;
  }

  saveBook() {
    this.books.push(this.book);
  }

}