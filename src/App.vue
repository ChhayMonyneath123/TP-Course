<template>
    <div class="container">
        <div class="block1">
            <Category v-for="(category, index) in category" :key="index" :image="category.image" :name="category.name"
                :product-count="category.productCount" :color="category.color" />
        </div>
        <div class="block2">
            <Promotion v-for="(promotion, index1) in promotion" :key="index1" :image="promotion.image"
                :title="promotion.title" :color="promotion.color" />
        </div>
    </div>
</template>
<script>

import Category from './components/category.vue';
import Promotion from './components/promotion.vue';
    // tp02
import axios from 'axios';

export default {
    name: 'App',
    components: {
        Category,
        Promotion
    },
    data() {
        return {
            // tp02
            category: [],
            promotion: []
        };
    },
    // tp02
    mounted() {
        axios.get('http://localhost:3000/api/categories')
            .then(response => {
                this.category = response.data;
            })
            .catch(error => {
                console.error("Error fetching categories:", error.response ? error.response.data : error.message);
            });
        
        axios.get('http://localhost:3000/api/promotions')
            .then(response => {
                this.promotion = response.data;
            })
            .catch(error => {
                console.error("Error fetching promotions:", error.response ? error.response.data : error.message);
            });
    }


};


</script>

<style>
.container {
    width: 100vw;
    height: 100vh;
    padding: 10px;

}

.block1 {

    display: flex;
    justify-content: space-between;
    gap: 10px;
    width: 100%;
    height: 20%;
    padding: 10px;

}

.block2 {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 59%;
    padding: 10px;

}
</style>
