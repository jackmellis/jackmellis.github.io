import { ref } from "vue";
import Modal from "../common/Modal.js";
import ProjectDetail from "./ProjectDetail.js";
import Item from "../common/Item.js";

export default {
  props: [
    "name",
    "logo",
    "backgroundColor",
    "color",
    "url",
    "description",
    "image",
    "yearsActive",
    "skills",
  ],
  setup(props) {
    const showModal = ref(false);

    const onClick = () => {
      showModal.value = true;
    };
    const onCloseModal = () => {
      showModal.value = false;
    };

    return {
      showModal,
      onClick,
      onCloseModal,
    };
  },
  components: { Modal, ProjectDetail, Item },
  template: `
<Item
  :backgroundColor="backgroundColor"
  :logo="logo"
  :name="name"
  @click="onClick"
>
  <Modal v-if="showModal" @close="onCloseModal">
    <ProjectDetail v-bind="$props" />
  </Modal>
</Item>`,
};
