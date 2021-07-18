<template>
  <v-container>
      <v-row>
          <v-col xs6>
              <AllUsers />
          </v-col>
          <v-col xs6>
              <AllUsers />
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
import AllUsers from '../components/Users/Allusers'

export default {
    components: {
        AllUsers,
    },
}
</script>

<style>

</style>