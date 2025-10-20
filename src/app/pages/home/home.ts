import { Component } from '@angular/core';
import { Card } from '../../components/card/card';
import { Router } from '@angular/router';

interface TutorialCard {
  index: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-home',
  imports: [
    Card,
    
],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  standalone: true 
})
export class Home {
  tutorialCards: TutorialCard[] = [
    { index: 1, title: "Slides Atrativos", description: "Aprenda a fazer slides com a plataforma Canva" },
    { index: 2, title: "Quiz dinâmico", description: "Aprenda a fazer quiz do tipo Kahoot para a sala de aula" },
    { index: 3, title: "Boas anotações", description: "Aprenda a tomar notas de maneira eficiente" },
    { index: 4, title: "Google Docs", description: "Aprenda a usar o Google Docs para suas anotações" },
    { index: 5, title: "Pesquisas", description: "Aprenda a fazer boas pesquisas utilizando palavras chave" },
    { index: 6, title: "IA eficiente", description: "Aprenda a usar a inteligência artificial de forma eficiente" }
  ];

  constructor(
    private router: Router
  ) {}

  verMais(index: number): void {
    const selectedCard = this.tutorialCards.find(card => card.index === index)
    this.router.navigate(['/tutorial',index],  { state: { card: selectedCard}})
  }
}