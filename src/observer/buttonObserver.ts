import { Observer } from './interfaces';
import { Observable } from './interfaces';
import { ButtonClickEventType } from './interfaces';
import { Button } from './button';
export class ButtonObserver implements Observer {
  constructor(private id: number, private name: string) {
  }

  getId() {
    return this.id;
  }
  getName() {
    return this.name;
  }

  update(observable: Observable) {
    if (observable instanceof Button) {
      switch(observable.getEventType()) {
        case ButtonClickEventType.LEFTCLICK:
          console.log(`I am a ButtonObserver called ${this.name} ` +
                      `and I have observed that Button ${observable.getName()} ` +
                      `was left-clicked with the mouse`);
          break;
        case ButtonClickEventType.RIGHTCLICK:
          console.log(`I am a ButtonObserver called ${this.name} ` +
                      `and I have observed that Button ${observable.getName()} ` +
                      `was right-clicked with the mouse`);
          break;
        case ButtonClickEventType.CENTERCLICK:
          console.log(`I am a ButtonObserver called ${this.name} ` +
                      `and I have observed that Button ${observable.getName()} ` +
                      `was center-clicked with the mouse`);
          break;
      }
    }
  }
}