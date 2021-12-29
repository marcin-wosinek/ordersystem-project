import "zone.js";
import "reflect-metadata";

import { enableProdMode } from "@angular/core";
import { setAngularLib } from "@angular/upgrade/static";
import { platformBrowser } from "@angular/platform-browser";
import * as angular from "angular";

// @ts-ignore
import { AppModule } from "./app.module";

setAngularLib(angular);
enableProdMode();
platformBrowser().bootstrapModule(AppModule);
