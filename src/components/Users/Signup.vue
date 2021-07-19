<template>
  <v-container>
      <h1>회원가입</h1>
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-text-field
        v-model="id"
        :counter="10"
        :rules="nameRules"
        label="아이디"
        required
        ></v-text-field>

        <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="이름"
        required
        ></v-text-field>

        <v-text-field
        v-model="password"
        :counter="10"
        :type="show ? 'text' : 'password'"
        label="비밀번호"
        :rules="passwordRules"
        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="show = !show"
        required
        ></v-text-field>

        <v-text-field
        v-model="email"
        :rules="emailRules"
        label="이메일"
        required
        ></v-text-field>

        <v-text-field
        v-model="address"
        :rules="nameRules"
        label="주소"
        required
        ></v-text-field>

        <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="signup"
        >
        회원가입
        </v-btn>

        <v-btn
        color="error"
        class="mr-4"
        @click="reset"
        >
        Reset Form
        </v-btn>
    </v-form>
  </v-container>
</template>

<script>
import { mapMutations } from 'vuex'

  export default {
    data: () => ({
      show: false,
      valid: true,
      id: '',
      name: '',
      password: '',
      address: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      passwordRules: [
          v => !!v || 'password is required',
          v => (v && v.length > 1) || 'password must be greater than 2 characters'
      ]
    }),

    methods: {
      ...mapMutations(['addUsers']),
      signup () {
        let userObj = {
          userId: this.userId,
          password: this.password,
          name: this.name,
          address: this.address,
          src: this.src
        }
        this.addUsers(userObj);
        this.reset()
      },
      reset () {
        this.$refs.form.reset()
      },
    },
  }
</script>

<style>

</style>