<template>
 <div class="baseTable" style="margin-top: 20px">
   <Table border v-bind="$props" :data="props_data"></Table>
   <div style="margin: 10px;overflow: hidden">
     <div style="float: right;">
       <Page :total="props_total"
             :page-size-opts="pageSizeOpt"
             size="small" show-elevator show-sizer
             @on-change="changedNo"
             @on-page-size-change="changedSize"></Page>
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
          pageSizeOpt:{
            type: Array,
            default() {
              return [10,20,30];
            }
          },
          data: {
            type: Array,
            default() {
              return [];
            }
          },
          queryParam: {
            type: Function
          }
        },
        data() {
          return {
            props_data:this.data,
            props_total:0,
            props_pageNo:this.pageNo,
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
          query(arg){
            let param = _.assign(this.props_query,arg || {});
            this.queryParam && _.assign(param,this.queryParam(param));
            axios.post(this.url,param).then((res) => {
              console.log(res);
              this.props_data = res.rows;
              this.props_total = res.recordsTotal;
            },(err) => {

            });
          },
          changedNo(page){
            this.query({
              pageNo:page
            });
          },
          changedSize(size){
            this.query({
              pageNo:1,
              pageSize:size
            });
          }
        }
    }
</script>

<style scoped>

</style>
