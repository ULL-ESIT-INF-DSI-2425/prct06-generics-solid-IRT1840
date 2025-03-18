import { describe, it, expect, vi } from "vitest";

// Importamos las clases del código principal
import { Button } from "../src/observer/button.ts";
import { ButtonObserver } from "../src/observer/buttonObserver.ts";
import { ButtonClickEventType } from "../src/observer/interfaces.ts";

describe("Button Class", () => {
  it("should subscribe and notify observers on left click", () => {
    const button = new Button(1, "TestButton");
    const observer = new ButtonObserver(1, "Observer1");

    // Espiamos la función update para verificar la llamada
    const observerSpy = vi.spyOn(observer, "update");

    button.subscribe(observer);
    button.onLeftClick();

    expect(observerSpy).toHaveBeenCalled();
    expect(button.getEventType()).toBe(ButtonClickEventType.LEFTCLICK);
  });

  it("should throw an error when subscribing the same observer twice", () => {
    const button = new Button(2, "TestButton2");
    const observer = new ButtonObserver(2, "Observer2");

    button.subscribe(observer);
    expect(() => button.subscribe(observer)).toThrowError(
      "The observer had already been subscribed"
    );
  });

  it("should notify all observers on right click", () => {
    const button = new Button(3, "TestButton3");
    const observer1 = new ButtonObserver(3, "Observer1");
    const observer2 = new ButtonObserver(4, "Observer2");

    const spy1 = vi.spyOn(observer1, "update");
    const spy2 = vi.spyOn(observer2, "update");

    button.subscribe(observer1);
    button.subscribe(observer2);
    button.onRightClick();

    expect(spy1).toHaveBeenCalled();
    expect(spy2).toHaveBeenCalled();
    expect(button.getEventType()).toBe(ButtonClickEventType.RIGHTCLICK);
  });

  it("should unsubscribe an observer", () => {
    const button = new Button(4, "TestButton4");
    const observer = new ButtonObserver(5, "Observer3");

    button.subscribe(observer);
    button.unsubscribe(observer);

    expect(() => button.unsubscribe(observer)).toThrowError(
      "The observer has not been subscribed"
    );
  });

  it("should not notify unsubscribed observer", () => {
    const button = new Button(5, "TestButton5");
    const observer = new ButtonObserver(6, "Observer4");

    const observerSpy = vi.spyOn(observer, "update");

    button.subscribe(observer);
    button.unsubscribe(observer);
    button.onCenterClick();

    expect(observerSpy).not.toHaveBeenCalled();
  });
});
