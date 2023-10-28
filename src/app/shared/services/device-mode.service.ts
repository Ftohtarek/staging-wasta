import { BreakpointObserver } from '@angular/cdk/layout';
import { Injectable, Signal, WritableSignal, computed, effect, signal } from '@angular/core';
export type TDeviceMode = 'mobile' | 'tablet' | 'desktop'
/*** Configuration for layout switching callbacks.*/
type LayoutSwitcherConfig = {
  desktop?: () => void;
  tablet?: () => void;
  mobile?: () => void;
};
@Injectable({
  providedIn: 'root'
})
export class DeviceModeService {
  public isDesktop: WritableSignal<boolean> = signal(false)
  public isTablet: WritableSignal<boolean> = signal(false)
  public isMobile: WritableSignal<boolean> = signal(true)

  private desktopModeWidth = "(min-width: 1000px)";
  private tabletModeWidth = "(min-width: 769px) and (max-width: 999px)";
  private mobileModeWidth = "(max-width: 768px)";

  mode: WritableSignal<'mobile' | 'tablet' | 'desktop'> = signal('mobile')
  /**
    * Constructs an instance of the ResponsiveService.
    * @param {BreakpointObserver} observer - The BreakpointObserver service.
    */

  constructor(private obsrever: BreakpointObserver) {
    // Observe the breakpoint using the BreakpointObserverF
    effect(() => {
      this.mode()
      this.layoutSwitcher(this.layoutConfig)
    })
    
    this.obsrever.observe([this.mobileModeWidth, this.desktopModeWidth, this.tabletModeWidth]).subscribe(state => {
      // Get the state of the layout breakpoint
      let desktopModeState = state.breakpoints[this.desktopModeWidth] ? true : false
      let tabletModeState = state.breakpoints[this.tabletModeWidth] ? true : false
      let mobileModeState = state.breakpoints[this.mobileModeWidth] ? true : false

      // Update the value of 'layout signal' by WritableSignal updates
      this.isDesktop.update(() => desktopModeState)
      this.isTablet.update(() => tabletModeState)
      this.isMobile.update(() => mobileModeState)

      this.mode.update(() => {
        if (desktopModeState) return 'desktop'
        else if (tabletModeState) return 'tablet'
        else return 'mobile'
      })
    })
  }

  /**
   * Allows external components to observe the current device mode.
   * @param callback A callback function to receive the device mode.
   */
  layout(callback = (state: Signal<TDeviceMode>) => { }) { callback(this.mode) }

  layoutConfig: LayoutSwitcherConfig = { desktop: () => { }, mobile: () => { }, tablet: () => { } }
  /**
   * Switches the layout based on the current device mode.
   * @param config Configuration for layout switching callbacks.
  */
  layoutSwitcher(config: LayoutSwitcherConfig) {
    this.layoutConfig = config
    if (config[this.mode()]) config[this.mode()]?.();
  }

}




