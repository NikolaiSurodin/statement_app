<template>
  <div>
    <v-content>
      <v-data-table
          :headers="headers"
          :items="users"
          class="elevation-1"
      >
        <template slot="items" slot-scope="props"
        >
          <td class="text-xs-left">{{props.item.username}}</td>
          <td>{{ props.item.profile.first_name }} {{ props.item.profile.last_name }}</td>
          <td class="text-xs-left"></td>
          <td class="text-xs-left"></td>
          <td class="text-xs-left">{{ props.item.profile.mobile }}</td>
          <td class="text-xs-left"></td>
          <td class="text-xs-left"></td>
        </template>
      </v-data-table>
    </v-content>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: "userList",
  data() {
    return {
      headers: [
        {text: 'User name', value: 'username'},
        {
          text: 'Имя Фамилия',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        {text: 'Email', value: 'Email'},

        {text: 'День рождение', value: 'birthday'},
        {text: 'Телефон', value: 'mobile'},
        {text: 'Должность', value: 'state'}
      ],
    }
  },
  computed: {
     users() {
       return this.$store.getters.users
     }
  },
  mounted() {
    this.$store.dispatch('AllUsers')
  }
}
</script>

<style scoped>

</style>
