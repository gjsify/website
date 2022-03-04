import { PageComponent } from "@ribajs/ssr";
import { TemplateFunction } from "@ribajs/core";

import apiReferencesTemplate from "./api-references.pug";

export interface Scope {
  title: string;
  content: string;
  params: PagesPageComponent["ctx"]["params"];
}

export class PagesPageComponent extends PageComponent {
  public static tagName = "pages-page";
  public _debug = true;
  protected autobind = true;

  scope: Scope = {
    title: "[ params.handle | capitalize ]",
    content: "<p>You are on [ params.handle ]!</a>",
    params: {},
  };

  static get observedAttributes(): string[] {
    return [];
  }

  constructor() {
    super();
    this.scope.params = this.ctx?.params;
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(PagesPageComponent.observedAttributes);
  }

  protected requiredAttributes(): string[] {
    return [];
  }

  protected async beforeBind() {
    await super.beforeBind();
    this.head.title = "You are " + this.ctx?.params?.handle;

    if (this.ctx?.params?.handle === "api-references") {
      this.scope.content = apiReferencesTemplate();
    }
  }

  protected async afterBind() {
    await super.afterBind();
  }

  protected template(): ReturnType<TemplateFunction> {
    return (
      <div class="container container-md py-5 my-5 text-center">
        <section class="row">
          <div class="col-12">
            <div ssr-rv-template="content"></div>
          </div>
        </section>
      </div>
    );
  }
}
