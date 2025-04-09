<template>
    <div class="sidebar-container">
      <!-- 触发区域（如导航图标） -->
      <div 
        class="trigger-area"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
      >
        ☰
      </div>
  
      <!-- 侧边栏主体 -->
      <transition name="slide">
        <div 
          v-show="isSidebarOpen" 
          class="sidebar"
          @mouseenter="handleSidebarEnter"
          @mouseleave="handleSidebarLeave"
        >
          <div class="sidebar-content">
            <!-- 侧边栏内容 -->
            <nav>
              <ul>
                <li>菜单项1</li>
                <li>菜单项2</li>
                <li>菜单项3</li>
              </ul>
            </nav>
          </div>
        </div>
      </transition>
    </div>
  </template>
  
  <script>
  export default {
    name:'LabelBar',
    data() {
      return {
        isSidebarOpen: false,
        isHoveringSidebar: false,
        closeTimer: null
      };
    },
    methods: {
      handleMouseEnter() {
        clearTimeout(this.closeTimer);
        this.isSidebarOpen = true;
      },
      handleMouseLeave() {
        // 延迟关闭，避免移出时立刻关闭
        this.closeTimer = setTimeout(() => {
          if (!this.isHoveringSidebar) {
            this.isSidebarOpen = false;
          }
        }, 200);
      },
      handleSidebarEnter() {
        this.isHoveringSidebar = true;
        clearTimeout(this.closeTimer);
      },
      handleSidebarLeave() {
        this.isHoveringSidebar = false;
        this.isSidebarOpen = false;
      }
    }
  };
  </script>
  
  <style scoped>
  .sidebar-container {
    position: relative;
  }
  
  .trigger-area {
    padding: 16px;
    cursor: pointer;
    background: #2c3e50;
    color: white;
    width: 40px;
  }
  
  .sidebar {
    position: absolute;
    left: 40px; /* 与触发区域右侧对齐 */
    top: 0;
    width: 250px;
    background: #fff;
    box-shadow: 2px 0 5px rgba(0,0,0,0.1);
    overflow: hidden;
  }
  
  .slide-enter-active, .slide-leave-active {
    transition: transform 0.3s ease;
  }
  .slide-enter, .slide-leave-to {
    transform: translateX(-100%);
  }
  
  .sidebar-content {
    padding: 20px;
  }
  
  nav ul {
    list-style: none;
    padding: 0;
  }
  
  nav li {
    padding: 10px;
    cursor: pointer;
  }
  
  nav li:hover {
    background: #f0f0f0;
  }
  </style>
  