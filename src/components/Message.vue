<template>
    <div>
      <div v-for="(message, index) in messages" :key="index" class="message-form">
        Message from Page {{ message.page }} is: {{ message.text }} 
      </div>
      <form @submit.prevent="addMessage" class="message-form">
        The Message is : <input v-model="msg" class="styled-input" placeholder="Enter a message" />
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        msg: '',
        messages: []
      };
    },
    computed: {
    allMessages() {
      // Return all messages (no filtering is applied)
      return this.messages;
    }
  },
    methods: {
      addMessage() {
        const page = this.$route.params.nb;
        if (this.msg.trim() !== '') {
          this.messages.push({text: this.msg.trim(),page: page}); // Add the message to the list
          this.msg = ''; // Clear the input field
        }
      }
    }
  };
  </script>
  <style scoped>
  .message-form {
    margin-top: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .styled-input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    flex-grow: 1;
    font-size: 14px;
    transition: border-color 0.2s, box-shadow 0.2s;
  }
  
  
  </style>
  