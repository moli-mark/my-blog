<template>
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-3">
                    <!-- img-fluid使头像自适应大小 -->
                    <img class="img-fluid" src="https://cdn.acwing.com/media/user/profile/photo/152078_lg_fee4c00974.jpg" alt="">
                </div>
                <div class="col-9">
                    <div class="username">{{fullName}}</div>
                    <div class="fans">粉丝：{{user.followersCount}}</div>
                    <button @click="follow" v-if="!user.is_followed" type="button" class="btn btn-secondary">+关注</button>
                    <button @click="unfollow" v-if="user.is_followed" type="button" class="btn btn-secondary">取消关注</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from '@vue/runtime-core';

export default {
    name:"UserProfileInfo",
    props:{
        user:{
            type:Object,
            required:true,
        }
    },
    setup:(props,context)=>{
        let fullName=computed(()=>props.user.lastName+' '+props.user.firstName);
    
        const follow=()=>{
            context.emit("follow");
        }

        const unfollow=()=>{
            context.emit("unfollow");
        }

        return{
            fullName:fullName,
            follow,
            unfollow,
        }
    }
}
</script>

<style scoped>
/** 头像变圆形 */
img{
    border-radius:50%;
}

.username{
    font-weight: bold;
}

.fans{
    font-size:12px;
    color:gray;
}

button{
    padding:2px 4px;
    font-size:12px;
}
</style>