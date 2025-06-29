import { Component, OnInit } from '@angular/core';
import { ManagementService, Employee } from '../services/manage.service';
import { UserType } from '../services/management.service';

@Component({
  selector: 'app-management-list',
  standalone: false,
  templateUrl: './management-list.component.html',
  styleUrls: ['./management-list.component.css']
})
export class ManagementListComponent implements OnInit {
  employees: Employee[] = [];
  filteredEmployees: Employee[] = [];
  searchTerm: string = '';
  userType: UserType = 'EMPLOYEE';
  // For pagination
  currentPage: number = 0;
  pageSize: number = 10;
  isError:boolean = false;
  isLoading : boolean = false;
  // For new user creation


  constructor(private managementService: ManagementService) {}

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees() {
    try{
      this.isLoading = true;
      this.managementService.getAllEmployees(this.currentPage, this.pageSize).subscribe(response => {
        this.employees = response.data;
        this.applyFilter();
      });
    this.isLoading = false;
    }catch (e){
      this.isError=true;

    }
  }

  applyFilter() {
    const term = this.searchTerm.toLowerCase();
    this.filteredEmployees = this.employees.filter(emp =>
      emp.firstName?.toLowerCase().includes(term) ||
      emp.lastName?.toLowerCase().includes(term) ||
      emp.email?.toLowerCase().includes(term)
    );
  }

  onSearch() {
    this.applyFilter();
  }



  deleteUser(id: number) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.managementService.deleteEmployee(id).subscribe({
        next: () => {
          alert('User deleted');
          this.loadEmployees();
        },
        error: (err) => {
          alert('Error deleting user: ' + (err.error?.message || 'Unknown error'));
        }
      });
    }
  }
  onUserTypeChange(type: UserType) {
  this.userType = type;
  this.currentPage = 0; // reset pagination if needed
  this.loadUsers();
}
 loadUsers() {
  if (this.userType === 'DOCTOR') {
    this.managementService.getDoctors().subscribe(response => {
      this.employees = response.data;
      this.applyFilter();
    });
  } else if (this.userType === 'PATIENT') {
    this.managementService.getPatients().subscribe(response => {
      this.employees = response.data;
      this.applyFilter();
    });
  } else {
    // Default to all
    this.managementService.getAllEmployees(this.currentPage, this.pageSize).subscribe(response => {
      this.employees = response.data;
      this.applyFilter();
    });
  }
}
  nextPage() {
    this.currentPage++;
    this.loadEmployees();
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.loadEmployees();
    }
  }
}
