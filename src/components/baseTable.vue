<template>
 <div class="baseTable">
   <Table border v-bind="$props" :data="props_data"></Table>
   <div style="margin: 10px;overflow: hidden">
     <div style="float: right;">
       <Page :total="props_total" :page-size-opts="[10,20,30]" size="small" show-elevator show-sizer></Page>
     </div>
   </div>
 </div>
</template>

<script>
    export default {
        props:{
          height: {
            type: [Number, String],
            default: 300
          },
          url: {
            type: String
          },
          pageNo: {
            type: Number,
            default: 1
          },
          pageSize: {
            type: Number,
            default: 10,
          },
          columns: {
            type: Array,
            default() {
              return [];
            }
          },
          data: {
            type: Array,
            default() {
              return [];
            }
          }
        },
        data() {
          return {
            props_data:this.data,
            props_total:0,
            props_query:{
              pageNo: this.pageNo,
              pageSize: this.pageSize
            }
          }
        },
        created() {
          this.query();
        },
        methods: {
          query(){
            axios.post(this.url,{
              pageSize:10,
              pageNo:1,
              isEffect:0
            }).then((res) => {
              this.props_data = res.rows;
              this.props_total = res.recordsTotal;
            },(err) => {

            });
          }
        }
    }
</script>

<style scoped>

</style>
