import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
    private router: Router,
    private service: TranslocoService,
    private elementRef: ElementRef) { }

  language = 'en'

  ngOnInit(): void {
    // if (this.language == 'en') {
    //   document.body.style.direction = 'ltr'
    // }
    // else {
    //   document.body.style.direction = 'rtl'
    // }

    this.updateDirection();
  }

  open(content: any) {
    this.modalService.open(content, { centered: true })}

    switchLanguage(event: any) {
      this.language = event.target.value;
      this.service.setActiveLang(this.language);
      this.updateDirection();
    }

    updateDirection() {
      const secondHalfElement = this.elementRef.nativeElement.querySelector('.secondHalf');
      if (secondHalfElement) {
        secondHalfElement.style.direction = this.language === 'en' ? 'ltr' : 'rtl';
      }
    }

    // switchLanguage(language) {
    //   console.log(language)
    //   this.language = language.target.value
    //   this.service.setActiveLang(language.target.value)

    //   if (this.language == 'en') {
    //     document.body.style.direction = 'ltr'}
    //   else {
    //     document.body.style.direction = 'rtl'}}
}



