

function ListNode(val){
    this.val = val;
    this.next = null;
}

function add(array){
    var list = []
    for(var i=0; i<array.length; i++){
        list[i] = new ListNode(array[i])
    }
    for(var j=0; j<list.length-1; j++){
        list[j].next = list[j+1]
    }
    return list;
}


var l1 = add([2,4,6,9])[0]
var l2 = add([5,6,4,0,12,29])[0]

function addTwoNumbers(l1, l2){
    var arr = (function(l1, l2){
        var arr = [[],[]]
        arr[0].push(l1.val)
        while(l1.next !== null){
            l1 = l1.next
            arr[0].push(l1.val)
        }
        arr[1].push(l2.val)
        while(l2.next !== null){
            l2 = l2.next
            arr[1].push(l2.val)
        }
        return arr
    })(l1, l2)
    var sum = []
    if(arr[0].length === arr[1].length){
        for(let i = 0; i<arr[0].length; i++){
            sum[i] = arr[0][i] + arr[1][i]
        }
    }else if(arr[0].length > arr[1].length){
        for(let i = 0; i<arr[1].length; i++){
            sum[i] = arr[0][i] + arr[1][i]
        }
        for(let i = arr[1].length; i<arr[0].length; i++){
            sum[i] = arr[0][i]
        }
    }else{
        for(let i = 0; i<arr[0].length; i++){
            sum[i] = arr[0][i] + arr[1][i]
        }
        for(let i = arr[0].length; i<arr[1].length; i++){
            sum[i] = arr[1][i]
        }
    }

    for(let i = 0, len = sum.length; i<len; i++){
        if(sum[i]>=10 && i<len-1){
            sum[i] %= 10
            sum[i+1]++
        }else if(sum[i]>=10 && i === len -1){
            sum[i] %= 10
            sum[i + 1] = 1
        }
    }
    var l3 = []
    for(let i=0; i<sum.length; i++){
        l3[i] = new ListNode(sum[i])
    }
    for(let j=0; j<l3.length-1; j++){
        l3[j].next = l3[j+1]
    }
    l3 = l3[0]
    return l3
}

console.log(addTwoNumbers(l1, l2))


var addTwoNumbers = function(l1, l2, flag) {
    var sum = l1.val + l2.val + (flag || 0)
    var l3 = new ListNode(sum%10)
    var newFlag = sum>=10 ? 1 : 0
    if(newFlag || l1.next !== null || l2.next !== null){
        l3.next = arguments.callee(l1.next || new ListNode(0), l2.next || new ListNode(0), newFlag)
    }
    return l3
}

console.log(addTwoNumbers(l1,l2))
