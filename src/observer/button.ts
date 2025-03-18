import { Observable } from './interfaces';
import { Observer } from './interfaces';
import { ButtonClickEventType } from './interfaces';

export class Button implements Observable {
  private observers: Observer[] = [];

  private eventType: ButtonClickEventType = ButtonClickEventType.NO_EVENT;

  constructor(private id: number, private name: string) {
  }

  getId() {
    return this.id;
  }
  getName() {
    return this.name;
  }
  getEventType() {
    return this.eventType;
  }

  subscribe(observer: Observer) {
    if (this.observers.includes(observer)) {
      throw new Error('The observer had already been subscribed');
    } else {
      this.observers.push(observer);
    }
  }

  unsubscribe(observer: Observer) {
    const index = this.observers.indexOf(observer);
    if (index === -1) {
      throw new Error('The observer has not been subscribed');
    } else {
      this.observers.splice(index, 1);
    }
  }

  notify() {
    this.observers.forEach((observer) => observer.update(this));
  }

  onLeftClick() {
    this.eventType = ButtonClickEventType.LEFTCLICK;
    this.notify();
  }
  
  onRightClick() {
    this.eventType = ButtonClickEventType.RIGHTCLICK;
    this.notify();
  }
  onCenterClick() {
    this.eventType = ButtonClickEventType.CENTERCLICK;
    this.notify();
  }
}