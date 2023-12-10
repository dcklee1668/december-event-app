<template>
   <div class="contact-page">
     <ContactForm />
     <div v-if="confirmation">
       <h3>Confirmation:</h3>
       <p>User typed: {{ confirmation }}</p>
     </div>
   </div>
 </template>
 
 <script>
 import ContactForm from '@/views/ContactForm.vue'; // Import ContactForm component
 
 export default {
   components: {
     ContactForm // Use ContactForm component
   },
   data() {
     return {
       confirmation: ''
     };
   },
   // Other component logic
 };
 </script>
 
 <style scoped>
 /* Styles for the contact page */
 .contact-page {
   /* Your styles */
 }
 </style>
 