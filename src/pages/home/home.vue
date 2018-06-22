<template>
    <div>
      <treeselect
        :multiple="true"
        :options="options"
        :load-options="loadOptions"
        placeholder="Try expanding any folder option..."
        v-model="value"
      />
    </div>
</template>

<script>
  export default {
    data: () => ({
      value: null,
      options: [ {
        id: 'success',
        label: 'With children',
        // declare an unloaded branch node
        children: null,
      }, {
        id: 'no-children',
        label: 'With no children',
        children: null,
      }, {
        id: 'failure',
        label: 'Demonstrates error handling',
        children: null,
      } ],
    }),

    methods: {
      loadOptions({ action, parentNode, callback }) {
        // Typically, do the AJAX stuff here.
        // Once the server has responded,
        // assign children options to the parent node & call the callback.
        // We just use `setTimeout()` here to simulate an async operation
        // instead of requesting a real API server for demo purpose.

        if (action === VueTreeselect.LOAD_CHILDREN_OPTIONS) {
          switch (parentNode.id) {
            case 'success': {
              setTimeout(() => {
                parentNode.children = [ {
                  id: 'child',
                  label: 'Child option',
                } ]
                callback()
              }, 2000)
              break
            }
            case 'no-children': {
              setTimeout(() => {
                parentNode.children = []
                callback()
              }, 2000)
              break
            }
            case 'failure': {
              setTimeout(() => {
                callback(new Error('Failed to load options: network error.'))
              }, 2000)
              break
            }
            default: /* empty */
          }
        }
      },
    },
  }
</script>

<style scoped>

</style>
