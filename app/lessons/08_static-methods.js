const title8 = '>>> STATIC METHODS:';
const subTitle8 = 'classes to hold methods rather than data';

class Calculator {
  static add(a,b) {
    return(a+b);
  }

  static subtract(a,b) {
    return(a-b);
  }
}

export {Calculator, title8, subTitle8};