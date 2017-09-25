# 基于graphql和koa实现的简单server-demo

## 介绍
> 这是一个用graphql和koa实现的一个简单demo，是在学习了graphql和koa后简单的实现一把。供以后参考使用

## 安装

```
1.
git clone https://github.com/foora/graphql-easy-demo.git

2.
npm install  
or 
yarn install
```

## 启动
```
npm run server
```

## 使用
```
curl -XPOST -d "graphqlStr={count item(id: 4){id name price}}" http://localhost:3000/graphql
// {"data":{"count":1,"item":{"id":4,"name":"item4","price":"20.00"}}}

curl -XPOST -d "graphqlStr=mutation rootMutationType{updateCount}" http://localhost:3000/graphql
// {"data":{"updateCount":2}}

curl -XPOST -d "graphqlStr={count item(id: 4){id name price}}" http://localhost:3000/graphql
// {"data":{"count":2,"item":{"id":4,"name":"item4","price":"20.00"}}}
```