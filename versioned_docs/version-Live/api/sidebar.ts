import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/opendi-decision-modeling-api",
    },
    {
      type: "category",
      label: "Models",
      link: {
        type: "doc",
        id: "api/models",
      },
      items: [
        {
          type: "doc",
          id: "api/list-models",
          label: "List models",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-a-model-reduced",
          label: "Get a model (reduced)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-a-model-complete",
          label: "Get a model (complete)",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Model Components",
      link: {
        type: "doc",
        id: "api/components",
      },
      items: [
        {
          type: "doc",
          id: "api/get-several-components",
          label: "Get several components",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/list-evaluatable-components",
          label: "List evaluatable components",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/retrieve-an-evaluatable-component",
          label: "Retrieve an evaluatable component",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/list-diagram-components",
          label: "List diagram components",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/retrieve-a-diagram-component",
          label: "Retrieve a diagram component",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Simulations",
      link: {
        type: "doc",
        id: "api/simulations",
      },
      items: [
        {
          type: "doc",
          id: "api/list-simulations",
          label: "List simulations",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Simulation Results",
      link: {
        type: "doc",
        id: "api/results",
      },
      items: [
        {
          type: "doc",
          id: "api/list-results",
          label: "List results",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Processors",
      link: {
        type: "doc",
        id: "api/processors",
      },
      items: [
        {
          type: "doc",
          id: "api/list-processors",
          label: "List processors",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
