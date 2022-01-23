import Vue from "vue";
import MarvrRichTextRenderer from "@marvr/storyblok-rich-text-vue-renderer";
import { Block } from "@marvr/storyblok-rich-text-types";

import ImageResolver from "~/resolvers/ImageResolver.vue"

Vue.use(MarvrRichTextRenderer, {
  resolvers: {
    blocks: {
      [Block.IMAGE]: ImageResolver
    }
  }
});
