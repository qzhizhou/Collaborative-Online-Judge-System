import { Injectable } from "@angular/core";
import { Problem } from "app/models/problem.models";
import { PROBLEMS } from "app/mock-problems";

@Injectable()
export class DataService {
  constructor() {}

  getProblems(): Problem[] {
    return PROBLEMS;
  }

  getProblem(id: number): Problem {
    return PROBLEMS.find(problem => problem.id === id);
    // 遍历PROBLEMS里的每个元素，判断该元素的id是否与传入的id一致
  }
}
