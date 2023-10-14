
<script>
import { loginAcc } from '../util/login';
import axios from 'axios'
import { environment } from "../environment/env";

const apiUrl = environment.apiUrl;

export default {
  data() {
    return {
      username: "",
      password: "",
      usernameError: "",
      passwordError: "",
      passwordRegex: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/,
      errorResponse: null,
      inputType:'password',
      IsHide: false ,
    };
  },
    created() {
    const token = this.$cookies.get('myToken');
    if (token) {
      axios.get(apiUrl + '/home', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(response => {
          this.$router.push("/");
        })
        .catch(error => {
          console.log("er", error.request?.response);
        });


    } else {
      this.$router.push("/login");
    }
  },
  methods: {
    login() {
      if (this.validateForm()) {
        loginAcc(this.username, this.password, this.$router)
          .then(data => {
            const newRe = document.querySelector(".Krd");
            if (newRe) {
              const s = data;
              const obj = JSON.parse(s);
              const message = obj.msg;
              if (!newRe.querySelector(".message-shown")) {
                const newElement = document.createElement("p");
                newElement.textContent = message;
                newElement.classList.add("message-shown");
                newRe.appendChild(newElement);
              }
            } else {
              console.log('Phần tử "Krd" không tồn tại.');
            }
          })
      }

    },
    visibilityPassword() {
            console.log(this.IsHide);
            this.IsHide = !this.IsHide;
            this.IsHide==true ?this.inputType= 'text' : this.inputType='password';
        },
    validateForm() {
      this.usernameError = this.username ? "" : "Vui lòng nhập tên đăng nhập.";
      this.passwordError = this.passwordRegex.test(this.password) ? "" : "Vui lòng nhập mật khẩu chính xác.";
      return !this.usernameError && !this.passwordError;
    },

  },
}
</script>

<template>
  <head>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">


  </head>
 

  <div id="home" class="contaiter">
    <div id="login-form">
      <div class="login-form-header">
        <span class="title-header">Đăng nhập</span>
        <span style="position: absolute;font-family: Roboto; top: 19px; right: 19px">X</span>
      </div>

      <div id="login-body">
        <div class="label-input">Tên đăng nhập</div>
        <input type="text" v-model="username" />
        <div class="error-message" v-if="usernameError">{{ usernameError }}</div>

        <div style="
            margin-top: 40px;
            display: flex;
            justify-content: space-between;
            width: 462px;
          ">
          <span class="label-input">
            Mật khẩu</span>
          <span><a  href="#" id="forgot-password" @click="forgotPassword">Quên mật khẩu?</a></span>
        </div>
       
        <input v-model="password"  name="pw" v-bind:type="inputType"/>
        <div class="IconHide" v-on:click="visibilityPassword" >
                            <div v-if="IsHide==false">
                                <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.005 4.21053C13.7663 4.21053 16.0073 6.56842 16.0073 9.47368C16.0073 10.1579 15.8772 10.8 15.6471 11.4L18.5684 14.4737C20.0791 13.1474 21.2697 11.4316 22 9.47368C20.2692 4.85263 15.9973 1.57895 10.995 1.57895C9.59436 1.57895 8.25375 1.84211 7.01319 2.31579L9.17417 4.58947C9.74443 4.34737 10.3547 4.21053 11.005 4.21053ZM1.00045 1.33684L3.28149 3.73684L3.7417 4.22105C2.08095 5.57895 0.780355 7.38947 0 9.47368C1.73079 14.0947 6.00273 17.3684 11.005 17.3684C12.5557 17.3684 14.0364 17.0526 15.387 16.4842L15.8072 16.9263L18.7385 20L20.0091 18.6632L2.27103 0L1.00045 1.33684ZM6.53297 7.1579L8.08367 8.78947C8.03365 9.01053 8.00364 9.24211 8.00364 9.47368C8.00364 11.2211 9.34425 12.6316 11.005 12.6316C11.2251 12.6316 11.4452 12.6 11.6553 12.5474L13.206 14.1789C12.5357 14.5263 11.7954 14.7368 11.005 14.7368C8.24375 14.7368 6.00273 12.3789 6.00273 9.47368C6.00273 8.64211 6.20282 7.86316 6.53297 7.1579ZM10.8449 6.33684L13.9964 9.65263L14.0164 9.48421C14.0164 7.73684 12.6758 6.32632 11.015 6.32632L10.8449 6.33684Z" fill="#363636"/>
                                </svg> 
                            </div>
                            <div v-if="IsHide==true">
                                <svg fill="#363636" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                                    width="25px" height="20px" viewBox="0 0 519.578 519.578"
                                    xml:space="preserve">
                                        <g>
                                            <g>
                                                <path d="M513.095,245.101c0,0-140.683-139.842-253.291-139.842c-112.608,0-253.292,139.842-253.292,139.842
                                                    c-8.645,8.109-8.721,21.42,0,29.375c0,0,140.684,139.843,253.292,139.843c112.608,0,253.291-139.843,253.291-139.843
                                                    C521.663,266.368,521.816,253.134,513.095,245.101z M260.875,372.397c-61.889,0-112.149-50.185-112.149-112.149
                                                    s50.184-112.149,112.149-112.149c61.965,0,112.148,50.26,112.148,112.149S322.763,372.397,260.875,372.397z"/>
                                                <path d="M259.574,187.726c-39.321,0-71.222,32.053-71.222,71.451c0,39.397,31.901,71.451,71.222,71.451
                                                    c39.321,0,71.222-32.054,71.222-71.451C330.796,219.78,298.896,187.726,259.574,187.726z M286.426,259.407
                                                    c-12.163,0-22.108-9.946-22.108-22.262s9.945-22.261,22.108-22.261s22.108,9.945,22.108,22.261S298.742,259.407,286.426,259.407z"
                                                    />
                                            </g>
                                        </g>
                                    </svg>
                            </div>
                        </div>      
                         
                     
                      
        <div class="error-message" v-if="passwordError">{{ passwordError }}</div>
        <div class="Krd error-message"></div>

        <div class="login-button" @click.prevent="login">Đăng nhập</div>
        <p class="login-with">hoặc đăng nhập bằng</p>
        <div style="
              display: flex;
              justify-content: space-around;
              padding-top: 10px;
            ">
          <span class="otherway"><i class="fa fa-brands fa-facebook"
              style="font-size: 18px; padding-right: 5px; color: #4285F4;"></i>Facebook</span>
          <span class="otherway" @click.prevent="loginWithGoogle">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"
              style=" padding-right: 5px;">
              <title>Google</title>
              <g fill="none" fill-rule="evenodd">
                <path fill="#4285F4"
                  d="M17.64 9.2045c0-.6381-.0573-1.2518-.1636-1.8409H9v3.4814h4.8436c-.2086 1.125-.8427 2.0782-1.7959 2.7164v2.2581h2.9087c1.7018-1.5668 2.6836-3.874 2.6836-6.615z">
                </path>
                <path fill="#34A853"
                  d="M9 18c2.43 0 4.4673-.806 5.9564-2.1805l-2.9087-2.2581c-.8059.54-1.8368.859-3.0477.859-2.344 0-4.3282-1.5831-5.036-3.7104H.9574v2.3318C2.4382 15.9832 5.4818 18 9 18z">
                </path>
                <path fill="#FBBC05"
                  d="M3.964 10.71c-.18-.54-.2822-1.1168-.2822-1.71s.1023-1.17.2823-1.71V4.9582H.9573A8.9965 8.9965 0 0 0 0 9c0 1.4523.3477 2.8268.9573 4.0418L3.964 10.71z">
                </path>
                <path fill="#EA4335"
                  d="M9 3.5795c1.3214 0 2.5077.4541 3.4405 1.346l2.5813-2.5814C13.4632.8918 11.426 0 9 0 5.4818 0 2.4382 2.0168.9573 4.9582L3.964 7.29C4.6718 5.1627 6.6559 3.5795 9 3.5795z">
                </path>
              </g>
            </svg>
            Google</span>
        </div>
      </div>
      <p class="footer">
        Bạn chưa đã có tài khoản? <router-link style=" text-decoration: none;color: var(--dark-other-link-500, #2F80ED);" to="/register">Đăng ký ngay!</router-link>
      </p>
    </div>
  </div>

</template>

<style scoped>
.contaiter {
 
  display: flex;
  justify-content: center;
  height: 100%;

}
.IconHide{
  position: absolute;
  right: 34%;
  top: 34%;
}

#login-form {
  width: 600px;
  height: 589px;
  border-radius: 14px;
  background: var(--light-greyscale-greyscale-200, #fff);
  box-shadow: 0px 12px 40px 0px rgba(0, 0, 0, 0.16);
}

.login-form-header {
  position: relative;
  max-height: 58.264px;
  border-bottom: 1px solid #f7f7f7;
  padding: 16px 240px 18.26px 240px;
}

.title-header {
  padding-top: 16px;
  color: var(--light-greyscale-greyscale-900, #000);
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  /* 133.333% */
  text-transform: uppercase;
}

#login-body {
  padding: 36.74px 80px 0px 80px;
}

.label-input {
  color: var(--light-greyscale-greyscale-900, #000);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  /* 137.5% */
}

#login-body>input {
  display: flex;
  width: 440px;
  height: 22px;
  padding: 16px 15px;
  align-items: flex-start;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #f7f7f7;
 border:none;

}

#forgot-password {
  color: var(--dark-other-link-500, #2f80ed);
  text-align: right;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  text-decoration: none;
  /* 137.5% */
}

.login-button {
  margin-top: 40px;
  display: flex;
  width: 440px;
  height: 20px;
  padding: 15px 15px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 40px;
  background: var(--Green, #00bf6f);
  box-shadow: 0px 2px 10px 0px rgba(244, 103, 0, 0.05);
  cursor: pointer;

  color: var(--light-text-active, #fff);
  text-align: center;
  /* GG/16px/Med/Button Text */
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.login-with {
  margin-top: 30px;
  color: var(--light-transparent-greyscale-65, rgba(0, 0, 0, 0.65));
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.192px;
}

.otherway {
  flex-shrink: 0;
  border-radius: 24px;
  background: var(--light-greyscale-greyscale-300, #e5e6ec);

  color: var(--light-greyscale-greyscale-900, #000);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  padding: 13.02px 55px 13px 55px;
}

.footer {
  margin-top: 51px;
  text-align: center;
  font-family: Roboto;
}

.error-message {
  color: red;
  font-size: small;
}
</style>
