<template>
  <div class="main">
    <time-table :events="events" @eventClick="eventClick"></time-table>
  </div>
</template>

<script>
import TimeTable from "../../components/TimeTable/TimeTable.vue";
export default {
  components: {
    TimeTable
  },
  data() {
    return {
      events: []
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      let year = new Date().getFullYear();
      let month = new Date().getMonth();
      if (month < 9) {
        month = "0" + (month + 1);
      } else {
        month = month + 1;
      }
      let day = year+'-'+month;
      this.events = [
        {
          title: "书法",
          start: `${day}-03T07:30:00`,
          end: `${day}-03T09:00:00`,
        },
        {
          title: "舞蹈",
          start: `${day}-03T14:30:00`,
          end: `${day}-03T16:00:00`,
        },
        {
          title: "篮球",
          start: `${day}-03T19:30:00`,
          end: `${day}-03T21:00:00`,
        },
        {
          title: "吉他",
          start: `${day}-13T14:30:00`,
          end: `${day}-13T16:00:00`,
        },
        {
          title: "吉他",
          start: `${day}-23T14:30:00`,
          end: `${day}-23T16:00:00`,
        },
        {
          title: "吉他",
          start: `${day}-08T14:30:00`,
          end: `${day}-08T16:00:00`,
        },
        {
          title: "吉他",
          start: `${day}-18T14:30:00`,
          end: `${day}-18T16:00:00`,
        },
        {
          title: "JAVA",
          start: `${day}-13T10:30:00`,
          end: `${day}-13T12:00:00`,
        },
        {
          title: "小提琴",
          start: `${day}-11T10:30:00`,
          end: `${day}-11T12:00:00`,
        },
      ];
      console.log(this.events);
    },
    eventClick() {}
  }
};
</script>

<style scoped>
/* //用什么插件必须引入相应的样式表，否则不能正常显示 */
@import "~@fullcalendar/core/main.css";
@import "~@fullcalendar/daygrid/main.css";
@import "~@fullcalendar/timegrid/main.css";
</style>