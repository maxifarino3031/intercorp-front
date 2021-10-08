import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProjectionsComponent } from "./projections.component";

const routes: Routes = [
  {
    path: "",
    component: ProjectionsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectionsRoutingModule {}
