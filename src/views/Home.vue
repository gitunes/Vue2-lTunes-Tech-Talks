<template>
  <div class="home">
    <Header @on-delete-car-cart="onDeleteCarCart($event)" />
    <CarList
      :gettersCarList="gettersCarList"
      @on-set-cart="onSetCart($event)"
      @on-car-detail="onCarDetail($event)"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import Header from "@/components/Header";
import CarList from "@/components/CarList";

export default {
  name: "Home",
  components: {
    Header,
    CarList,
  },
  computed: {
    ...mapGetters({
      gettersCarList: "cars/gettersCarList",
    }),
    // getCarList() {
    //   return this.$store.getters["cars/gettersCarList"];
    // },
  },
  mounted() {
    this.carList();
  },
  methods: {
    ...mapActions({
      getCarList: "cars/getCarList",
      setCarCart: "cars/setCarCart",
      setCarCartDelete: "cars/setCarCartDelete",
    }),
    async carList() {
      const res = await this.getCarList();
      console.log("res", res);
    },
    async onSetCart(item) {
      const res = await this.setCarCart(item);
      if (res.success) {
        this.$toasted.success("Araç sepete eklendi!", {
          position: "top-right",
          duration: 2000,
        });
      }
    },
    onCarDetail(item) {
      // this.$router.push({ name: 'Detail', query: { id: item.id }})
      console.log("item", item);
      this.$router.push({ name: "Detail", params: { id: item.id } });
    },
    onDeleteCarCart(item) {
      this.setCarCartDelete(item);
    },
  },
};
</script>
≠
