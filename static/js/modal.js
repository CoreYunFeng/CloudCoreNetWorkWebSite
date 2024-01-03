// modal.js

Vue.component('modal', {
    template: `
      <div class="modal">
        <div class="modal-content">
          <span class="close" @click="$emit('close')">&times;</span>
          <slot></slot>
        </div>
      </div>
    `
});
