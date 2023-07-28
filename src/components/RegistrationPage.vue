<template>
  <div class="container">
    <div class="header">MULAH</div>
    <div class="registration">Registration</div>
    <div class="sub-header">Please fill up your details</div>

    <div class="input-container">
      <label for="name">Name</label>
      <input type="text" id="name" v-model="name" placeholder="Enter Name">
      <div v-if="!name" class="validation">*Please insert a name</div>
    </div>

    <div class="input-container">
      <label for="birthday">Birthday</label>
      <input type="text" id="birthday" v-model="birthday" placeholder="DD MM YYYY">
      <div v-if="!birthday" class="validation">*Please insert your birthday</div>
    </div>

    <div class="input-container">
      <label for="email">Email</label>
      <input v-if="!noEmail" type="text" id="email" v-model="email" placeholder="Email Address">
      <div v-if="!email && !noEmail" class="validation">*Please insert a valid email address</div>
      <div v-if="noEmail" class="email-text">No Email Address</div>
    </div>

    <div class="text-box">
      <input type="checkbox" v-model="noEmail"> No email address
    </div>

    <button class="continue-button" @click="continueRegistration">Continue</button>

    <div class="line"></div>

    <div class="powered-by">Powered by <a href="https://www.mulahrewards.com" target="_blank">MulahRewards.com</a></div>
  </div>
</template>
  
<script>
export default {
  name: 'RegistrationPage',
  data() {
    return {
      name: '',
      birthday: '',
      email: '',
      phoneNumber: '',
      noEmail: false,
    };
  },
  methods: {
    continueRegistration() {
      if (!this.name || !this.birthday || (!this.noEmail && !this.email)) {
        alert('Please fill in all required fields.');
        return;
      }
      if (this.noEmail) {
        this.email = 'No Email Address';
      }
      console.log('Props in RegistrationPage:', this.name, this.birthday, this.email, this.phoneNumber);

      this.$router.push({
        path: '/OutputPage',
        query: {
          name: this.name,
          birthday: this.birthday,
          email: this.email,
          phoneNumber: '60173527250',
        },
      });
      console.log('Continue button clicked');
    },
  },
};
</script>
  
<style>
.container {
  width: 640px;
  max-width: 100%;
  height: 1136px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
}

.header {
  font-family: 'Roboto', sans-serif;
  font-size: 60px;
  font-weight: bold;
  color: darkorange;
  margin-bottom: 20px;
}

.registration {
  font-size: 24px;
  font-weight: bold;
  color: grey;
  font-family: Arial, sans-serif;
  margin-bottom: 20px;
  text-align: left;
}

.sub-header {
  color: grey;
  margin-bottom: 20px;
}

.input-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
}

.input-container label {
  font-size: 16px;
  font-weight: bold;
  text-align: left;
}

.input-container input {
  font-size: 16px;
  padding: 5px;
  margin-top: 5px;
  border: 1px solid lightgray;
  border-radius: 5px;
  width: 100%;
}

.email-text {
  font-size: 16px;
  margin-top: 20px;
  text-align: left;
}

.validation {
  color: red;
  font-size: 14px;
  text-align: left;
}

.text-box {
  font-size: 16px;
  color: grey;
  margin-bottom: 20px;
  text-align: left;
}

.continue-button {
  padding: 10px 20px;
  background-color: orange;
  color: white;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 200px;
}

.line {
  border-bottom: 1px solid lightgrey;
  margin-bottom: 20px;
}

.powered-by {
  font-size: 14px;
  color: grey;
}

.powered-by a {
  color: blue;
  text-decoration: none;
}

@media (max-width: 640px) {
  .container {
    padding: 10px;
  }

  .header {
    font-size: 30px;
    text-align: center;
  }

  .registration {
    font-size: 40px;
    text-align: left;
  }

  .sub-header {
    font-size: 14px;
    font-weight: bold;
    font-style: italic;
  }

  .input-container label {
    font-size: 14px;
  }

  .input-container input {
    font-size: 14px;
    padding: 5px;
    margin-top: 5px;
    border: 1px solid lightgray;
    border-radius: 5px;
    width: 100%;
  }

  .text-box {
    font-size: 14px;
  }

  .continue-button {
    font-size: 14px;
    margin-bottom: 10px;
    width: 50%;
  }

  .powered-by {
    font-size: 14px;
    margin-right: 0;
  }

  .validation {
    margin-top: 10px;
    font-style: italic;
    color: darkred;
  }
}
</style>
  