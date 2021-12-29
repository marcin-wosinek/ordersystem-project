import "zone.js";
import "reflect-metadata";

import { enableProdMode } from "@angular/core";
import { platformBrowser } from "@angular/platform-browser";

// @ts-ignore
import { AppModule } from "./app.module";

enableProdMode();
platformBrowser().bootstrapModule(AppModule);
