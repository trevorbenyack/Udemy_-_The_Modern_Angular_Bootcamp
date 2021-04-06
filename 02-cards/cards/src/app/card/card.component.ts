import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  // This instructs are card component that it is going to receive these four different properties when we try to create it from some other component's template
  // assignment gives the default values for these properties
  @Input() title = '';
  @Input() imageUrl = '';
  @Input() content = '';
  @Input() username = '';
  constructor() { }

  ngOnInit(): void {
  }

}
