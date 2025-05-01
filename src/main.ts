import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { MainComponent } from './app/main.component';
import { mainConfig } from './app/main.config';

bootstrapApplication(MainComponent, mainConfig)
  .catch((err) => console.error(err));
