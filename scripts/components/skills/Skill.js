import Item from "../common/Item.js";

export default {
  props: ["name", "logo", "url"],
  components: { Item },
  setup(props) {
    const onClick = () => {
      window.open(props.url);
    };

    return { onClick };
  },
  template: `
<Item
  backgroundColor="#FFF"
  :logo="logo"
  :name="name"
  @click="onClick"
/>`,
};
