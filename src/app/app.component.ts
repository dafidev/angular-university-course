import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  viewChild,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";
import { CourseCardComponent } from "./course-card/course-card.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  standalone: false,
})
export class AppComponent implements AfterViewInit {
  courses = [...COURSES];

  // @ViewChild("cardRef1")
  // card1: CourseCardComponent;
  // @ViewChild("cardRef2")
  // card2: CourseCardComponent;

  // @ViewChild("container")
  // containerDiv: ElementRef;

  @ViewChildren(CourseCardComponent, { read: ElementRef })
  cards: QueryList<ElementRef>;

  constructor() {}

  ngAfterViewInit(): void {
    // console.log("containerDiv", this.card1);
    // this.courses[0].description = "test";

    console.log(this.cards);
    this.cards.changes.subscribe((cardsdd) => console.log(cardsdd));
  }

  title = "Angular Core Deep Dive";
  startDate = new Date(2000, 0, 1);

  OnCourseSelected(courseSelected: Course) {
    // console.log("card1", this.card1);
    // console.log("card2", this.card2);
  }

  trackCourse(index: number, course: Course) {
    return course.id;
  }
}
