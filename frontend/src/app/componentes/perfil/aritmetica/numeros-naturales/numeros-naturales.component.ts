import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-numeros-naturales',
  templateUrl: './numeros-naturales.component.html',
  styleUrls: ['./numeros-naturales.component.css']
})
export class NumerosNaturalesComponent implements OnInit {

  videos: any[] = [
    {
      title: 'Concepto de números naturales',
      description: 'Se explica el conjunto de los números reales y la división que existe entre sus subconjuntos.',
      url: 'https://www.youtube.com/embed/obbF5J82378'
    },
    {
      title: 'Suma de números naturales',
      description: 'Se realizan ejemplos aplicando suma de números naturales.',
      url: 'https://www.youtube.com/embed/_JV2fEXVnhk'
    },
    {
      title: 'Resta de números naturales',
      description: 'Se realizan ejemplos aplicando resta de números naturales.',
      url: 'https://www.youtube.com/embed/EHLsl2jVt-U'
    },
    {
      title: 'Multiplicación de números naturales',
      description: 'Se realizan ejemplos aplicando multiplicación de números naturales.',
      url: 'https://www.youtube.com/embed/Mgeq_A6909A'
    },
    {
      title: 'División de números naturales',
      description: 'Se realizan operaciones aplicando división de números naturales.',
      url: 'https://www.youtube.com/embed/MZ5gZIb4Qhg'
    },
    {
      title: 'Propiedades de números naturales',
      description: 'Se explican las propiedades aplicadas a números naturales y los nombres que las caracterizan',
      url: 'https://www.youtube.com/embed/7YZYEcNnbSM'
    },
    // Agrega más objetos de video según sea necesario
  ];


  constructor(private sanitizer: DomSanitizer) { }


  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnInit(): void {
  }

}
