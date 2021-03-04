<template>
  <div id="email">
      <div class="container con_1">
          <div class="row">
            <b-col lg="12" md="12" sm="12">
                <h2 class="conntact">CONTACT ME</h2>
            </b-col>
              <b-form @submit.prevent="sendEmail">
                <b-form-group id="input">
                    <b-form-input
                    id="input_form"
                    v-model="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    required
                    ></b-form-input>
                </b-form-group>

                <b-form-group id="input">
                    <b-form-input
                    id="input_form"
                    v-model="name"
                    name="name"
                    placeholder="Your name or nick"
                    required
                    ></b-form-input>
                </b-form-group>


                <b-form-group id="input">
                    <b-form-textarea
                    id="input_form"
                    v-model="message"
                    name="message"
                    placeholder="Your message for me..."
                    rows="3"
                    max-rows="6"
                    ></b-form-textarea>
                </b-form-group>

                <b-button id="btn" class="link btn" type="submit">SEND</b-button>

            </b-form>
          </div>
      </div>
  </div>
</template>

<script>
import emailjs from 'emailjs-com'

  export default {
    data() {
      return {
         email:'',
         name:'',
         message:''
      }
    },
        methods: {
      sendEmail(e){
      emailjs.sendForm("","", e.target, '', {
        email: this.email,
        name: this.name,
        message: this.message
      })
      
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
            alert("Email sent successfully!")
        }, (error) => {
            console.log('FAILED...', error);
            alert("FAILED!"+error);
        });
        
        this.email = ''
        this.name =  ''
        this.message = ''
    },
    }
  }
</script>

<style lang="scss" scoped>
    .con_1{
        position: relative;
        text-align: center;
        justify-content: center;

    }
    #input_form {
        background-color: black;
        border-radius: 0px;
        border-bottom: 2px solid #00f7ff;
        color:#00f7ff;
        border-top:none;border-left:none;border-right:none;
    }
    #input_form:focus {
        box-shadow: none!important;
        border-color: #ff00f2!important;
        background-color: #580054;
        transition: all 1.75s ease-out;
    }
    #input_form::placeholder {
        text-align: center;
        color: #00f7ff;
        opacity: 1; /* Firefox */
    }

    #input_form:-ms-input-placeholder { /* Internet Explorer 10-11 */
        text-align: center;
        color: #00f7ff;
    }

    #input_form::-ms-input-placeholder { /* Microsoft Edge */
        text-align: center;
        color: #00f7ff;
    }



         #btn {
            font-size: 1.5rem;
            padding: 1rem 3rem;
        }

        .btn {
            text-decoration: none;
            background: transparent;
            border-radius: 0px;
            border-bottom: 2px solid #00f7ff;
            color: #00f7ff;
            border-top:none;border-left:none;border-right:none;
            position: relative;
            overflow: hidden;
        }

        .btn:hover {
            background: transparent;
            color: #ff00f2;
            border:transparent;
            transition: all .75s ease-out;
        }

        .btn:before {
            content: "";
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(120deg, transparent,#00f7ff,transparent);
            transition: all 650ms;
        }

        .btn:hover:before {
             left: 100%;
        }
        #btn:focus {
            box-shadow: none!important;
            border-color: #ff00f2!important;
            background-color: #580054;
            transition: all 1.75s ease-out;
        }

</style>