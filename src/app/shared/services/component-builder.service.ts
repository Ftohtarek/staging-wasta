
import { ComponentRef, Injectable, ViewContainerRef } from "@angular/core";

@Injectable
  ({
    providedIn: 'root'
  })
export class ComponentBuilderService {
  private viewContainerRef!: ViewContainerRef
  /**
    * Set the root view container reference.
    * @param viewContainerEl - The ViewContainerRef where components will be created.
  */
  setRootViewContainerRef(viewContainerEl: ViewContainerRef) {
    this.viewContainerRef = viewContainerEl
  }
  /**
   * Build and insert a dynamic component into the view.
   * @param viewContainerEl - The ViewContainerRef where components will be created.
   * @param component - The component type to create dynamically.
   * @param inputs - Input values for the dynamic component.
  */
  build(viewContainerEl: ViewContainerRef, component: any, inputs?: {}) {
    this.destroy()
    this.setRootViewContainerRef(viewContainerEl)
    const ComponentRef = this.viewContainerRef.createComponent(component)
    this.patchInput(ComponentRef, inputs)
    this.viewContainerRef.insert(ComponentRef.hostView)
  }
  async bulidSync(viewContainerEl: ViewContainerRef, component: Promise<any>, inputs?: {}) {
    const syncComponent = await component
    await this.build(viewContainerEl, syncComponent, inputs)
  }
  /**
   * Patch input values to a dynamically created component.
   * @param ref - The ComponentRef of the dynamic component.
   * @param inputs - Input values to set on the dynamic component.
  */
  patchInput(ref: ComponentRef<any>, inputs?: { [key: string]: any }) {
    for (const key in inputs) {
      ref.setInput(key, inputs[key])
    }
  }
  /**
   * Destroy dynamically created components within the view container.
  */
  destroy() {
    this.viewContainerRef?.clear()
  }

}
