import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  logToConsole(message: string) {
    console.log(message);
  }
}
