<template>
  <div class="card" style="width: 16rem">
    <img :src="car.photo" class="card-img-top" alt="car" />
    <div class="card-body">
      <h5 class="card-title">
        <strong>{{ car.brand }}</strong> <span>{{ car.model }}</span>
      </h5>
      <p class="card-text">{{ car.year }} km</p>
      <p class="card-text">{{ car.price }} TL</p>
      <div class="d-flex align-items-center" :class="btnCenter">
        <a v-if="isSetCart" class="btn btn-primary" @click="setCart(car)"
          >Sepete Ekle</a
        >
        <a v-if="isCarDetail" class="btn btn-primary" @click="carDetail(car)"
          >Detay</a
        >
        <a v-if="isDeleteCart" class="btn btn-primary" @click="deleteCart(car)"
          >Rezervasyondan Çıkar</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarCard",
  data() {
    return {};
  },
  props: {
    car: {
      type: Object,
    },
    isSetCart: {
      type: Boolean,
    },
    isCarDetail: {
      type: Boolean,
    },
    isDeleteCart: {
      type: Boolean,
    },
    isBtnCenter: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    btnCenter() {
      return this.isBtnCenter
        ? "justify-content-center"
        : "justify-content-between";
    },
  },
  methods: {
    setCart(item) {
      this.$emit("on-set-cart", item);
    },
    carDetail(item) {
      this.$emit("on-car-detail", item);
    },
    deleteCart(item) {
      this.$emit("on-delete-cart", item);
    },
  },
};
</script>

<style></style>
