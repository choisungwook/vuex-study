<template>
  <v-container>
      <v-row>
          <v-col sm="2" lg="2">
              <AllUsers />
          </v-col>
          <v-col sm="10" lg="10">
              <Signup />
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
import AllUsers from '../components/Users/Allusers'
import Signup from '../components/Users/Signup'

export default {
    components: {
        AllUsers,
        Signup,
    },
}
</script>

<style>

</style>