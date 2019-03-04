import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
@Input() testCategory;

}
