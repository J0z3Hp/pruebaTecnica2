import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleados } from '../interfaces/empleados';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  private _httpClient = inject(HttpClient);
  private URL_EMPLEADOS = 'http://localhost:3000/empleados';

  // HACER LAS PETICIONES GET, POST, PUT

  // Peticion POST
  postEmpleado(empleado: Empleados) {
    return this._httpClient.post(this.URL_EMPLEADOS + "/crear", empleado);
  }

  // Peticion GET
  getEmpleados() {
    return this._httpClient.get(this.URL_EMPLEADOS + "/obtener");
  }

  // Peticion PUT
  putEmpleado(empleado: Empleados, id: string) {
    return this._httpClient.put(this.URL_EMPLEADOS + "/actualizar" + id, empleado);
  }
}
