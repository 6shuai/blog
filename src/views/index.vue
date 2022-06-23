<script setup>
    import { workList } from './workList'
</script>

<template>
    <div class="main-wrap">
        


        <h1>项目经历</h1>
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

        <div class="resume">
            <el-form label-width="80px">
                <el-form-item label="姓名">铁柱</el-form-item>
                <el-form-item label="手机号">15611755625</el-form-item>
                <el-form-item label="地址">北京</el-form-item>
                <el-form-item label="邮箱">245691516@qq.com</el-form-item>
                <el-form-item label="职位">前端开发</el-form-item>
            </el-form>

            <div class="skill">
                <h2>相关技能</h2>
                <p>熟练掌握语义化的 HTML 和具有兼容性的 CSS 模式，熟练手写符合 W3C 标准的结构和代码。</p>
                <p>对 可用性、可访问性、前端性能优化、最优实践 等有一定的了解和实践。</p>
                <p>对 HTML5 和 CSS3 有一定了解。</p>
                <p>熟练掌握 ST2 、Emmet、Sass 等等前端开发和团队协作工具。</p>
                <p>熟练掌握 jQuery，实现日常需要的交互效果。</p>
                <p>熟悉EXTJS，Nodejs，MySQl，有一定 PHP 后端相关知识。</p>
                <p>了解 Ajax 工作原理和实现方法。</p>
                <p>对前端canvas，svg有一定了解。</p>
                <p>了解手机前端开发jquerymobile，zeptojs及angularjs等。</p>
                <p>喜欢接触新事物，有一定的自学能力。</p>
            </div>
        </div>

    </div> 
</template>

<style lang="less">
    .main-wrap{
        width: 100%;
        background-image: linear-gradient(-225deg, #FFE29F 0%, #FFA99F 48%, #FF719A 100%);
        overflow: hidden;

        h1{
            text-align: center;
        }

        .resume, .content{
            max-width: 1200px;
            margin: 20px auto;
            border-radius: 12px;
            overflow: hidden;
        }

        .resume{
            border: 1px solid #dcdfe6;
            border-radius: 6px;
            padding: 20px 0;
            background: rgba(0, 0, 0, 0.3);
            color: #fff;

            .el-form-item__label{
                color: rgb(226, 216, 216);
            }

            .skill{
                padding: 20px;
            }
        }

        .content{
            background: #28df991f;
            margin-top: 20px;

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