import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes  = [
  {
    path: 'clients',
    loadChildren: () => import('./pages/clients/clients.module').then(c => c.ClientsModule)
  },  
  {
    path: "proyections",
    loadChildren: () => import('./pages/projections/projections.module').then(p => p.ProjectionsModule)
  },

  { path: "", pathMatch: "full", redirectTo: "clients" },
  { path: "**", redirectTo: "clients" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
