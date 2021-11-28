<template>
  <div class="form_group">
    <input
      :type="type"
      :value="value"
      @input="updatevalue($event)"
      class="form-control"
      :placeholder="placeholder"
      @keypress="keypress($event)"
      @select="select($event)"
    />
  </div>
</template>

<script>
import "./style.css";
export default {
  props: {
    type: {
      type: String,
      default: "text",
    },
    value: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    maxLength: {
      type: Number,
    },
    isPhoneNumber: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isSelect: false,
    };
  },
  methods: {
    updatevalue(e) {
      const value = e.target.value;
      this.$emit("input", value);
      this.$emit("onchnage", value);
    },
    keypress(e) {
      const keycode = e.keyCode;
      if (e.target.value.length > this.maxLength) {
        e.preventDefault();
      }
      if (this.isPhoneNumber) {
        if (keycode >= 48 && keycode <= 57) {
          //////
        } else {
          e.preventDefault();
        }
      }
    },
    select(e) {
      this.isSelect = !this.isSelect;
    },
  },
};
</script>

<style>
</style>