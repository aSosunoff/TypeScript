function LogClass(constructor: Function) {
    console.log(constructor);
}

@LogClass
class ComponentTest {
}