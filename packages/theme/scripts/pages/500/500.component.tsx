import { PageComponent, ErrorObj } from "@ribajs/ssr";

export interface Scope {
  title: string;
  content: string;
  params: InternalErrorPageComponent["ctx"]["params"];
  error?: ErrorObj;
}

export class InternalErrorPageComponent extends PageComponent {
  public static tagName = "error-page";
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
    this.head.title = "500 Internal server error";
    this.scope.params = this.ctx.params;
    this.scope.title = this.ctx.status?.toString() || "500";
    this.scope.content =
      `${this.ctx.errorObj?.message}` || "Internal server error";
    if (typeof this.scope.content === "string") {
      this.scope.content = this.scope.content.replace(/\n/g, "<br >");
    }

    this.scope.error = this.ctx.errorObj;
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(InternalErrorPageComponent.observedAttributes);
  }

  protected template() {
    return (
      <div class="container container-md py-5 my-5 bg-white">
        <div class="row">
          <div class="col-12">
            <h1 class="text-center" ssr-rv-text="title"></h1>
          </div>
        </div>
        <section class="row">
          <div class="col-12">
            <div class="text-center my-3" ssr-rv-html="content"></div>
            <div class="alert alert-danger text-left" role="alert">
              <p ssr-rv-html="error | json"></p>
              <span ssr-rv-each-line="error.stack">
                [ line ]<br />
              </span>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
