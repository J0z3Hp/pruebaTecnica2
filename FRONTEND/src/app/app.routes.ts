import { Routes } from '@angular/router';
import { FormDepartamentosComponent } from './pages/form-departamentos/form-departamentos.component';
import { FormEmpleadosComponent } from './pages/form-empleados/form-empleados.component';

export const routes: Routes = [
    {path: 'departamentos', component: FormDepartamentosComponent, title: 'Departamentos'},
    {path: 'empleados', component: FormEmpleadosComponent, title: 'Empleados'}
];
