import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { Layout } from './layout/layout';
import { Home } from './pages/home/home';


export const routes: Routes = [
    {
        path: '',component: Layout,
      
        children: [
          { path: '', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
          { path: 'about', loadComponent: () => import('./pages/about/about').then(m => m.About) },
          { path: 'tour', loadComponent: () => import('./pages/tour/tour').then(m => m.Tour) },
          { path: 'contact', loadComponent: () => import('./pages/contact/contact').then(m => m.Contact) },
          { path: 'tourdetails', loadComponent: () => import('./pages/tourdetails/tourdetails').then(m => m.Tourdetails) },
          
        ],
      },
      { path: '**', redirectTo: '' }
];
