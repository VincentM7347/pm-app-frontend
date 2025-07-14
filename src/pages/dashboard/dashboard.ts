import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink], 
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent {

  activeProjectsCount = 5;
  upcomingTasksCount = 12;

  recentProjects = [
    {
      name: 'Orbit - Backend Entwicklung',
      description: 'Entwicklung der Kern-API mit Spring Boot.',
      progress: 75
    },
    {
      name: 'Orbit - Frontend Design',
      description: 'UI/UX Konzeption und Umsetzung in Angular.',
      progress: 40
    },
    {
      name: 'Marketing Webseite',
      description: 'Launch der neuen Landing Page.',
      progress: 95
    }
  ];

  // Platzhalter-Daten für anstehende Aufgaben
  upcomingTasks = [
    {
      name: 'Login-Endpunkt implementieren',
      projectName: 'Orbit - Backend Entwicklung',
      dueDate: '20.07.2025'
    },
    {
      name: 'Dashboard-Komponente erstellen',
      projectName: 'Orbit - Frontend Design',
      dueDate: '22.07.2025'
    },
    {
      name: 'Datenbank-Schema finalisieren',
      projectName: 'Orbit - Backend Entwicklung',
      dueDate: '25.07.2025'
    }
  ];
}
