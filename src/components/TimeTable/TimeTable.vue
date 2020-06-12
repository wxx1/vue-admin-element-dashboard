<template>
<!-- defaultView: 默认视图（dayGridMonth月视图） -->
  <FullCalendar
    defaultView="dayGridMonth"
    :events="events"
    :plugins="calendarPlugins"
    :weekends="true"
    :allDaySlot="false"
    eventLimit="3"
    height="auto"
    slotDuration="00:30:00"
    :minTime="minTime"
    :maxTime="maxTime"
    :timeGridEventMinHeight="auto"
    locale="zh-cn"
    :header="header"
    :buttonText="buttonText"
    eventTextColor="#fff"
    eventBackgroundColor="#00bcd4"
    eventBorderColor="#00bcd4"
    navLinks="true"
    nowIndicator="true"
    @eventClick="eventClick"
  ></FullCalendar>
</template>

<script>
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; //点击日历触发的事件

export default {
  components: {
    FullCalendar //
  },
  props: {
    //事件
    events: {
      type: Array,
      required: true,
      default: () => []
    },
    //每天开始时间
    minTime:{
        type:String,
        required:false,
        default: "07:00:00"
    },
    //每天结束时间
    maxTime: {
        type:String,
        required: false,
        default: "22:00:00"
    }
  },
  data() {
    return {
      calendarPlugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      header: {
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
      },
      buttonText: {
        today: "今天",
        month: "月",
        week: "周",
        day: "天"
      }
    };
  },
  methods: {
    //@dateClick="handleDateClick"
    //点击日期
    handleDateClick(info) {
      console.log(info.event);
    },
    //点击事件查看详情
    eventClick(info) {
      this.$emit("eventClick", info);
    },
    
    
  }
};
</script>