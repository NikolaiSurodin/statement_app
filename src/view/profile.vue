<template>
  <div>
    <div class="popup_wrapper">
      <div class='popup'>
        <div class="header-content">
          <div class="page-title">
            <h3>Профиль</h3>
          </div>
        </div>
        <div class="popup__header">
          <slot></slot>
        </div>
        <div class="popup__content">
          <v-select
              label="Language"
              :items="locales"
              v-model="currentLocale"
              @input="setLocale"
          ></v-select>
          <div>
            <form class="form">
              <div class="input-field">
                <v-text-field
                    label="Имя"
                >Name
                </v-text-field>
              </div>
              <v-btn type="submit">
                Обновить
                <i class="material-icons right">send</i>
              </v-btn>
            </form>
          </div>
        </div>
        <div class="popup__footer">
          <div class="container">
            <div class="bt">
              <v-btn color="success" @click="closeProfile"
              > OK
              </v-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import  ru  from "@/locales/ru"
import en from "dayspan-vuetify/src/locales/en"
import * as  moment from 'moment'

export default {
  name: "profile",
  data() {
    return {
      locales:[
        {value:'ru', text:'Russian'},
        {value:'en', text:'English'}
      ],
      currentLocale:this.$dayspan.currentLocale
    }
  },
  methods: {
    closeProfile() {
      this.$emit('closeProfileInfo')
    },
    setLocale(code){
      moment.locale('ru')
      this.$dayspan.setLocale(code);
      this.$refs.app.$forceUpdate();
      console.log(moment.locale('ru'))
    }
  }

}
</script>

<style scoped>
.popup_wrapper {
  background: rgba(64, 64, 64, .4);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
}

.popup {
  padding: 150px;
  position: center;
  top: 500px;
  width: 700px;
  background: whitesmoke;
  box-shadow: 0 0 17px 0 #e7e7e7;
  z-index: 10;
}

.popup__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.popup__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.popup__content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.header-content {
  text-align: center;
}

.bt {
  margin-top: 20px;
  margin-left: 120px;
}
</style>