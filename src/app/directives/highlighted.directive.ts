import { Directive, HostBinding, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[highlighted]",
})
export class HighlightedDirective {
  constructor() {
    console.log("Directive created...");
  }

  @Input("highlighted")
  isHighlighted = false;
  //
  // @HostBinding("className")
  // get cssClasses() {
  //   return "highlighted";
  // }

  @HostBinding("class.highlighted")
  get cssClasses() {
    return this.isHighlighted;
  }

  @HostBinding("attr.disabled")
  get disbaled() {
    return "true";
  }

  @HostListener("mouseover")
  mouseOver() {
    this.isHighlighted = true;
  }

  @HostListener("mouseleave")
  mouseLeave() {
    this.isHighlighted = false;
  }
}
