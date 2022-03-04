import { Riba, coreModule } from "@ribajs/core";
import { ready } from "@ribajs/utils/src/dom";
import { routerModule } from "@ribajs/router";
import { bs5Module } from "@ribajs/bs5";
import { typedocModule } from "@ribajs/typedoc";

// Own
import {} from "./components";
import * as binders from "./binders";
import * as formatters from "./formatters";

const bootstrap = () => {
  const riba = new Riba();
  const model: any = {};

  riba.configure({
    prefix: ["rv", "csr-rv"],
    blockUnknownCustomElements: false,
    templateDelimiters: ["{", "}"],
  });

  // Regist custom components
  // riba.module.component.regists(components);
  riba.module.binder.regists(binders);
  riba.module.formatter.regists(formatters);

  // Regist modules
  riba.module.regist(coreModule.init());
  riba.module.regist(routerModule.init());
  riba.module.regist(bs5Module.init());
  riba.module.regist(typedocModule.init());

  riba.lifecycle.events.on("ComponentLifecycle:error", (error: Error) => {
    console.error(error);
  });

  riba.bind(document.body, model);
};

ready(bootstrap);
