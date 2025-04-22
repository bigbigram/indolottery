<template>
  <nav class="footer-nav">
    <router-link to="/" class="nav-item">
      <i class="fas fa-home"></i>
      <span>Home</span>
    </router-link>
    <router-link to="/results" class="nav-item">
      <i class="fas fa-trophy"></i>
      <span>Results</span>
    </router-link>
    <router-link to="/lotto" class="nav-item">
      <i class="fas fa-ticket-alt"></i>
      <span>Lotto</span>
    </router-link>
    <router-link to="/about" class="nav-item">
      <i class="fas fa-info-circle"></i>
      <span>About</span>
    </router-link>
    <router-link to="/contact" class="nav-item">
      <i class="fas fa-envelope"></i>
      <span>Contact</span>
    </router-link>
  </nav>
</template>

<style scoped>
.footer-nav {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.98));
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-evenly;
  padding: 12px 10px;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.nav-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #666;
  font-size: 0.75rem;
  font-weight: 500;
  padding: 6px 2px;
  transition: all 0.3s ease;
  position: relative;
}

.nav-item i {
  font-size: 1.2rem;
  margin-bottom: 4px;
  background: linear-gradient(135deg, #1a1a4e 0%, #2b2b7b 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0.7;
  transition: all 0.3s ease;
}

.nav-item.router-link-active {
  color: #1a1a4e;
}

.nav-item.router-link-active i {
  opacity: 1;
  transform: translateY(-2px);
}

.nav-item::after {
  content: '';
  position: absolute;
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%) scaleX(0);
  width: 100%;
  height: 3px;
  background: linear-gradient(135deg, #1a1a4e 0%, #2b2b7b 100%);
  transition: transform 0.3s ease;
}

.nav-item.router-link-active::after {
  transform: translateX(-50%) scaleX(0.4);
}
</style>
