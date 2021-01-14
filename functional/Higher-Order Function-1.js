// Higher-Order Function #01

function run(ot) {
    ot()
}

function sayHello(){
    console.log('Hello!!')
}

run(sayHello)

//Teste2

function opt(fn){
    fn()
}

function names(){
    console.log('Meu nome é Danilo!')
}

opt(names,sayHello)

