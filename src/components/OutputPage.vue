<template>
  <div class="container">
    <div class="header">MULAH</div>
    <div class="sub-header">Registration Details</div>

    <div class="input-container">
      <label for="name">Name</label>
      <div>{{ name }}</div>
    </div>

    <div class="input-container">
      <label for="birthday">Birthday</label>
      <div>{{ birthday }}</div>
    </div>

    <div class="input-container">
      <label for="email">Email</label>
      <div>{{ email }}</div>
    </div>

    <div class="input-container">
      <label for="phone">Phone Number</label>
      <div>+{{ phoneNumber }}</div>
    </div>

    <button class="continue-button" @click="goBack">Go Back</button>

    <div class="line"></div>

    <div class="powered-by">Powered by <a href="https://www.mulahrewards.com" target="_blank">MulahRewards.com</a></div>
  </div>
</template>
  
<script>
export default {
  name: 'OutputPage',
  data() {
    return {
      name: '',
      birthday: '',
      email: '',
      phoneNumber: '',
    };
  },
  created() {
    this.name = this.$route.query.name;
    this.birthday = this.$route.query.birthday;
    this.email = this.$route.query.email;
    this.phoneNumber = this.$route.query.phoneNumber;
    console.log('Props in OutputPage:', this.name, this.birthday, this.email, this.phoneNumber);
  },
  methods: {
    goBack() {
      this.$router.push({ path: '/HelloWorld' });
    },
  },
};
</script>

  
<style></style>
  