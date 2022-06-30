<template>
  <q-page dir="rtl" class="orderContainer">
    <div class="ordersTitle"><h4>لیست سفارشات</h4></div>

    <div class="q-pa-md">
      <q-table :rows="rows" :columns="columns" row-key="name" />
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";

const columns = [
  {
    name: "name",
    required: true,
    label: "نام سفارش",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "calories",
    align: "center",
    label: "دسته بندی",
    field: "calories",
    sortable: true,
  },
  { name: "fat", label: "قیمت", field: "fat", sortable: true },
  { name: "carbs", label: "تاریخ", field: "carbs" },
];

const rows = [];

export default defineComponent({
  name: "orderList",

  setup() {
    return {
      tab: ref("mails"),
      columns,
      rows,
    };
  },
});
</script>

<style scoped>
.orderContainer {
  font-family: "mikhakMedium";
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 0%;
}
.ordersTitle {
  margin-right: 10%;
}
</style>
