import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { JwtService } from '../service/jwt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddComponent implements OnInit {
  form!: FormGroup;
  nameButton: string = 'Adicionar';
  titleForm: string = 'Cadastrar ';
  objectName: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private jwtService: JwtService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => this.objectName = params['object']
    )

    this.titleForm += this.objectName

    console.log(this.objectName)

    this.form = this.formBuilder.group({
      name: '',
      description: '',
      module: '',
      date_class: '',
      duration: ''
    });
  }

  submit(): void {
    this.jwtService.add(this.form.getRawValue(), this.objectName)
      .subscribe(res => {
        console.log(res);
        this.router.navigate([`/${this.objectName}`]);
      }, err => {
        console.log(err)
      });
  }
}
