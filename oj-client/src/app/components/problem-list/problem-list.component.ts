import { Component, OnInit, Inject } from "@angular/core";
import { PROBLEMS } from "../../mock-problems";
import { Problem } from "../../models/problem.models";

@Component({
  selector: "app-problem-list",
  templateUrl: "./problem-list.component.html",
  styleUrls: ["./problem-list.component.css"]
})
export class ProblemListComponent implements OnInit {
  problems: Problem[]; // field member of class ProblemListComponent

  constructor(@Inject("data") private data) {} //从service里拿到data， 在app.module里的Provider配置

  ngOnInit() {
    this.getProblems();
  }

  getProblems(): void {
    this.problems = this.data.getProblems();
  }
}
