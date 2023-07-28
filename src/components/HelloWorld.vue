<template>
  <div class="container">
    <div class="header">MULAH</div>
    <div class="sub-header">Hello,</div>
    <div class="sub-header">Welcome !</div>

    <div class="sub-para">Check Your Loyalty Points & Rewards</div>
    <div class="loyalty-points">
      <input type="number" placeholder="+60">
      <input type="text" placeholder="Enter your mobile number">
    </div>
    <button class="check-button">Check Loyalty Points</button>
    
    <div class="line"></div>

    <div class="powered-by">Powered by <a href="https://www.mulahrewards.com" target="_blank">MulahRewards.com</a></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
};
</script>

<style>
.container {
  max-width: 640px;
  height: 1136px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
}

.header {
  font-size: 24px;
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

.loyalty-points input[type="number"],
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
  margin-bottom: 20px;
  text-align: center;  
}

.line {
  border-bottom: 1px solid black;
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

/* Media queries for responsiveness */
@media (max-width: 640px) {
  .container {
    max-width: 100%;
    padding: 10px;
  }

  .header {
    font-size: 20px;
  }

  .sub-header {
    font-size: 20px;
  }

  .sub-para {
    font-size: 16px;
  }

  .check-button {
    font-size: 14px;
  }
}
</style>
