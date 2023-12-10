<template>
   <div class="details-page">
     <h2>{{ seminar.title }}</h2>
     <p>{{ seminar.shortDescription }}</p>
     <p>Location: {{ seminar.location }}</p>
     <p>Start Time: {{ seminar.startTime }}</p>
   </div>
 </template>
 
 <script>
 import seminarsData from '@/data/Seminars.json'; // Import seminar data
 
 export default {
   data() {
     return {
       seminar: {} // Placeholder for seminar details
     };
   },
   created() {
     const seminarId = this.$route.params.id; // Get seminar ID from route
     this.seminar = seminarsData.find(seminar => seminar.id == seminarId); // Find seminar details by ID
   },
   // Other component logic
 };
 </script>
 
 <style scoped>
 /* Styles for the details page */
 .details-page {
   /* Your styles */
 }
 </style>
 