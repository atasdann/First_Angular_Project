import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Permission, User, UserPermission } from './entities/entities';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'firstProject';
  //User[], Permission[], UserPermission[] tipleri entity üzerinde tanımlandı.
  //Aşağıdaki girilmesi gereken parametreler (propertyler) tiplerde (Örneğin UserList için User[] tipinde) tanımlanmıştır.
  //Aşağıdaki veriler normalde bize API üzerinden gelecek. Biz Şu anda Dummy Data ile çalışıyoruz.
  userList:User[]=[
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      age: 30,
    },
    {
      id: 2,
      firstName: "Alice",
      lastName: "Smith",
      age: 28,
    },
    {
      id: 3,
      firstName: "Bob",
      lastName: "Johnson",
      age: 35,
    }
  ]
  permissionList:Permission[]=[
    {
      id:1,
      name:"Supervisor"
    },
    {
      id:2,
      name:"Admin"
    },
    {
      id:3,
      name:"Guest"
    }
  ]
  userPermissionList:UserPermission[]=[
    {
      id:1,
      userId:1,
      permissionId:1
    },
    {
      id:2,
      userId:2,
      permissionId:2
    },
    {
      id:3,
      userId:2,
      permissionId:3
    }
  ]

  //Backend'den bize bu veriler geldi diyelim.
  //Şimdi bunları sayfada göstermek için app.component.html'e gideriz...

// getUserById(id:number):User|undefined{
//   return this.userList.find(user=>user.id==id)
// }
//Full name döndürmek için tipi bozarak fonksiyonu değiştirdik.
getUserById(id:number):any|undefined{
  return this.userList.map(user=>{return {id:user.id,fullName:user.firstName+" "+user.lastName}}).find(user => user.id == id);
}
getPermissionsById(id:number):Permission|undefined{
  return this.permissionList.find(permision => permision.id == id);
}
}
