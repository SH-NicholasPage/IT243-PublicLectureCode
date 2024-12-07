<template>
  <Event/>
</template>

<script>
import Event from "@/components/Event.vue";

const eventData = [
{
    id: 1,
    name: "Graduation",
    details: "wooohoo!!!",
    date: "2025-06-02",
    background: "#F34949",
  },
  {
    id: 2,
    name: "Holidays",
    details: "Break time!",
    date: "2024-12-24",
    background: "#f9f970",
  },
  {
    id: 3,
    name: "Birthday",
    details: "My birthday party",
    date: "2025-01-08",
    background: "#F07AEC",
  },
  {
    id: 4,
    name: "Next Christmas",
    details: "ho ho ho",
    date: "2025-12-25",
    background: "#165b33",
  },
  {
    id: 5,
    name: "Thanksgiving",
    details: "Turkey time",
    date: "2024-11-28",
    background: "#EB9A0F",
  },
  {
    id: 6,
    name: "Conference Talk",
    details: "dont flop",
    date: "2025-02-28",
    background: "#68EE94",
  },
];

export default {
  components: {
    Event
  }
};
</script>

<style scoped>

</style>