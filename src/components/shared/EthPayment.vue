<template>
  <div class="p-5" id="EthPay">
    <div class="p-4 max-w-xl" v-if="!connected" :key="updateModal">
      
      <div class="d-flex">
        <div id="eth-icon"></div>
        <h3>Book Consulting Via Eth</h3>
      </div>

      <ul class="steps">
        <li>
          First - <a @click="checkIfWallet" class="wallet-check">
          Check that your wallet is accessible.
          </a> 
        </li>
        <li class="pb-5">
          Next - Select one of the options below to perform a cryptocurrency transaction via the Ethereum
          network. $50 buys you an hour of consulting. 
        </li>
      </ul>

      <div class="d-flex gap-4">
        <button @click="checkWalletConnected" id="meta-mask-button" class="py-2 px-4 btn btn-secondary d-flex">
          <img src="/images/metamask-logo.png" class="me-2 btn-icon" alt="">
          Metamask 
        </button>
        <button class="py-2 btn btn-secondary d-flex disabled">
          <!-- <img src="@/assets/logos/coinbase-logo.svg"
            class="w-6 me-3" alt="">  -->
          Coinbase wallet</button>
      </div>
    </div>

    <div class="p-4 max-w-xl"
      v-if="connected && !checkoutStep && !processingPayment && !paymentCompleted && !paymentFailed" 
      :key="updateModal">
      <h2 class="text-xl mb-4">1 Hour Consulting</h2>
      <div>
        <p>
          $50 worth of ETH will get you an hour of my time.  How we spend it is up to you.  We can discuss how you
        can use this template, Vue in general, specific customizations, custom development, security and deployment,
         or really anything. 
        </p> 
         <p>If you want to hire me past the first hour we can discuss that as well.  You can also use this function
          to donate $50 worth of ETH to the further development of this template as well.
         </p>
      </div>
      <br />

      <div class="d-flex mt-4">
        <h3>Price: {{ itemPrice }}</h3>
        <span>(ETH)</span>
      </div>
      <div class="d-flex border-top border-gray-300 mt-5 pt-5">
        <button @click="proceedToCheckout" type="submit"
          class="btn btn-primary d-flex align-items-center justify-content-center px-5">
          Proceed to checkout
        </button>
      </div>
    </div>

    <div class="p-4 max-w-xl" v-if="checkoutStep" :key="updateModal">

      <span class="text">Please check details to confirm:</span>

      <div class="d-flex mt-4">
        <h3>Total: {{ itemPrice }}</h3>
        <!-- <img src="@/assets/logos/ethereum-logo-small.png" class="w-5 h-5 me-2 ms-2" alt=""> -->
        <span>(ETH)</span>
      </div>

      <div class="d-flex border-top border-gray-300 mt-5 pt-5">
        <button type="submit" @click="makePaymentRequest"
          class="btn btn-primary d-flex align-items-center justify-content-center px-6">
          Purchase Hour
        </button>
      </div>
    </div>

    <div class="p-4 max-w-xl" v-if="processingPayment" :key="updateModal">

      <div wire:loading
        class="h-64 overflow-hidden opacity-75 d-flex flex-column align-items-center justify-content-center">
        <div class="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
        <h2 class="text-center text-black text-xl font-semibold">Processing payment...</h2>
        <p class="w-3/3 text-center text-black">This may take a few seconds, please don't close this page.</p>
      </div>
    </div>

    <div class="p-4 max-w-xl" v-if="paymentCompleted" :key="updateModal">
      <div wire:loading
        class="p-8 h-64 overflow-hidden opacity-75 d-flex flex-column align-items-center justify-content-center">
        <!-- <img class="w-16 mb-4" src="@/assets/logos/green-checkmark.png" alt=""> -->
        <h2 class="text-center text-black text-xl font-semibold">Transaction complete!</h2>
        <p class="w-3/3 text-center text-black">Check your email for payment confirmation.</p>
      </div>
    </div>

    <div class="p-4 max-w-xl" v-if="paymentFailed" :key="updateModal">
      <div wire:loading
        class="h-64 overflow-hidden opacity-75 d-flex flex-column align-items-center justify-content-center">
        <!-- <img class="w-16 mb-4" src="@/assets/logos/red-cross.png" alt=""> -->
        <h2 class="text-center text-black text-xl font-semibold">Transaction failed</h2>
        <p class="w-2/3 text-center text-black">Please try again or contact support at: support@support.com</p>
      </div>
    </div>

  </div>

</template>

<script setup>
import { ref } from 'vue';
import Web3 from 'web3';
import Swal from "sweetalert2";
let connected = ref(false);
let checkoutStep = ref(false);
let updateModal = ref(0);
let processingPayment = ref(false);
let paymentCompleted = ref(false);
let paymentFailed = ref(false);

const sellerAddress = '0xef83ee26838B306aE2cDDE9eC8eEa38D15B41C2F';
let buyerAddress = ref('');
const itemPrice = ref(49.99);
//const itemPriceInWei = ref(Web3.utils.toWei("0.001", 'ether')); // Converts eth to wei
const itemPriceInWei = "2536783359"; // 49.99$ in wei (at time of dev)
let buyerEmail = ref('');

const handleNoWallet = async () => {
	Swal.fire({
  title: "No Wallet Found",
  text: "Is MetaMask Installed?",
  icon: "question"
});
}

const handleHasWallet = async () => {
	Swal.fire({
  title: "Wallet Found!",
  text: "Please choose one of the buttons below",
  icon: "info"
});
}

// checkIfWalletConnected();

function checkIfWallet() {

  try {
    if (window.ethereum.request({ method: 'eth_accounts' }).then(function (accounts) {
      if (accounts.length > 0) {
        connected.value = true;
        buyerAddress.value = accounts[0];
      } else {
        connected.value = false;
      }
    })
    ) {
      connected.value = true;
      handleHasWallet();
    } else {
      connected.value = false;
    }
  } catch (error) {
    console.log(error)
    handleNoWallet();
  }

}

// Function to check if blockchain wallet is connected
function checkWalletConnected() {
  if (window.ethereum) {
    console.log('MetaMask is installed');
    window.web3 = new Web3(window.ethereum);
    window.ethereum.send('eth_requestAccounts').then(function () {
      // Get account address
      window.ethereum.request({ method: 'eth_accounts' })
        .then(function (accounts) {
          if (accounts.length > 0) {
            var address = accounts[0];
            buyerAddress.value = address;
            connected.value = true;
            updateModal.value++;
          } else {
            address = false;
          }
        });

    });
  } else if (window.web3) {secondary

    // Force update of the modal
    updateModal.value++;
  } else {
    connected = false;
  }
}

function proceedToCheckout() {
  checkoutStep.value = true;
  paymentFailed.value = false;
  // Force update of the modal
  updateModal.value++;
}

function makePaymentRequest() {
  checkoutStep.value = false;
  processingPayment.value = true;

  // Start wallet payment process
  window.ethereum.request({ method: 'eth_sendTransaction', params: [{ from: buyerAddress.value, to: sellerAddress, value: itemPriceInWei }] })
    .then(response => {
      console.log(response);
      processingPayment.value = false;
      paymentCompleted.value = true;
    })
    .catch(error => {
      processingPayment.value = false;
      paymentFailed.value = true;
    });

}

</script>

<style scoped>

#meta-mask-button{
  font-weight:700!important;
  font-size: 1.1rem;
  margin-left: 2rem;
}

.dark h3{
  border-bottom: 3px solid #22222269;
}

h3{
  border-bottom: 3px solid #22222212;
}

#EthPay{
  background-color: #ffffff;
  margin: 100px 0;
  border-top: 15px solid #dcdcdc66;
  border-bottom: 15px solid #dcdcdc66;
}

.dark #EthPay{
  background-color: #0c0c0c;
  border-top: 15px solid #23232366;
  border-bottom: 15px solid #23232366;
}

#eth-icon{
  width: 42px;
  height: 42px;
  margin-right: 3px;
  background-image: url(/images/eth.webp);
  opacity: .4
}

.dark #eth-icon{
  width: 42px;
  height: 42px;
  margin-right: 3px;
  background-image: url(/images/eth2.webp);
  opacity: .4
}

.wallet-check{
  color:#2c96c3!important;
  cursor:pointer;
}

.dark .wallet-check{
  color:#6ab5db!important;
}

ul.steps li {
  font-size: 1.25rem;
  list-style-type: none;
  padding-top: 25px;
}

.button-custom {
  background-color: #5554d4;
  color: #fff;
}

.btn-icon{
  margin-top: -2px;
}

.disabled-custom {
  background-color: #ccc;
  color: #fff;
  cursor: auto;
}

.loader {
  border-top-color: #3498db;
  -webkit-animation: spinner 1.5s linear infinite;
  animation: spinner 1.5s linear infinite;
}

@-webkit-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
