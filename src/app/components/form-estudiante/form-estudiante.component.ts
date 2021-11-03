import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Persona } from 'src/app/models/Persona';
import { PersonaService } from 'src/app/services/persona.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-estudiante',
  templateUrl: './form-estudiante.component.html',
  styleUrls: ['./form-estudiante.component.css']
})
export class FormEstudianteComponent implements OnInit {
  title="Esta es la pagina para insertar";
  persona:Persona;
  constructor(private personaService:PersonaService,
    private router:Router) { this.persona = new Persona (0, '', '', 0, '')}

  ngOnInit(): void {
  }

  create():void{
    this.personaService.create(this.persona).subscribe(
      response => {this.router.navigate(['/'])
      Swal.fire('Nueva persona creada ' + this.persona.nombre)
    }
    );
  }
}
