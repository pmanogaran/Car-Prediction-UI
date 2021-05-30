<template>
  <div class="hello">
    <h1>Car Price Prediction</h1>
    <div>
      <form novalidate class="md-layout">
        <md-card class="md-layout-item md-size-50 md-small-size-100" style="margin: 0 auto">
          <md-card-content>
            <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
                <md-field>
                  <label for="marke">Marke</label>
                  <md-select name="marke" id="marke" v-model="form.marke" md-dense :disabled="sending">
                    <md-option value="Audi">Audi</md-option>
                    <md-option value="BMW">BMW</md-option>
                    <md-option value="VW">VW</md-option>
                    <md-option value="Mercedes-Benz">Mercedes-Benz</md-option>
                    <md-option value="Volvo">Volvo</md-option>
                  </md-select>
                </md-field>
              </div>
            </div>

            <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
                <md-field>
                  <label for="modell">Modell</label>
                  <md-input name="modell" id="modell" v-model="form.modell" :disabled="sending"/>
                </md-field>
              </div>
            </div>

            <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
                <md-field>
                  <label for="kilometer">Kilometer</label>
                  <md-input name="kilometer" id="kilometer" v-model="form.kilometer" :disabled="sending"/>
                </md-field>
              </div>
            </div>

            <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
                <md-field>
                  <label for="pferdestaerke">PS</label>
                  <md-input name="pferdestaerke" id="pferdestaerke" v-model="form.pferdestaerke" :disabled="sending"/>
                </md-field>
              </div>
            </div>

            <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
                <md-field>
                  <label for="datum">Datum</label>
                  <md-input name="datum" id="datum" v-model="form.datum" :disabled="sending"/>
                </md-field>
              </div>
            </div>

            <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
                <md-field>
                  <label for="treibstoff">Treibstoff</label>
                  <md-select name="treibstoff" id="treibstoff" v-model="form.treibstoff" md-dense :disabled="sending">
                    <md-option value="Benzin">Benzin</md-option>
                    <md-option value="Diesel">Diesel</md-option>
                    <md-option value="Elektro">Elektro</md-option>
                    <md-option value="Benzin/Elektro">Benzin/Elektro</md-option>
                    <md-option value="Hybrid Benzin/Elektro">Hybrid Benzin/Elektro</md-option>
                    <md-option value="Hybrid Diesel/Elektro">Hybrid Diesel/Elektro</md-option>
                  </md-select>
                </md-field>
              </div>
            </div>

            <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
                <md-field>
                  <label for="getriebe">Getriebe</label>
                  <md-select name="getriebe" id="getriebe" v-model="form.getriebe" md-dense :disabled="sending">
                    <md-option value="Automatikgetriebe">Automatikgetriebe</md-option>
                    <md-option value="Handschaltung">Handschaltung</md-option>
                  </md-select>
                </md-field>
              </div>
            </div>

          </md-card-content>

          <md-progress-bar md-mode="indeterminate" v-if="sending"/>

          <md-card-actions>
            <md-button type="submit" class="md-primary" :disabled="sending">Analyze</md-button>
          </md-card-actions>
        </md-card>

      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },
    data: function () {
      return {
        form: {
          marke: null,
          modell: null,
          kilometer: null,
          pferdestaerke: null,
          datum: null,
          treibstoff: null,
          getriebe: null,
        },
        userSaved: false,
        sending: false,
        lastUser: null
      }
    },
    methods: {
      clearForm() {
        this.form.firstName = null
        this.form.lastName = null
        this.form.age = null
        this.form.gender = null
        this.form.email = null
      },
      saveUser() {
        this.sending = true

        // Instead of this timeout, here you can call your API
        this.$http.post("http://DESKTOP-S0MEHG8:8080/api/rest/process/car_test_1_score?" ,{
          this.lastUser = `${this.form.firstName} ${this.form.lastName}`
          this.userSaved = true
          this.sending = false
          this.clearForm()
        }, 1500)
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
