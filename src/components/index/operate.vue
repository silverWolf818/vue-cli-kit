<template>
    <div class="layout-operate">
      <ul class="fix">
        <li>个人中心</li>
        <li>
          <Badge class="rw-badge" count="200">
            <Icon type="ios-bell" :size="24"></Icon>
          </Badge>
        </li>
        <li>
          <Tooltip placement="bottom">
            <span class="avator-image"><img alt=""></span><span>管理员</span>
            <div class="avator-info" slot="content">
              <p>退出登录</p>
            </div>
          </Tooltip>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped lang="scss">
.layout-operate{
  position: absolute;
  right: 10px;
  color: #fff;
  z-index: 999;
  ul{
    height: 60px;
    line-height: 60px;
  }
  li{
    float: left;
    padding:0 15px;
    color: rgba(255,255,255,.7);
  }
  .avator-image{
    display: inline-block;
    background: #ccc;
    color: #fff;
    overflow: hidden;
    width: 32px;
    height: 32px;
    border-radius: 16px;
    margin-right: 10px;
    vertical-align: middle;
  }
  .avator-image img {
    display: block;
    width: 100%;
    height: 100%;
  }
  .avator-info{
    width: 80px;
  }
  .avator-info p{
    color: rgba(255,255,255,.7);
    cursor: pointer;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
  li:hover,.avator-info p:hover{
    color: #fff;
  }
}
</style>
