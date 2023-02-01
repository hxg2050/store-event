## 安装

前往 [npm](https://www.npmjs.com/):

```sh
$ npm install store-event
```


状态管理 发布-订阅器
一个基于订阅/发布模式的状态管理器，可用于状态管理，或者事件管理
当作`事件管理`使用时
```js
// 创建一个管理器
const emitter = new Emitter();
// 监听jump事件
emitter.on('jump', ({ source }) => {
     console.log('触发jump事件', '传入了一个参数source:', source);
}, this);
// 发射事件，并传入参数
emitter.emit('jump', { source: 100 });
```
当作`状态管理`使用时
```js
// 创建状态管理器
const store = new Emitter();
// 设置数据
store.data('source', 100);
// 获取数据
console.log(store.data('source'));
// 监听数据变动，第一次就有数据
store.change('source', (data) => {
     cnosole.log('第一次会有数据', data);
}, this);
// 监听数据变动，第一次不会有数据
store.listen('source', (data) => {
     console.log('第一次不会有数据', data);
}, this);
// 改变数据
store.data('source', (data) => {
     return data ++;
});
```