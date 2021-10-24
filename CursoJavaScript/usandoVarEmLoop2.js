const fucs = []

for(var i = 0;i < 10; i++){
    fucs.push(function(){
        console.log(i)
    })
}

fucs[2]()
fucs[8]()
