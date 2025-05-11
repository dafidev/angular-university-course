import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChildren,
  EventEmitter,
  input,
  Input,
  output,
  Output,
} from "@angular/core";
import { CourseImageComponent } from "../course-image/course-image.component";
import { Course } from "../model/course";
import {
  NgClass,
  NgIf,
  NgStyle,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
} from "@angular/common";

@Component({
  selector: "course-card",
  imports: [NgIf, NgClass, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: "./course-card.component.html",
  styleUrl: "./course-card.component.css",
})
export class CourseCardComponent implements AfterViewInit, AfterContentInit {
  @Input({ required: true })
  course: Course;

  @Input({ required: false })
  index: number;

  // Signal
  //course = input.required<Course>();

  @Output()
  courseEmitter = new EventEmitter<Course>();

  // Signal
  //courseEmitter = output<Course>()

  @ContentChildren(CourseImageComponent)
  images;

  ngAfterViewInit(): void {}

  ngAfterContentInit(): void {
    console.log("contenet:", this.images);
  }

  onCourseViewed() {
    console.log("card componnet - button clicked ...");
    this.courseEmitter.emit(this.course);
  }

  isImageVisiable() {
    return this.course && this.course.iconUrl;
  }

  cardClasses() {
    if (this.course.category == "BEGINNER") {
      return "beginner";
    }
  }

  cardStyles() {
    return { "text-decoration": "underline" };
  }
}
