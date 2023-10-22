import { CanActivateFn, Router } from '@angular/router';
import { LangService } from '../services/lang.service';
import { inject } from '@angular/core';
import { RouteBuilder } from 'src/app/helper/route-config.routes';

export const langGuard: CanActivateFn = (route, state) => {
  // Retrieve instances of required services using Angular's dependency injection
  const router = inject(Router);
  const langController = inject(LangService);
  const routeBuilder = inject(RouteBuilder);

  // Extract the 'lang' parameter from the route
  const lang = route.params['lang']

  const setRouteConfig = () => {
    // Set the language in the LangService (assuming it's responsible for language management)
    langController.set(lang)
    // Trigger the route configuration (assuming it's a custom function to handle route changes)
    routeBuilder.fire()
    return true;
  }
  /**
   * redirect to the default Route En
  */
  const redirctToDefault = () => {
    router.navigate(['en']);
    return false;
  }

  return langController.systemLang.includes(lang) ? setRouteConfig() : redirctToDefault()

};
