import { initPlasmicLoader } from "@plasmicapp/loader-nextjs"
import { Button } from "./components/Button"
import { Card } from "./components/Card"
import { Heading } from "./components/Heading"
import { Text } from "./components/Text"
import { Calendar } from "./components/Calendar"

export const PLASMIC = initPlasmicLoader({
  projects: [
    // Add your Plasmic project ID and API token here when you have them
    {
      id: "placeholder",
      token: "placeholder",
    },
  ],
  // Specify which components should be registered with Plasmic
  components: [
    {
      name: "Button",
      component: Button,
      props: {
        children: {
          type: "slot",
          defaultValue: "Button",
        },
        variant: {
          type: "choice",
          options: ["primary", "secondary", "outline"],
          defaultValue: "primary",
        },
        className: {
          type: "string",
          defaultValue: "",
        },
        isDisabled: {
          type: "boolean",
          defaultValue: false,
        },
      },
    },
    {
      name: "Card",
      component: Card,
      props: {
        children: {
          type: "slot",
          defaultValue: "Card content",
        },
        className: {
          type: "string",
          defaultValue: "",
        },
      },
    },
    {
      name: "Heading",
      component: Heading,
      props: {
        level: {
          type: "number",
          defaultValue: 2,
          min: 1,
          max: 6,
        },
        children: {
          type: "slot",
          defaultValue: "Heading",
        },
        className: {
          type: "string",
          defaultValue: "",
        },
      },
    },
    {
      name: "Text",
      component: Text,
      props: {
        children: {
          type: "slot",
          defaultValue: "Text content",
        },
        className: {
          type: "string",
          defaultValue: "",
        },
      },
    },
    {
      name: "Calendar",
      component: Calendar,
      props: {
        value: {
          type: "date",
          defaultValue: new Date(),
        },
        onChange: {
          type: "eventHandler",
          argTypes: [{ name: "date", type: "date" }],
        },
        className: {
          type: "string",
          defaultValue: "",
        },
        minValue: {
          type: "date",
        },
        maxValue: {
          type: "date",
        },
      },
    },
  ],
})

