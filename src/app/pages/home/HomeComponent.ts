import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('carouselInner') carouselInner: ElementRef | undefined;
  @ViewChild('carouselInner2') carouselInner2: ElementRef | undefined;
  cardWidth: number = 0;
  scrollPosition: number = 0;
  scrollPosition2: number = 0;
  carouselWidth: number = 0; // Defina a propriedade carouselWidth aqui

  animationFrameId: number | undefined;

  ngAfterViewInit() {
    this.cardWidth = this.carouselInner?.nativeElement.querySelector('.carousel-item')?.clientWidth || 0;
    this.carouselWidth = this.carouselInner?.nativeElement.scrollWidth || 0; // Defina o valor de carouselWidth
  }

  ngAfterViewInit2() {
    this.cardWidth = this.carouselInner2?.nativeElement.querySelector('.carousel-item')?.clientWidth || 0;
    this.carouselWidth = this.carouselInner2?.nativeElement.scrollWidth || 0; // Defina o valor de carouselWidth
  }

  onCarouselNextClick() {
    if (this.carouselInner && this.scrollPosition < (this.carouselWidth - this.cardWidth * 4)) {
      this.animateScroll(this.scrollPosition + this.cardWidth);
    }
  }

  onCarouselPrevClick() {
    if (this.carouselInner && this.scrollPosition > 0) {
      this.animateScroll(this.scrollPosition - this.cardWidth);
    }
  }

  onCarouselNextClick2() {
    if (this.carouselInner2 && this.scrollPosition2 < (this.carouselWidth - this.cardWidth * 4)) {
      this.animateScroll2(this.scrollPosition2 + this.cardWidth);
    }
  }

  onCarouselPrevClick2() {
    if (this.carouselInner2 && this.scrollPosition2 > 0) {
      this.animateScroll2(this.scrollPosition2 - this.cardWidth);
    }
  }

  animateScroll(targetPosition: number) {
    const startTime = performance.now();
    const startPosition = this.scrollPosition;
    const duration = 600; // Duração da animação em milissegundos

    const animate = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      if (elapsedTime < duration) {
        this.scrollPosition = this.easeInOutQuad(elapsedTime, startPosition, targetPosition - startPosition, duration);
        if (this.carouselInner) {
          this.carouselInner.nativeElement.scrollLeft = this.scrollPosition;
        }
        this.animationFrameId = requestAnimationFrame(animate);
      } else {
        this.scrollPosition = targetPosition;
        if (this.carouselInner) {
          this.carouselInner.nativeElement.scrollLeft = this.scrollPosition;
        }
        cancelAnimationFrame(this.animationFrameId as number);
      }
    };

    this.animationFrameId = requestAnimationFrame(animate);
  }

  animateScroll2(targetPosition: number) {
    const startTime = performance.now();
    const startPosition = this.scrollPosition2;
    const duration = 600; // Duração da animação em milissegundos

    const animate = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      if (elapsedTime < duration) {
        this.scrollPosition2 = this.easeInOutQuad(elapsedTime, startPosition, targetPosition - startPosition, duration);
        if (this.carouselInner2) {
          this.carouselInner2.nativeElement.scrollLeft = this.scrollPosition2;
        }
        this.animationFrameId = requestAnimationFrame(animate);
      } else {
        this.scrollPosition2 = targetPosition;
        if (this.carouselInner2) {
          this.carouselInner2.nativeElement.scrollLeft = this.scrollPosition2;
        }
        cancelAnimationFrame(this.animationFrameId as number);
      }
    };

    this.animationFrameId = requestAnimationFrame(animate);
  }

  easeInOutQuad(t: number, b: number, c: number, d: number): number {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  constructor() { }

  ngOnInit() {
  }

}
