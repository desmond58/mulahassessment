<template>
  <div class="container">
    <div class="header">MULAH</div>
    <div class="sub-header">Hello,</div>
    <div class="sub-header">Welcome !</div>

    <div class="sub-para">Check Your Loyalty Points & Rewards</div>
    <div class="loyalty-points">
      <input type="tel" v-model="countryCode" placeholder="+60" @input="validateNumber">
      <input type="tel" v-model="phoneNumber" placeholder="Enter your mobile number" @input="validateNumber">
    </div>
    <button class="check-button" @click="checkLoyaltyPoints">Check Loyalty Points</button>

    <div class="line"></div>

    <div class="powered-by">Powered by <a href="https://www.mulahrewards.com" target="_blank">MulahRewards.com</a></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      countryCode: "+60",
      phoneNumber: "",
    };
  },
  methods: {
    validateNumber() {
      // Allow only numerical inputs
      this.countryCode = this.countryCode.replace(/[^0-9+]/g, '');
      this.phoneNumber = this.phoneNumber.replace(/[^0-9]/g, '');
    },
    checkLoyaltyPoints() {
      // Check if the phone number matches "+60173527250"
      if (this.countryCode + this.phoneNumber === "+60173527250") {
        this.$router.push({ path: '/RegistrationPage' });
        console.log("Loyalty points checked successfully!");
      } else {
        // Display an error message indicating an invalid phone number
        alert("Invalid phone number. Please enter the correct number (+60173527250).");
      }
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
  font-size: 14px;
  font-weight: bold;
  color: orange;
  margin-bottom: 20px;
}

.sub-header {
  font-size: 24px;
  color: grey;
  margin-bottom: 20px;
  text-align: left;
}

.sub-para {
  color: orange;
  text-align: left;
  margin-bottom: 20px;
}

.loyalty-points input[type="number"]{
  width: 35px;
  font-size: 18px;
}
.loyalty-points input[type="text"] {
  font-size: 18px;
  padding: 5px;
  border: none;
  border-bottom: 1px solid black;
  flex: 1;
  margin-right: 10px;

  margin-bottom: 10px;
}

.check-button {
  padding: 10px 20px;
  background-color: orange;
  color: white;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 25px;
  margin-top: 25px;
  margin-bottom: 20px;
  text-align: center;
}

.line {
  border-bottom: 1px solid black;
  margin-bottom: 20px;
  width: 100%;
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
    font-family: 'Roboto', sans-serif;
    font-size: 50px;
    text-align: center;
  }

  .sub-header {
    font-size: 70px;
    
  }

  .sub-para {
    font-size: 16px;
  }

  .loyalty-points input[type="number"] {
    width: 35px;
    font-size: 16px;
  }

  .loyalty-points input[type="text"] {
    font-size: 16px;
    padding: 5px;
    border: none;
    border-bottom: 1px solid black;
    flex: 1;
    margin-right: 330px;
    margin-bottom: 10px;
  }

  .line {
    border-bottom: 1px solid black;
    margin-bottom: 20px;
    text-align: center;
    width: 100%;
  }

  .check-button {
    font-size: 14px;
  }

  .powered-by {
    font-size: 14px;
    color: grey;
    text-align: center;
  }
}
</style>
