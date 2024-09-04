<template>

  <section class="section page-title m-5 mb-2">
    <div class="container mt-5">
      <div class="row">
        <h3>Contact VueDash.org</h3>
        <p>
          Feel free to reach out with any questions, comments, or concerns.
          If you want to hire me for customization of this theme, consulting on how to get your api working with it, etc. you can mssg 850.270.3180 and I'll get back to you within 24 hours. A $50 deposit of ETH @ 0xef83ee26838B306aE2cDDE9eC8eEa38D15B41C2F get you on the schedule and buys you an hour of consulting.
        </p>
      </div>
    </div>
  </section>

  <section class="contact-form section">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <form action="https://getform.io/f/f81dc1d0-eaa5-493e-b51f-d0c7b1929cbb" method="POST" class="form">
            <input type="hidden" name="_gotcha" style="display:none !important">
            <div class="row">
              <div class="col-md-6 my-2">
                <input class="form-control main" type="text" placeholder="Name" name="name" id="form-name" required>
              </div>

              <div class="col-md-6 my-2">
                <input class="form-control main" type="email" placeholder="Your Email Address" name="email"
                  id="form-email" required>
              </div>

              <div class="col-md-12 my-2">
                <input class="form-control main" type="text" placeholder="Subject" name="subject" id="form-subject"
                  required>
              </div>

              <div class="col-md-12 my-2">
                <textarea class="form-control mess main" name="message" rows="10" placeholder="Your Message"
                  id="form-message"></textarea>
              </div>

              <div class="col-12 text-right my-2">
                <button class="btn btn-primary">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 50px;
  margin: 0 0 50px 0;
  position: relative;

}

.title {
  font-size: 24px;
  margin-bottom: 20px;
  color: #b3b3b3;
}

.input-group {
  margin-bottom: 15px;
  position: relative;
}

.form-control {
  border: 1px solid #b3b3b380;
  background-color: #fefefe;
}

.message {
  vertical-align: text-top;
}

.dark .form-control {
  background-color: #151416;
  color: #fefefe;
  border: 2px solid rgba(0, 0, 0, 0.33);
}

/* .input-label {
  font-size: 16px;
} */
/* 
.input-field {
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  border: 1px solid #b3b3b380;
  background-color: #cc3355!important;
  border-radius: 6px;
  font-size: 16px;
  padding: 5px;
} */

.input-field:focus {
  outline: currentColor;
}

.auth-link {
  font-size: 16px;
  margin-top: 15px;
  font-weight: 800;
}

.auth-link a {
  color: #cc3355;
  text-decoration: none;
}

.auth-link a:hover {
  text-decoration: underline;
  cursor: pointer;
}

.error {
  position: absolute;
  color: #cc3355;
  top: 0;
  top: 0;
  right: 10px;
  font-size: 15px;
  margin: 0;
}

.Gerror {
  position: absolute;
  color: #cc3355;
  margin: 0;
  top: 5px;
  right: 5px;
  font-size: 17px;
}

.inpError {
  border: 1px solid #cc3355;
}
</style>
