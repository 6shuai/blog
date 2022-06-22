<script setup>
    import { workList } from './workList'
</script>

<template>
    <div class="main-wrap">
        <div class="content">
            <el-scrollbar>
                <el-row class="work-list">
                    <el-col :xs="24" :sm="12" :lg="8" v-for="(item, index) in workList" :key="index">
                        <el-card class="item">
                            <div class="work-img">
                                <el-image fit="cover" :src="item.images[0]" :preview-src-list="item.images" :preview-teleported="true"></el-image>
                            </div>
                            <div class="detail">
                                <p class="title">{{ item.title }}
                                    <a 
                                        v-if="item.link" 
                                        :href="item.link" 
                                        class="link"
                                        target="__blank"
                                    ></a>
                                </p>
                                <p class="desc">{{ item.desc }}</p>
                                <p class="stack">
                                    <el-tag size="small" v-for="(t, tIndex) in item.stack" :key="tIndex">{{ t }}</el-tag>
                                </p>
                            </div>
                        </el-card>
                    </el-col>

                </el-row>
            </el-scrollbar>
        </div>
    </div> 
</template>

<style lang="less">
    .main-wrap{
        width: 100%;
        height: 100%;
        background-image: linear-gradient(-225deg, #FFE29F 0%, #FFA99F 48%, #FF719A 100%);
        overflow: hidden;

        .content{
            max-width: 1200px;
            margin: 20px auto;
            background: #28df991f;
            border-radius: 12px;
            overflow: hidden;

            .el-scrollbar{
                width: 100%;
                height: calc(100vh - 80px);
                margin: 10px 0;
                overflow-x: hidden;
            }

            .work-list{

                .item{
                    margin: 20px;
                    cursor: pointer;
    
                    .el-card__body{
                        padding: 0;
                    }

                    .work-img{
                        width: 100%;
                        height: 180px;
                        overflow: hidden;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background: #0000001f;

                        .el-image{
                            transition: all .3s;
                        }

                        &:hover{
                            .el-image{
                                transform: scale(1.1);
                            }
                        }
                    }

                    .detail{
                        padding: 0 12px;

                        .title{
                            line-height: 20px;

                            .link{
                                display: inline-block;
                                width: 16px;
                                height: 16px;
                                background: url(../assets/link.png) center no-repeat;
                                background-size: 100%;
                                vertical-align: top;
                            }
                        }


                        .desc{
                            font-size: 12px;
                            color: #555574;
                        }

                        .stack .el-tag{
                            margin-right: 5px;
                        }
                    }
                }
            }

        }
    }
</style>