import { Component, TemplateFunction } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils";
import { NAVIGATIONS } from "../../constants";

interface Scope {
  navigations: typeof NAVIGATIONS;
}

export class NavigationComponent extends Component {
  public static tagName = "gjsify-navigation";

  static get observedAttributes() {
    return [];
  }

  public scope: Scope = {
    navigations: NAVIGATIONS,
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
      return (
        <ul class="navbar-nav">
          <li class="nav-item" rv-each-nav="navigations">
            <a
              class="nav-link"
              aria-current="page"
              rv-href="nav.href"
              rv-html="nav.name"
            ></a>
          </li>
        </ul>
      );
    } else {
      return null;
    }
  }
}
