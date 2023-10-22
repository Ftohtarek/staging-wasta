import { Injectable, WritableSignal, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LangService {
  /* Note no need to localstorage but part of application depond on it so i cant break it now  */
  public systemLang = ['en', 'ar','it']
  constructor() { }
  private lang: WritableSignal<string> = signal('en')

  get currentlang(): string {
    return this.lang()
  }

  set(lang: string) {
    this.lang.update(() => lang)
  }

  changeLanguage(language: any) {
    location.href = this.replaceLang(language)
  }

  private replaceLang(lang: string) {
    const languagePattern = /\/([a-z]{1,})\//;
    const match = location.pathname.match(languagePattern);

    return match ? location.href.replace(match[0], `/${lang}/`) : location.href

  }
}
