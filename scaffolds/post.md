---
title: {{ title }}
date: {{ date }}
author: 闲花手札 # 文章作者
img: /source/images/xxx.jpg    # 文章特征图
top: false # 推荐文章（文章是否置顶），如果 top 值为 true，则会作为首页推荐文章
cover: false    # 表示该文章是否需要加入到首页轮播封面中
coverImg: /images/1.jpg    # 表示该文章在首页轮播封面需要显示的图片路径，如果没有，则默认使用文章的特色图片
password: # 文章阅读密码，如果要对文章设置阅读验证密码的话，就可以设置 password 的值，该值必须是用 SHA256(http://www.jsons.cn/sha/) 加密后的密码，防止被他人识破
toc: true    # 是否开启 TOC(目录)，可以针对某篇文章单独关闭 TOC 的功能。前提是在主题的 config.yml 中激活了 toc 选项
mathjax: false    # 是否开启数学公式支持 ，本文章是否开启 mathjax
summary: # 这是你自定义的文章摘要内容，如果这个属性有值，文章卡片摘要就显示这段文字，否则程序会自动截取文章的部分内容作为摘要
categories: 工具 # 文章分类，本主题的分类表示宏观上大的分类，只建议一篇文章一个分类
tags: # 文章标签，一篇文章可以多个标签
  - blog
  - hexo
keywords: Hexo # 关键词
essay: false # 是否为随笔
---