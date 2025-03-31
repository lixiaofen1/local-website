<template>
  <div class="container">
  <div class="column">
    <h1>账号信息</h1>
    <h2>AVS 账号</h2>
    <p>用户名：SDMCtest</p>
    <p>密码：sdhSRd@5H4</p>
    <h2>Jenkins 账号</h2>
    <p>用户名：ningqian</p>
    <p>密码：nq123456</p>
    <h2>VOIP 注册</h2>
    <ul>
      <li>172.33.5.251</li>
      <li>172.33.5.250</li>
      <li>172.33.5.254</li>
    </ul>
    <ul>
      <li>0755061/@Aa123456</li>
      <li>07550612/@Aa123456</li>
      <li>07550682/@Aa123456</li>
    </ul>
    <h2>语言服务器登录</h2>
    <ul>
      <li>172.18.18.252</li>
      <li>Administrator/sdmc</li>
    </ul>
  </div>

<!----------------------------------------------------------------------------------------->
  <div class="hello">
    <h1>{{ msg }}</h1>

    <h3>任务网站</h3>
     <ul>
    <li>
     <a href="http://10.10.65.5/zentao/my-work-task.html" target="_blank" rel="noopener">
      <img src="..\public\images\chandao0.png" alt="Description">
      </a>
    </li>

       <li>
     <a href="http://10.10.61.231:8090/pages/viewpage.action?pageId=31361307" target="_blank" rel="noopener">
      <img src="..\public\images\cf.png" alt="Description">
      </a>
   </li>
    </ul>


    <h3>公司环境网络连接</h3>
    <ul>
      <li><a href="https://avs.sdmctech.com:8444/dmc/YONG12345678/remote-management" target="_blank" rel="noopener">
      <img src="..\public\images\avs.png" alt="Description">
      </a></li>

      <li><a href="http://10.10.61.44:8080/job/OP_AN_NPE3039GB_BASE/lastSuccessfulBuild/artifact/2025_03_24_02_45_release_AN_NPE3039GB_BASE/" target="_blank" rel="noopener">
      <img src="..\public\images\Jenkin.png" alt="Description">
      </a></li>

      <li><a href="http://10.10.61.91/" target="_blank" rel="noopener">
      <img src="..\public\images\gitlab.png" alt="Description">
      </a></li>
    </ul>

    <h3>常用的工具网址</h3>
    <ul>
      <li><a href="https://excalidraw.com/" target="_blank" rel="noopener">
      <img src="..\public\images\excalidraw.png" alt="Description">
      </a></li>

      <li><a href="https://www.jsongj.com/" target="_blank" rel="noopener">
      <img src="..\public\images\json在线工具.png" alt="Description">
      </a></li>
    </ul>
  </div>
  <!----------------------------------------------------------------------------------------->
  <div class="column">
    <h1>便签贴</h1>
    <ul>
      <li>
        <a href="https://cwmp-data-models.broadband-forum.org/tr-181-2-11-0.html#D.Device:2.Device.DHCPv4.Relay.Forwarding." target="_blank" rel="noopener">tr181标准表</a>
      </li>
    </ul>

  </div>
    <!----------------------------------------------------------------------------------------->
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: flex;
}
 
.column {
  flex: 1; /* 使三列平分容器宽度 */
  margin: 5px; /* 可选，为列之间添加一些间距 */
  padding: 20px; /* 可选，为内容添加一些内边距 */
  background-color: #f0f0f0; /* 可选，为列添加背景色以便区分 */
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
