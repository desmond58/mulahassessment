<template>
  <div class="container">
    <div class="header">MULAH</div>
    <div class="sub-header-hello">Hello,</div>
    <div class="sub-header-hello">Welcome !</div>

    <div class="sub-para">Check Your Loyalty Points & Rewards</div>
    <div class="loyalty-points">
      <input type="tel" class="country-code" v-model="countryCode" placeholder="+60" @input="validateNumber">
      <input type="tel" class="phone-number" v-model="phoneNumber" placeholder="Enter your mobile number"
        @input="validateNumber">
    </div>
    <button class="check-button" @click="checkLoyaltyPoints">Check Loyalty Points</button>

    <div class="line-hello"></div>

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
      this.countryCode = this.countryCode.replace(/[^0-9+]/g, '');
      this.phoneNumber = this.phoneNumber.replace(/[^0-9]/g, '');
    },
    checkLoyaltyPoints() {
      if (this.countryCode + this.phoneNumber === "+60173527250") {
        this.$router.push({ path: '/RegistrationPage' });
        console.log("Loyalty points checked successfully!");
      } else {
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

.loyalty-points {
  display: flex;
  align-items: flex-start;
}

.country-code {
  font-size: 14px;
  padding: 5px;
  border: none;
  border-bottom: 1px solid darkorange;
  flex: 1;
  max-width: 10%;
  margin-right: 10px;
  margin-bottom: 10px;
}

.phone-number {
  font-size: 14px;
  padding: 5px;
  border: none;
  border-bottom: 1px solid darkorange;
  flex: 1;
  max-width: 90%;
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

.line-hello {
  border-bottom: 1px solid lightgrey;
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
    font-size: 30px;
    text-align: center;
  }

  .sub-header-hello {
    font-size: 40px;
    text-align: left;
  }

  .sub-para {
    margin-top: 20px;
    font-size: 14px;
    color: darkorange
  }

  .loyalty-points {
    display: flex;
    align-items: flex-start;
  }

  .country-code {
    font-size: 14px;
    padding: 5px;
    border: none;
    border-bottom: 1px solid darkorange;
    flex: 1;
    max-width: 10%;
    margin-right: 10px;
    margin-bottom: 10px;
  }

  .phone-number {
    font-size: 14px;
    padding: 5px;
    border: none;
    border-bottom: 1px solid darkorange;
    flex: 1;
    max-width: 90%;
    margin-bottom: 10px;
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
