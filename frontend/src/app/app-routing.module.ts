import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/client/main/main.component';
import { ResultComponent } from './pages/client/result/result.component';
import { TestComponent } from './pages/client/test/test.component';
import { LoginFormComponent } from './pages/login/login-form.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const appRoutes: Routes = [
    {
        path: 'admin',
        loadChildren: 'src/app/pages/admin/admin.module#AdminModule',
    },
    {
        path: 'main',
        component: MainComponent,
    },
    {
        path: 'test/:id',
        component: TestComponent,
    },
    {
        path: 'result/:id',
        component: ResultComponent,
    },
    {
        path: 'login',
        component: LoginFormComponent,
    },
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { enableTracing: true })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
