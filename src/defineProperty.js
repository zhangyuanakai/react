//对象本身的规则限制‘ 1、冻结、2、密封、3、

// Object.defineProperty()
1、设置对象中某个成员的规则
如果成员已经存在，则修改其规则，如果成员不存在，则新增这个成员，并设置个新值
object.defineProperty(obj,'x',{})



// 对象“成员”的规则限制
// Object.getOwnPropertyDescriptor(对象, 成员)获取对象中的某个成员的规则
// Object.getOwnPropertyDescriptors(对象):获取对象所有成员的规则
//
// 规则
//   configurable:是否可以删除
//   writable：是否可以更改
//   enumerable：是否可以枚举【可以被for、in或者Object.keys列举出来的属性是可枚举的】
//   value：成员值