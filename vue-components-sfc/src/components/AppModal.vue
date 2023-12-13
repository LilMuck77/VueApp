<script>

export default {
  name: "AppModal",
  props: {
    title: {
      type: String,
      default: 'Modal Title',
    },
    id: {
      type: String,
      required: true
    }

  },
}
</script>
<template>
  <div aria-hidden="true" aria-labelledby="exerciseModalTitle" class="modal fade" :id="id"
       role="dialog"
       tabindex="-1">
    <div class="modal-dialog" role="document">
      <form>
        <div class="modal-content">
          <div class="modal-header">
            <slot name="header">
              <h5 class="modal-title" :id="id + 'exerciseModalTitle'"><i><b>{{ title }}</b></i></h5>
            </slot>
          </div>
          <div class="modal-body">
            <slot></slot>
          </div>
          <div class="modal-footer">
            <slot name="footer">
            </slot>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
