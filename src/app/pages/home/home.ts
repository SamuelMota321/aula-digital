import { Component } from '@angular/core';
import { Card } from '../../components/card/card';

interface TutorialCard {
  index: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-home',
  imports: [
    Card
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  standalone: true 
})
export class Home {
  tutorialCards: TutorialCard[] = [
    { index: 1, title: "Slides Atrativos", description: "Aprenda a fazer slides com a plataforma Canva" },
    { index: 2, title: "Quiz dinâmico", description: "Aprenda a fazer quiz do tipo Kahoot para a sala de aula" },
    { index: 3, title: "Boas anotações", description: "Aprenda a tomar notas de maneira eficiente" }
  ];
}