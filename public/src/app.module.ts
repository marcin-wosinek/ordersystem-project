import { NgModule, DoBootstrap } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { UpgradeModule } from "@angular/upgrade/static";

import moduleName from "./app.module.ajs";

@NgModule({
  imports: [BrowserModule, UpgradeModule],
})
export class AppModule implements DoBootstrap {
  constructor(private upgrade: UpgradeModule) {}

  ngDoBootstrap() {
    this.upgrade.bootstrap(document.documentElement, [moduleName], {
      strictDi: true,
    });
  }
}
