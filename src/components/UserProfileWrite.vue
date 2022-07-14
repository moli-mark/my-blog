<template>
    <div class="card edit-field">
        <div class="card-body">
            <div class="mb-3">
            <label for="edit-post" class="form-label">编辑帖子</label>
            <textarea v-model="content" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            <button @click="submit_post" type="button" class="btn btn-primary btn-sm">发帖</button>
            </div>
        </div>
    </div>
</template>


<script>
import {ref} from 'vue';

export default{
    name:"UserProdileWrite",
    setup(props,context){
        let content=ref("");

        const submit_post=()=>{
            context.emit("submit_post",content.value);
            content.value="";
        }

        return{
            content:content,
            submit_post,
        }
    },

}
</script>

<style scoped>
.edit-field{
    margin-top: 20px;
}
button{
    margin-top:10px;
}
</style>