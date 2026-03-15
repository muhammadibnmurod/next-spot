import { defineComponent, h } from "vue";

const IconUser = defineComponent({
  name: "IconUser",
  render() {
    return h(
      "svg",
      { viewBox: "0 0 24 24", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg" },
      [
        h("path", {
          d: "M12 12c2.761 0 5-2.462 5-5.5S14.761 1 12 1 7 3.462 7 6.5 9.239 12 12 12zm0 2c-4.418 0-8 2.91-8 6.5V23h16v-2.5c0-3.59-3.582-6.5-8-6.5z",
        }),
      ]
    );
  },
});

const IconOffice = defineComponent({
  name: "IconOffice",
  render() {
    return h(
      "svg",
      { viewBox: "0 0 24 24", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg" },
      [
        h("path", {
          d: "M3 21h18v2H3v-2zm2-2h3V4H5v15zm5 0h4V8h-4v11zm6 0h3V2h-3v17z",
        }),
      ]
    );
  },
});

export const navigation = [
  {
    title: "navigation.users",
    route: "/users",
    icon: IconUser,
  },
  {
    title: "navigation.objects",
    route: "/objects",
    icon: IconOffice,
  },
]
