<template>
  <div class="seminars-page">
    <h2>Seminars</h2>
    <ul class="seminar-list">
      <li class="seminar-item" v-for="seminar in seminars" :key="seminar.id">
        <router-link :to="'/seminars/' + seminar.id">{{ seminar.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import seminarsData from '@/data/Seminars.json'; // Import seminar data

export default {
  data() {
    return {
      seminars: seminarsData // Use imported seminar data
    };
  },
  // Other component logic
};
</script>

<style scoped>
/* Styles for the seminars page */
.seminars-page {
  padding: 20px;
}

.seminar-list {
  padding: 0;
}

.seminar-item {
  margin-bottom: 15px;
  font-size: 18px; /* Set a larger font size */
  position: relative;
}

.seminar-item a {
  text-decoration: none; /* Remove underline from links */
  display: block; /* Make links behave as block elements */
}

.seminar-item a:hover {
  color: #007bff; /* Change link color on hover */
}

</style>
