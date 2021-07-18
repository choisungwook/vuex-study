<template>
  <v-container>
      <v-row>
          <v-col>
              <AllUsers />
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
// import AllUsers from '@/components/Users/AllUsers'
import AllUsers from '../components/Users/Allusers'

export default {
    components: {
        AllUsers,
    },
}
</script>

<style>

</style>