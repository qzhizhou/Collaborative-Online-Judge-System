import { Component, OnInit } from "@angular/core";
import { Problem } from "../../models/problem.models";
const PROBLEM: Problem[] = [
  {
    id: 1,
    name: "Two Sum",
    descriptions:
      "Given an array of integers, return indices of the two numbers such that they add up to a specific target.",
    difficulty: "easy"
  },
  {
    id: 2,
    name: "Three Sum",
    descriptions:
      "Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.",
    difficulty: "medium"
  },
  {
    id: 3,
    name: "Four Sum",
    descriptions:
      "Given an array of integers, find any one combination of four elements in the array whose sum is equal to a given value X.",
    difficulty: "hard"
  }
];

@Component({
  selector: "app-problem-list",
  templateUrl: "./problem-list.component.html",
  styleUrls: ["./problem-list.component.css"]
})
export class ProblemListComponent implements OnInit {
  problems: Problem[]; // field member of class ProblemListComponent

  constructor() {}

  ngOnInit() {
    this.problems = PROBLEM;
  }
}
