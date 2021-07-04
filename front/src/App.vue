<template>
    <!-- <div>
        <div> Likes counter:  <strong>   {{likes}} </strong></div>
            <div>
                <button v-on:click="addlIke">Like</button>
            </div>
        <div> Dislike counter:  <strong>   {{dislikes}}</strong></div>
            <div>
                <button @click="addDislike">Dislike</button>
            </div>
    </div> -->
    <div>
        <div class="post">
            <div><strong>Name: </strong> Posts</div>
            <div><strong>Description: </strong> Description</div>
        </div>

        <div class="post">
            <div><strong>Name: </strong> Posts</div>
            <div><strong>Description: </strong> Description</div>
        </div>

        <div class="post">
            <div><strong>Name: </strong> Posts</div>
            <div><strong>Description: </strong> Description</div>
        </div>

    </div>
</template>


<script>
/*export default {
    data() {
        return {
            likes: 0,
            dislikes: 0
        }
    },
    methods: {
        addlIke () {
            this.likes += 1;
        },
        addDislike () {
            this.dislikes += 1;
    }
  }
}*/

export default {
    data()  {
        return {
            posts: []
        }
    }
}
</script>












<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.post {
    border: 15px;
    border: 2px solid teal;
    margin-top: 15px;
}


</style>

