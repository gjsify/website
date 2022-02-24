import { PageComponent } from "@ribajs/ssr";
import { TemplateFunction } from "@ribajs/core";

export interface Scope {
  title: string;
  content: string;
  obj: any;
}

export class IndexPageComponent extends PageComponent {
  public static tagName = "index-page";
  public _debug = true;
  protected autobind = true;

  protected head = {
    title: "You are on home",
  };

  scope: Scope = {
    title: "Hello from ssr",
    content: "When you can see this, ssr works :)",
    obj: {
      foo: "bar",
      note: "This is an example to test the json formatter",
    },
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
      <div class="container-fluid py-5 my-5 text-center">
        <div class="row">
          <div class="col-12">
            <h1 ssr-rv-html="title"></h1>
          </div>
        </div>
        <section class="row">
          <div class="col-12">
            <p ssr-rv-html="content"></p>
          </div>
        </section>
      </div>
    );
  }
}
