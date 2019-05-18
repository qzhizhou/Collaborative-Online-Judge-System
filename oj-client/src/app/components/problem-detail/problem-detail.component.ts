import { Component, OnInit, Inject } from "@angular/core";
import { Problem } from "app/models/problem.models";
import { ActivatedRoute, Params } from "@angular/router"; //拿到url

@Component({
  selector: "app-problem-detail",
  templateUrl: "./problem-detail.component.html",
  styleUrls: ["./problem-detail.component.css"]
})
export class ProblemDetailComponent implements OnInit {
  problem: Problem;

  constructor(private route: ActivatedRoute, @Inject("data") private data) {}

  ngOnInit() {
    //每当url发生变化，就会调用这个function, 此function是用来获取id的
    this.route.params.subscribe(params => {
      this.problem = this.data.getProblem(+params["id"]); // 加号把字符串转为int
    });
  }
}
