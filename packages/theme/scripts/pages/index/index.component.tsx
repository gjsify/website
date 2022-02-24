import { PageComponent } from "@ribajs/ssr";
import { TemplateFunction } from "@ribajs/core";

export interface Scope {

}

export class IndexPageComponent extends PageComponent {
  public static tagName = "index-page";
  public _debug = true;
  protected autobind = true;

  protected head = {
    title: "Gjsify"
  };

  scope: Scope = {

  };

  static get observedAttributes(): string[] {
    return [];
  }

  constructor() {
    super();
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(IndexPageComponent.observedAttributes);
  }

  protected requiredAttributes(): string[] {
    return [];
  }

  protected async beforeBind() {
    await super.beforeBind();
  }

  protected async afterBind() {
    await super.afterBind();
  }

  protected template(): ReturnType<TemplateFunction> {
    return (
      <section class="container-fluid text-center">
        <head class="row">
          <div class="col-auto mx-auto py-5">
            <img class="img-fluid d-td-none" src="/images/logo.svg" alt="Gjsify Logo" />
            <img class="img-fluid d-tl-none" src="/images/logo-light.svg" alt="Gjsify Logo light" />
          </div>
          <div class="col-12">
            <h1 hidden>Gjsify</h1>
            <p class="lead">
              Combine the power of <strong>Typescript</strong> with the power of <strong><span class="text-primary">G</span>JS</strong>
            </p>

            <a class="btn btn-outline-primary btn-lg my-4" href="https://gjs-docs.gjsify.org">API Reference</a>
          </div>
        </head>
      </section>
    );
  }
}
