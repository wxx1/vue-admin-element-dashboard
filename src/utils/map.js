
/**
 * 将openlayers构建地图容器的对象单独封装，可动态传入layer和view
 */
import { Map } from "ol";


export function createMap(layer, view){
    let map = new Map({
        target: 'map', //绑定DOM元素进行渲染
        layers: layer, //配置地图数据源
        view:view //配置地图显示的options配置（）
    })
    return map;
}