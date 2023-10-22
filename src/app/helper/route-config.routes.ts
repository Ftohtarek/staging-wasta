// import { LangService } from "src/app/Services/lang.service";
import { Injectable } from '@angular/core';
import { LangService } from '../core/services/lang.service';
/*** Type definition for route configuration.*/
type TRouteConfig = {
  [key in keyof typeof routeConfig]: string
};
/** * Configuration object for route paths. */
export let appRoutes: TRouteConfig = <TRouteConfig>{}
export const routeConfig = {
  home: 'home'
}

/** * Service for managing application routes.*/
@Injectable({ providedIn: 'root' })

export class RouteBuilder {
  /** * Object containing the dynamic route paths.*/

  constructor(private lang: LangService) { }
  fire() {

    /** * Initializes the appRoute object with dynamic route paths.*/
    for (let route in routeConfig) {
      appRoutes[<keyof TRouteConfig>route] = `/${this.lang.currentlang}/${routeConfig[route as keyof typeof routeConfig]}`
    }
  }

}
