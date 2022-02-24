import { PageComponent, ErrorObj } from "@ribajs/ssr";

export interface Scope {
  title: string;
  content: string;
  params: NotFoundPageComponent["ctx"]["params"];
  error?: ErrorObj;
}

export class NotFoundPageComponent extends PageComponent {
  public static tagName = "not-found-page";
  public _debug = false;
  protected autobind = true;

  scope: Scope = {
    title: "",
    content: "",
    params: {},
    error: undefined,
  };

  static get observedAttributes(): string[] {
    return [];
  }

  constructor() {
    super();
    this.head.title = "404 Not found";
    this.scope.params = this.ctx.params;
    this.scope.title = this.ctx.status?.toString() || "404";
    this.scope.content = this.ctx.errorObj?.message || "Not found";
    this.scope.error = this.ctx.errorObj;
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(NotFoundPageComponent.observedAttributes);
  }

  protected template() {
    return (
      <div class="container container-md py-5 my-5 text-center bg-white">
        <div class="row">
          <div class="col-12">
            <h1 ssr-rv-text="title"></h1>
          </div>
        </div>
        <section class="row">
          <div class="col-12">
            <div ssr-rv-text="content"></div>
          </div>
        </section>
      </div>
    );
  }
}
