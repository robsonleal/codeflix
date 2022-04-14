import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { JwtService } from '../service/jwt.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class EditComponent implements OnInit {
  form!: FormGroup;
  nameButton: string = 'Editar';
  titleForm: string = 'Editar ';
  objectName: string = '';
  parameterName: string = '';
  parameterId: string = '';
  currentObject: any;

  constructor(
    private formBuilder: FormBuilder,
    private jwtService: JwtService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.parameterName = params['object'];
      this.parameterId = params['id'];
    })

    this.objectName = this.parameterName

    if (this.parameterName == 'modulos') this.jwtService.getModule(this.parameterId)
    .subscribe( data => {
      this.populate(data)
      this.currentObject = data
      console.log(data)
    }, err => {
      console.log(err)
    });
    else this.jwtService.getClass(this.parameterId)
    .subscribe(data => {
      this.populate(data)
      console.log(data)
    }, err => {
      console.log(err)
    });

    this.form = this.formBuilder.group({
      name: '',
      description: '',
      module: '',
      date_class: '',
      duration: ''
    });
  }

  /*submit(): void {
    this.jwtService.add(this.form.getRawValue(), this.objectName)
      .subscribe(res => {
        console.log(res);
      }, err => {
        console.log(err)
      });
  }*/

  populate(data: any) {
    this.form.controls['name'].setValue(data.name);
    this.form.controls['description'].setValue(data.description);
    this.form.controls['module'].setValue(data.module);
    this.form.controls['date_class'].setValue(data.date_class);
    this.form.controls['duration'].setValue(data.duration);
  }

  submit(): void {
    this.jwtService.update(this.currentObject.id, this.objectName, this.form.getRawValue())
      .subscribe( res => {
          console.log('dados atualizados com sucesso!');
          this.router.navigate([`/${this.parameterName}`]);
        }, error => {
          console.log(error);
        });
  }
}
