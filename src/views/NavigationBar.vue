<template>
  <nav class="navigation-bar">
    <div class="logo">
      <img src="../assets/event.png" alt="Event Organizer Logo" />
    </div>
    <ul class="menu">
      <li><router-link to="/" class="nav-link">Home</router-link></li>
      <li><router-link to="/seminars" class="nav-link">Seminars</router-link></li>
      <li><router-link to="/contact" class="nav-link">Contact</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  // Component logic
};
</script>

<style scoped>
/* Styles for the navigation bar */
.navigation-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: white;
  padding: 10px 20px;
}

.logo img {
  max-height: 40px; /* Adjust height as needed */
}

.menu {
  list-style: none;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  justify-content: flex-start; /* Align links to the left */
}

.menu li {
  margin-right: 20px;
}

.menu li:last-child {
  margin-right: 0;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #ffcc00; /* Change color on hover */
}
</style>
