<template>
  <v-container>
      <h1>회원목록</h1>
      <v-list>
        <v-list-item v-for="(user, index) in $store.state.allUsers" :key="user.index">
            <v-list-item-content>
              <v-list-item-title v-text="user.name"></v-list-item-title>
              <v-list-tile-sub-title>id:#{{index}} / {{user.address}} 거주</v-list-tile-sub-title>
            </v-list-item-content>
        </v-list-item>
      </v-list>
  </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>