<template>
  <div class="tags-list">
    <div
      class="tag-item"
      v-for="item in items"
      :key="item"
      @click="onClick(item)"
      :class="{ isPreview: isPreview, isActive: item.active }"
    >
      <!-- ДЗ: в строке выше :class меняем на isActive если активный -->
      <span v-if="item.category"> {{ item.category }} </span>
      <span v-else v-for="el in item" :key="el"> {{ el }} </span>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["onItemClick"],
  data() {
    return {};
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
    isPreview: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onClick(item) {
      item.active = !item.active;
      this.$emit("onItemClick", item);
    },
  },
};
</script>

<style lang="scss">
.tags-list {
  padding: 10px 0;
  display: flex;
  justify-content: center;
}
.tag-item {
  padding: 8px 22px;
  margin-right: 10px;
  background-color: #fff;
  border-radius: 22px;
  user-select: none;
  cursor: pointer;
  &.isActive {
    background-color: #444ce0;
    color: #fff;
  }
  &.isPreview {
    padding: 0;
    color: #444ce0;
    cursor: default;
    &:before {
      content: "#";
    }
  }
  &:last-child {
    margin-right: 0;
  }
}
</style>
