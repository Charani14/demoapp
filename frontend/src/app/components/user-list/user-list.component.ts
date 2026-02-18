import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];
  loading: boolean = true;
  errorMessage: string = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.loading = true;
    this.errorMessage = '';

    this.userService.getUsers().subscribe({
      next: (data: User[]) => {
        this.users = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching users:', err);
        this.errorMessage = 'Failed to load users';
        this.loading = false;
      }
    });
  }

  deleteUser(id?: number): void {

    if (id === undefined) {
      console.error('User ID is undefined');
      return;
    }

    const confirmDelete = confirm('Are you sure you want to delete this user?');

    if (!confirmDelete) return;

    this.userService.deleteUser(id).subscribe({
      next: () => {
        // Instead of reloading entire list, remove locally (better UX)
        this.users = this.users.filter(user => user.id !== id);
      },
      error: (err) => {
        console.error('Error deleting user:', err);
        alert('Failed to delete user');
      }
    });
  }
}
