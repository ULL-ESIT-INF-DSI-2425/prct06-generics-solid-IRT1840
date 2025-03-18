var ButtonClickEventType;
(function (ButtonClickEventType) {
    ButtonClickEventType[ButtonClickEventType["NO_EVENT"] = 0] = "NO_EVENT";
    ButtonClickEventType[ButtonClickEventType["LEFTCLICK"] = 1] = "LEFTCLICK";
    ButtonClickEventType[ButtonClickEventType["RIGHTCLICK"] = 2] = "RIGHTCLICK";
    ButtonClickEventType[ButtonClickEventType["CENTERCLICK"] = 3] = "CENTERCLICK";
})(ButtonClickEventType || (ButtonClickEventType = {}));
;
/**
 * Class Button that implements the Observable interface, i.e.,
 * Button objects can be observed
 */
class Button {
    id;
    name;
    observers = [];
    eventType = ButtonClickEventType.NO_EVENT;
    constructor(id, name) {
        this.id = id;
        this.name = name;
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
    subscribe(observer) {
        if (this.observers.includes(observer)) {
            throw new Error('The observer had already been subscribed');
        }
        else {
            this.observers.push(observer);
        }
    }
    unsubscribe(observer) {
        const index = this.observers.indexOf(observer);
        if (index === -1) {
            throw new Error('The observer has not been subscribed');
        }
        else {
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
/**
 * Class ButtonObserver that implements the interface Observer, i.e.,
 * it is able to observe other objects
 */
class ButtonObserver {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    update(observable) {
        if (observable instanceof Button) {
            switch (observable.getEventType()) {
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
// Client code
const myButton = new Button(0, 'myButton');
const firstButtonObserver = new ButtonObserver(0, 'firstButtonObserver');
const secondButtonObserver = new ButtonObserver(1, 'secondButtonObserver');
console.log('firstButtonObserver subscription');
myButton.subscribe(firstButtonObserver);
console.log('secondButtonObserver subscription');
myButton.subscribe(secondButtonObserver);
try {
    myButton.subscribe(secondButtonObserver);
}
catch (error) {
    console.log('secondButtonObserver was already subscribed');
}
console.log('myButton left click');
myButton.onLeftClick();
console.log('firstButtonObserver unsubscription');
myButton.unsubscribe(firstButtonObserver);
console.log('myButton right click');
myButton.onRightClick();
console.log('myButton center click');
myButton.onCenterClick();
export {};
