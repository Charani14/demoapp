import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;
  isEditMode = false;
  userId?: number;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phonenumber: ['']
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isEditMode = true;
      this.userId = +id;
      this.userService.getUser(this.userId).subscribe(user => {
        this.userForm.patchValue(user);
      });
    }
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      if (this.isEditMode && this.userId) {
        this.userService.updateUser(this.userId, this.userForm.value).subscribe(() => {
          this.router.navigate(['/users']);
        });
      } else {
        this.userService.createUser(this.userForm.value).subscribe(() => {
          this.router.navigate(['/users']);
        });
      }
    }
  }

  onCancel(): void {
    this.router.navigate(['/users']);
  }
}
