import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoading = false;
  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit(f) {
    if (!f.value) {
      return;
    }
    this.isLoading = true;
    this.authService.login(f.value.phone, f.value.password).subscribe((res) => {
      if (res['token']) {
        this.isLoading = false;
        this.authService.authSub.next(true);
        this.router.navigateByUrl('/bill');
      }
    }, (err) => {
      console.log('Ошибка ', err);
      this.isLoading = false;
    });
  }

}
