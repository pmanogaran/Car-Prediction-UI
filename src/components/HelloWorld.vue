<template>
  <div class="hello">
    <div>
      <form novalidate class="md-layout" >
        <md-card class="md-layout-item md-size-50 md-small-size-100" style="margin: 0 auto; padding: 40px; max-width: 500px; min-width: 500px">
          <h1>Car Price Prediction</h1>
          <md-card-content>
            <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
                <md-field>
                  <label for="marke">Marke</label>
                  <md-select name="marke" id="marke" v-model="form.marke" md-dense :disabled="sending">
                    <md-option value="AUDI">Audi</md-option>
                    <md-option value="BMW">BMW</md-option>
                    <md-option value="VW">VW</md-option>
                    <md-option value="MERCEDES-BENZ">Mercedes-Benz</md-option>
                    <md-option value="VOLVO">Volvo</md-option>
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

          <md-card-actions style="justify-content: center">
            <md-button style="width: 100%; min-height: 50px" v-on:click="getPrediction()" class="md-raised md-accent" :disabled="sending">Analyze</md-button>
          </md-card-actions>
        </md-card>
      </form>
    </div>
    <div v-if="this.processFinished" style="margin-top: 40px">
      <span style="font-size: 20px">Estimated price</span>
      <h1 style="font-weight: bolder">{{estimatedPrice  | currency}}</h1>
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
        sending: false,
        estimatedPrice: 0,

        processFinished: false
      }
    },
    methods: {
      getPrediction() {
        this.sending = true;
        this.processFinished = false;
        // Instead of this timeout, here you can call your API
        this.$http.get("/api/rest/process/carpriceprediction_score?" +
          "datum=" + this.form.datum +
          "&pferdestaerke=" + this.form.pferdestaerke +
          "&getriebe=" + this.form.getriebe +
          "&treibstoff=" + this.form.treibstoff +
          "&marke=" + this.form.marke +
          "&kilometer=" + this.form.kilometer +
          "&modell=" + this.form.modell).then((res) => {
            console.log(res);
            this.sending = false;
            this.estimatedPrice = res.data['prediction(preis)'];
            this.processFinished = true;
        });
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
