<template>
  <Content>
    <div class="row">
      <div class="col-3">
        <!-- 传给子组件数据和函数 -->
        <UserProfileInfo @follow="follow" @unfollow="unfollow" v-bind:user="user"></UserProfileInfo>
        <UserProfileWrite @submit_post="submit_post"></UserProfileWrite>
      </div>
      <div class="col-9">
        <UserProfilePosts :posts="posts"></UserProfilePosts>
      </div>
    </div>
  </Content>
</template>

<script>
import { reactive } from '@vue/reactivity';
import Content from '../components/Content';
import UserProfileInfo from '../components/UserProfileInfo';
import UserProfilePosts from '../components/UserProfilePosts.vue';
import UserProfileWrite from '../components/UserProfileWrite.vue';

export default {
  name: 'UserProfile',
  components: {
    Content,
    UserProfileInfo,
    UserProfilePosts,
    UserProfileWrite,
  },
  setup:()=>{
    const user=reactive({
      id:1,
      username:"Zhiyuan Zeng",
      lastName:"Zeng",
      firstName:"Zhiyuan",
      followersCount:0,
      is_followed:false,
    });

    const posts=reactive({
      count:3,
      posts:[
        {
          id:1,
          userId:1,
          content:"今天是晴天",
        },
        {
          id:2,
          userId:1,
          content:"今天是阴天",
        },
        {
          id:3,
          userId:1,
          content:"今天是今天",
        },
        {
          id:4,
          userId:1,
          content:"今天是雨天",
        },
      ]
    });

    const follow=()=>{
      if(user.is_followed)return;
      user.is_followed=true;
      user.followersCount++;
    }

    const unfollow=()=>{
      if(!user.is_followed)return;
      user.is_followed=false;
      user.followersCount--;
    }

    const submit_post=(content)=>{
      posts.count++;
      //push:在后面加入，unshift：在前面加入
      posts.posts.unshift({
        id:posts.count,
        userId:1,
        content:content,
      })
    }

    //return之后就能在template中用了
    return{
      user:user,
      follow,
      unfollow,
      posts,
      submit_post,
    }
  }
}
</script>

<style scoped>

</style>
