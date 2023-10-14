
<script>

import axios from 'axios'
import { environment } from "../environment/env";

const apiUrl = environment.apiUrl;

export default {
  name: "Home",
  data() {
    return {
      user: "",
      responseData: "",
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
          console.log("data", response.data);
          this.responseData = response.data;
        })
        .catch(error => {
          console.log("er", error.request?.response);
          this.$router.push("/login");
        });


    } else {
      this.$router.push("/login");
    }
  },
  methods:{
    logout(){
      this.$cookies.remove('myToken');
      this.$router.push("/login");
    }
  }
};
</script>

<template>
  <div id="home">
    <div style="text-align: center;">
    <div>
      <p> Xin chào {{ responseData.username }}, ID của bạn là {{ responseData._id}}</p>
    </div>
    <button type="button" @click.prevent="logout"> Đăng Xuất </button>
  </div></div>
</template>
