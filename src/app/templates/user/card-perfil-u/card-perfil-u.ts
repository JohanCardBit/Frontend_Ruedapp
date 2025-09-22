import { Component, inject } from '@angular/core';
import { UserService } from '../../../services/auth/user/user.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-card-perfil-u',
  imports: [DatePipe],
  templateUrl: './card-perfil-u.html',
  styleUrl: './card-perfil-u.css'
})
export class CardPerfilU {
  dataUser: any = null;
  userServices = inject(UserService);

  userMe() {
    this.userServices.getMe().subscribe({
      next: (res: any) => {
        this.dataUser = res.dataID; 
        console.log(this.dataUser);
      },
      error: (error) => console.error(error),
    });
  }

  ngOnInit() {
    this.userMe();
  }
}