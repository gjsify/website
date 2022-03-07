import { Component, TemplateFunction } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils";
import { NAVIGATIONS } from "../../constants";

interface Scope {
  navigations: typeof NAVIGATIONS;
  type: "navbar" | "sidebar";
}

export class NavigationComponent extends Component {
  public static tagName = "gjsify-navigation";

  static get observedAttributes() {
    return ["type"];
  }

  public scope: Scope = {
    navigations: NAVIGATIONS,
    type: "navbar",
  };

  constructor() {
    super();
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(NavigationComponent.observedAttributes);
  }

  protected template(): ReturnType<TemplateFunction> {
    if (!hasChildNodesTrim(this)) {
      if (this.scope.type === "navbar") {
        return (
          <ul class="navbar-nav">
            <li class="nav-item" ssr-rv-each-nav="navigations">
              <a
                class="nav-link d-flex align-items-center"
                aria-current="page"
                ssr-rv-href="nav.href"
                rv-route-class-active=""
              >
                [ nav.name ]
                <bs5-icon
                  class="ms-1"
                  ssr-rv-if="nav.isExtern"
                  src="/iconset/svg/icon_box-extern.svg"
                  size={16}
                ></bs5-icon>
              </a>
            </li>
          </ul>
        );
      }
      if (this.scope.type === "sidebar") {
        return (
          <div class="list-group">
            <a
              class="list-group-item list-group-item-action border-0 rounded-0 d-flex align-items-center"
              ssr-rv-each-nav="navigations"
              ssr-rv-href="nav.href"
              rv-route-class-active=""
            >
              [ nav.name ]
              <bs5-icon
                class="ms-1"
                ssr-rv-if="nav.isExtern"
                src="/iconset/svg/icon_box-extern.svg"
                size={16}
              ></bs5-icon>
            </a>
          </div>
        );
      }
      return (
        <div class="alert alert-danger" role="alert">
          Unsupported type: "{this.scope.type}"
        </div>
      );
    } else {
      return null;
    }
  }
}
