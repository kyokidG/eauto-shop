<template>
    <el-col :xs="22" :lg="22" class="pl-4 pr-4 mt-4" style="margin-top: 100px; !important0">
        <h4 class="text-muted font-italic mt-3 text-center">Choose a car to compare</h4>
        <hr>
        <div v-if="this.$props.cars.length > 0" class="fav-cars-container">
            <h6>Select from your favourites cars</h6>
            <div class="p-2 text-left" style="max-height: 30vh;overflow-y: scroll;">
                <!-- Pentru fiecare masina din favoritesCars afisez un <el-card></el-card> -->
                <!-- In fiecare el-card am un el-button -->
                <!-- Cand se da click pe oricare el-button se apeleaza functia selectCar(car)-->
                <!-- -->
                <el-card class="mt-1 mb-1 pr-2 pl-2 pt-1 pb-1" shadow="hover" v-for="car in this.$props.cars" v-bind="car['carID']">
                    <i v-if="favouriteCarsIDs.includes(car['carID'])" class="el-icon-star-on mr-2" style="color: #f7ba2a;"></i>{{car['make']}} {{car['model']}}
                    <el-button type="text" class="button mr-4" @click="selectCar(car)" style="float: right;padding:0;">
                    Compare
                    </el-button>
                </el-card>
            </div>
        </div>

        <div v-if="this.$props.allCars.length > 0">
            <h6 class="mt-3 text-center"><span>or </span> search our database</h6>
            <br>
            <div class="panel panel-default">
                <el-input placeholder="Type a car make ..." prefix-icon="el-icon-search" class="mb-2" @keydown.native="search">
                <template slot="prepend">Search by make ...</template>
                </el-input>

                <div class="panel-body">
                <el-table :data="this.$props.allCars" border stripe highlight-current-row height="35vh" style="width: 100%">

                    <el-table-column prop="make" label="Make" show-overflow-tooltip min-width="30" width="auto">
                    <template slot-scope="scope">
                        <span v-html="scope.row['make']"></span>
                    </template>
                    </el-table-column>

                    <el-table-column prop="model" label="Model" show-overflow-tooltip min-width="30" width="auto">
                    <template slot-scope="scope">
                        <span v-html="scope.row['model']"></span>
                    </template>
                    </el-table-column>

                    <el-table-column prop="model" label="Price" show-overflow-tooltip min-width="30" width="auto">
                    <template slot-scope="scope">
                        <span v-html="scope.row['newPrice']"></span>
                    </template>
                    </el-table-column>

                    <el-table-column prop="model" label="Torque" show-overflow-tooltip min-width="30" width="auto">
                    <template slot-scope="scope">
                        <span v-html="scope.row['torque']"></span>
                    </template>
                    </el-table-column>

                    <el-table-column :label="''" width="140" fixed="right">
                    <template slot-scope="scope">
                        <div class="operation-area">
                            <el-button type="text" class="button mr-4" @click="selectCar(scope.row)" style="float: right;padding:0;">
                                <i class="el-icon-menu mr-3"></i>Compare
                            </el-button>
                        </div>
                    </template>
                    </el-table-column>
                </el-table>
                </div>
            </div>
        </div>
    </el-col>
</template>

<script>

import {mapState, mapActions} from 'vuex'
export default {
  name: 'ChooseCar',

  data () {
    return {
      eco: true,
      favouriteCarsIDs: (JSON.parse(localStorage.getItem('favoritesList')) || []).map(el => { return el.carID })
    }
  },
  props: ['cars', 'allCars'],

  components: {

  },
  mounted() {
      //console.log(this.$props.cars);
  },
    methods: {
        selectCar(car) {
            this.$emit('select', car)
        }
    }
}
</script>

<style lang="scss" scoped>
@import "./../../assets/scss/variables.scss";
@import "./../../assets/scss/mixins.scss";
.hidden-card .el-card__body {
  padding: 0;
}
.el-card__body {
  padding: 20px;
  cursor: pointer;
}
  .el-card:hover {
    button {
      display: inline;
	-webkit-animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
	        animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
    }
  }
th {
    font-weight: 600;
}
.fav-cars-container {
    .el-card {
    button {
      display: none;
    }
    .el-card__body {
      font-weight: 400;
    }
  }

  .el-card:hover {
    button {
      display: inline;
	-webkit-animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
	        animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
    }
    .el-card__body {
      font-weight: 600;
    }
  }
  button:hover {
    font-weight: 500;
    color: dodgerblue;
  }
}

/* ----------------------------------------------
 * Generated by Animista on 2019-4-18 6:59:20
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation tracking-in-expand
 * ----------------------------------------
 */
@-webkit-keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}
@keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}




  /* ----------------------------------------------
 * Generated by Animista on 2019-4-15 2:42:5
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

  /**
 * ----------------------------------------
 * animation jello-diagonal-1
 * ----------------------------------------
 */
  @-webkit-keyframes jello-diagonal-1 {
    0% {
      -webkit-transform: skew(0deg 0deg);
      transform: skew(0deg 0deg);
    }

    30% {
      -webkit-transform: skew(25deg 25deg);
      transform: skew(25deg 25deg);
    }

    40% {
      -webkit-transform: skew(-15deg, -15deg);
      transform: skew(-15deg, -15deg);
    }

    50% {
      -webkit-transform: skew(15deg, 15deg);
      transform: skew(15deg, 15deg);
    }

    65% {
      -webkit-transform: skew(-5deg, -5deg);
      transform: skew(-5deg, -5deg);
    }

    75% {
      -webkit-transform: skew(5deg, 5deg);
      transform: skew(5deg, 5deg);
    }

    100% {
      -webkit-transform: skew(0deg 0deg);
      transform: skew(0deg 0deg);
    }
  }

  @keyframes jello-diagonal-1 {
    0% {
      -webkit-transform: skew(0deg 0deg);
      transform: skew(0deg 0deg);
    }

    30% {
      -webkit-transform: skew(25deg 25deg);
      transform: skew(25deg 25deg);
    }

    40% {
      -webkit-transform: skew(-15deg, -15deg);
      transform: skew(-15deg, -15deg);
    }

    50% {
      -webkit-transform: skew(15deg, 15deg);
      transform: skew(15deg, 15deg);
    }

    65% {
      -webkit-transform: skew(-5deg, -5deg);
      transform: skew(-5deg, -5deg);
    }

    75% {
      -webkit-transform: skew(5deg, 5deg);
      transform: skew(5deg, 5deg);
    }

    100% {
      -webkit-transform: skew(0deg 0deg);
      transform: skew(0deg 0deg);
    }
  }


  /* ----------------------------------------------
 * Generated by Animista on 2019-4-15 2:40:49
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

  /**
 * ----------------------------------------
 * animation vibrate-1
 * ----------------------------------------
 */
  @-webkit-keyframes vibrate-1 {
    0% {
      -webkit-transform: translate(0);
      transform: translate(0);
    }

    20% {
      -webkit-transform: translate(-0.5px, 0.5px);
      transform: translate(-0.5px, 0.5px);
    }

    40% {
      -webkit-transform: translate(-0.5px, -0.5px);
      transform: translate(-0.5px, -0.5px);
    }

    60% {
      -webkit-transform: translate(0.5px, 0.5px);
      transform: translate(0.5px, 0.5px);
    }

    80% {
      -webkit-transform: translate(0.5px, -0.5px);
      transform: translate(0.5px, -0.5px);
    }

    100% {
      -webkit-transform: translate(0);
      transform: translate(0);
    }
  }

  @keyframes vibrate-1 {
    0% {
      -webkit-transform: translate(0);
      transform: translate(0);
    }

    20% {
      -webkit-transform: translate(-0.5px, 0.5px);
      transform: translate(-0.5px, 0.5px);
    }

    40% {
      -webkit-transform: translate(-0.5px, -0.5px);
      transform: translate(-0.5px, -0.5px);
    }

    60% {
      -webkit-transform: translate(0.5px, 0.5px);
      transform: translate(0.5px, 0.5px);
    }

    80% {
      -webkit-transform: translate(0.5px, -0.5px);
      transform: translate(0.5px, -0.5px);
    }

    100% {
      -webkit-transform: translate(0);
      transform: translate(0);
    }
  }
</style>
