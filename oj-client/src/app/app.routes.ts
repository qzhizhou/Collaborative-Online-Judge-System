// 定义每个url用哪个component进行加载
import { Routes, RouterModule } from "@angular/router";
import { ProblemListComponent } from "./components/problem-list/problem-list.component";
import { ProblemDetailComponent } from "./components/problem-detail/problem-detail.component";

const routes: Routes = [
  {
    path: "", //根目录
    redirectTo: "problems",
    pathMatch: "full"
  },
  {
    path: "problems",
    component: ProblemListComponent
  },
  {
    path: "problems/:id", //加引号说明是变量
    component: ProblemDetailComponent
  },
  {
    path: "**",
    redirectTo: "problems"
  }
];

export const routing = RouterModule.forRoot(routes); //固定写法
