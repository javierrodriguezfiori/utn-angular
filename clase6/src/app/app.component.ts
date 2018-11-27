import { Component } from '@angular/core';
import { Observable, of } from 'rxjs'; 
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'clase6';
  array = [];

  constructor() {
    var observable$ = new Observable( subscriber => {
      let array = [1,2,3,4,5];
  
      array.forEach( (element) => {
        subscriber.next (element);
      });
      
      /* subscriber.error("Pepito"); */

      subscriber.complete();
    });

    observable$.subscribe( (next) => console.log(next) )
    
    observable$ = of(2,3,4,5,6);
    
    observable$.subscribe( (next) => console.log(next) )

    /* implementar map, error, complete, etc, mergemap, tap
    rxjsMarbles web, para tener en cuenta */
  }

}
