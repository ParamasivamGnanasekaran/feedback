import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UsersService } from './users.service';
import { MatDialog } from '@angular/material/dialog';
import { UserComponent } from './user/user.component';
import { LoginUser } from 'src/app/model/role.model';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'userName', 'email', 'managerName', 'teamName', 'role', 'delete'];
  dataSource = new MatTableDataSource();
  @ViewChild('empTbSort', { static: false }) empTbSort!: MatSort;
  @ViewChild(MatPaginator, { static: false })
  paginator!: MatPaginator;
  constructor(private usersService: UsersService, public dialog: MatDialog) {
  }
  ngOnInit(): void {
    this.getUserDetails()
  }
  ngAfterViewInit() {
    this.empTbSort.disableClear = true;
    this.dataSource.sort = this.empTbSort;
  }

  openDialog(employee: LoginUser, event: any) {
    if (event.target.classList[4] === "mat-icon-no-color") {
      if (employee.id)
        this.deleteUser(employee.id)
    } else {
      const dialogRef = this.dialog.open(UserComponent, {
        data: {
          employeeDetail: employee,
        },
      });

      dialogRef.afterClosed().subscribe(result => {
        this.getUserDetails()
      });
    }
  }
  getUserDetails() {
    this.usersService.getAllUsers().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

  deleteUser(id: number) {
    this.usersService.deleteUser(id).subscribe((data) => {
      this.getUserDetails()
    })
  }
}
