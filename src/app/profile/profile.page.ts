import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  user = {
    name: '',
    lastname: '',
    password: '',
    email: '',
    adress: '',
    phone_number: '',
  profilePicture: '../../assets/Fao.jpg',
  };

  constructor() {}

  updateProfile() {
    console.log('Perfil actualizado');
    alert('Perfil actualizado con éxito');
  }
}
