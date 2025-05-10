import {
  Component,
  EventEmitter,
  input,
  Input,
  output,
  Output,
} from "@angular/core";
import { Course } from "../model/course";

@Component({
  selector: "course-card",
  imports: [],
  templateUrl: "./course-card.component.html",
  styleUrl: "./course-card.component.css",
})
export class CourseCardComponent {
  @Input({ required: true })
  course: Course;

  @Input({ required: true })
  index: number;

  // Signal
  //course = input.required<Course>();

  @Output()
  courseEmitter = new EventEmitter<Course>();

  // Signal
  //courseEmitter = output<Course>()

  onCourseViewed() {
    console.log("card componnet - button clicked ...");
    this.courseEmitter.emit(this.course);
  }
}
