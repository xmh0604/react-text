// import React from "react";
// import ReactDom from "react-dom";

// // 命令式
// const title = React.createElement('ul',{
//     title : '我是标题',
//     className : 'ul'
// },React.createElement('li',{
//     className : 'first'
// },'香蕉'),
// React.createElement('li',{
//     className : 'second'
// },'苹果'),
// React.createElement('li',{
//     className : 'third'
// },'橘子'))

// ReactDom.render(title,document.getElementById('root'))

// const box =React.createElement('box',{
//     className : 'demo',
//     id : 'box'
// },'这是一个盒子')
// ReactDom.render(box, document.querySelector('#root'))

// JSX -js写xml结构
// 声明式
// import ReactDom from "react-dom";

// const title = <h1 title='AHA'>我今天是傻瓜</h1>

// ReactDom.render(title,document.querySelector('#root'))

import ReactDom from 'react-dom'

const sayHi = () => {
  return '你好'
}

const title = (
  <>
    <h1>阿里腾讯字节跳动</h1>
    <ul className="dadada">
      <li>你是谁</li>
      <li>我是谁</li>
      <li>他又是谁</li>
    </ul>
    <div>{sayHi()}</div>
  </>
)

ReactDom.render(title, document.querySelector('#root'))

//函数也可以放在{}中,不能直接渲染,但是在将来可以作为一个事件处理程序
//条件渲染,在react中,一切都是js,所以条件渲染完全是通过js控制的
const isLoading = false
const loadData = () => {
  if (isLoading) {
    return <h1>数据加载中...</h1>
  } else {
    return <h1>数据加载完成</h1>
  }
}
const title2 = <div>条件渲染:{loadData()}</div>

const loadData1 = () => {
  return isLoading ? <h1>数据加载完成</h1> : <h1>数据加载中...</h1>
}
const title1 = <div>条件渲染:{loadData1()}</div>

const loadData2 = () => {
  return isLoading && <h1>数据加载完成</h1>
}

const title3 = <div>条件渲染:{loadData2()}</div>

const songs = [
  { id: 1, name: '痴心绝对' },
  { id: 2, name: '像我这样的人' },
  { id: 3, name: '南山南' },
  { id: 4, name: '痴心绝对' },
  { id: 5, name: '像我这样的人' },
  { id: 6, name: '南山南' },
  { id: 11, name: '痴心绝对' },
  { id: 42, name: '像我这样的人' },
  { id: 433, name: '南山南' },
  { id: 431, name: '南山南' },
  { id: 233, name: '南山南' },
  { id: 115, name: '像我这样的人' },
  { id: 126, name: '南山南' },
]

const dv = (
  <div>
    <ul>
      {songs.map((song) => (
        <li key={song.id}>{song.name}</li>
      ))}
    </ul>
  </div>
)
