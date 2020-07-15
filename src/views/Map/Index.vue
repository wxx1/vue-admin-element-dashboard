<template>
    <div class="main">
        <div id="map"></div>
    </div>
</template>

<script>
import "ol/ol.css";
import { View } from "ol";
import { defaults as defaultControls } from "ol/control";
import Tile from "ol/layer/Tile";
import { fromLonLat } from "ol/proj";
import OSM from "ol/source/OSM";


import {createMap} from '@/utils/map'
export default {
    mounted(){
        this.init()
    },
    methods:{
        //初始化地图
        init(){
            let titleLayer = [
                  new Tile({
                    source: new OSM()
                })
            ]
            let view = new View({
                center: fromLonLat([104.912777, 34.730746]), //地图中心坐标
                zoom: 0
            })
            console.log(createMap(titleLayer,view))
        }
    }
}
</script>

<style scoped>
.main, #map{
    height: 100%;
    width: 95%;
    margin:0 auto;
    
}
</style>