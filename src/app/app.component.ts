import { Component } from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  standalone: false,
})
export class AppComponent {
  courses = [...COURSES];

  title = "Angular Core Deep Dive";
  startDate = new Date(2000, 0, 1);

  OnCourseSelected(courseSelected: Course) {
    console.log({ courseSelected });
  }

  trackCourse(index: number, course: Course) {
    return course.id;
  }
}
