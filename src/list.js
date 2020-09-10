const CreateNode = (value) =>{
    return {
        data:value,
        next:null
    }
}

const CreateList = (value) =>{
    return CreateNode(value);
}
const appendList = (list,value)=>{
    const node = CreateNode(value)
    while(list.next){
        list=list.next
    }
    list.next = node
    return node
}
const removeFromList =(list,node)=>{
    //debugger;可以查看程序足迹
    let x = list;
    let p = null;
    while (x!==node){
     p = x
     x = x.next
    }
    p.next = x.next;

}
let travelList = (list,fn)=>{
    let x= list;
    while(x!==null){
     fn(x);
      x = x.next;
     
    }
}
let list = CreateList(10);
let node1 = appendList(list,20)
let node2 = appendList(list,30)
let node3 = appendList(list,40)
removeFromList(list,node2);
travelList(list,node=>{
    console.log(node.data);
})
console.log('list')
console.log(list)
console.log('node1')
console.log(node1)
console.log('node2')
console.log(node2)
console.log('node3')
console.log(node3)
