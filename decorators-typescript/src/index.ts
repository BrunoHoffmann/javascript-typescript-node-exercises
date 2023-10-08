function split(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    // Atribuição via desestruturação
    // (destructuring assignment)
    let [arg] = args;
    arg = arg.split("");
    originalMethod.apply(this, [arg]);
  };
}

function reverse(target: any, name: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    let [arg] = args;
    arg = arg.reverse();
    originalMethod.apply(this, [arg]);
  };
}

function join(char: string) {
  return function (target: any, name: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      let [arg] = args;
      arg = arg.join(char);
      originalMethod.apply(this, [arg]);
    };
  };
}

class StringManager {
  @split
  @reverse
  @join("_")
  print(str: string) {
    console.log(str);
  }
}

const classStringManager = new StringManager();

classStringManager.print("hello");
