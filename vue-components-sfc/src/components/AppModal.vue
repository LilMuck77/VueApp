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
              <h5 class="modal-title" :id="id + 'exerciseModalTitle'">{{ title }}</h5>
              <button aria-label="Close" class="btn-close"
                      data-bs-dismiss="modal"
                      type="button">
              </button>
            </slot>
          </div>
          <div class="modal-body">
            <slot></slot>
          </div>
          <div class="modal-footer">
            <slot name="footer">
              <button class="btn btn-secondary" data-bs-dismiss="modal" type="button">Nevermind
              </button>
            </slot>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>

</style>