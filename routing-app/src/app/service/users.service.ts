import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  users = [
    {
      id: 1,
      name: 'Max'
    },
    {
      id: 2,
      name: 'Anna'
    },
    {
      id: 3,
      name: 'Chris'
    },
    {
      id: 4,
      name: 'Archna'
    }
  ];


 getUsers()
 {
   return this.users;
 }

 getUserById(id: number) {
  const user = this.users.find(
    (s) => {
      return s.id === id;
    }
  );
  return user;
}

 update(id : number, userInfo : { name : string})
 {
   const user = this.users.find(
     (u) =>{
       u.id == id;
     }
   );

   if(user)
   {
     user.name = userInfo.name;
   }
 }
}
