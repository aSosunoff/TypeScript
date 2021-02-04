type ConvertType = {
  <T, K>(obj: T, callback: () => K): {
    name: string;
    age: number;
  } & {
    [key in keyof T]: T[key];
  } &
    {
      [key in keyof K]: K[key];
    };
};

const convert: ConvertType = (obj, callback) => {
  return {
    ...callback(),
    ...obj,
    name: "Alex",
    age: 30,
  };
};

const res = convert(
  {
    label: "Title",
  },
  () => ({
    n: 1,
    a: 2,
  })
);

console.log(res.name);
console.log(res.age);
console.log(res.label);
console.log(res.n);
console.log(res.a);

/* **************** */

/* type ConvertType = {
  <T, K>(obj: T, callback: () => K): {
    name: string;
    age: number;
  } & {
    [key in keyof T]: T[key];
  } &
    {
      [key in keyof K]: K[key];
    };
};

const convert: ConvertType = (obj, callback) => {
  return {
    ...callback(),
    ...obj,
    name: "Alex",
    age: 30,
  };
};

const res = convert(
  {
    label: "Title",
  },
  () => ({
    n: 1,
    a: 2,
  })
);

console.log(res.name);
console.log(res.age);
console.log(res.label);
console.log(res.n);
console.log(res.a); */

/* **************** */

/* type ConvertType = {
  <T>(obj: T): {
    name: string;
    age: number;
  } & {
    [key in keyof T]: T[key];
  };
};

const convert: ConvertType = (obj) => {
  return {
    ...obj,
    name: "Alex",
    age: 30,
  };
};

const res = convert({
  label: "Title",
});

console.log(res.name);
console.log(res.age);
console.log(res.label); */

/* ******************* */

/* type TFunctionDefault = { children?: string };
type TFunction<T = {}> = (props: T & TFunctionDefault) => void;

type EEE<T> = {
    [K in keyof T]: string
}

const d = {
    name: 'text'
}

const r: EEE<typeof d> = {

};

type TConnect = <T, R, G>
    (func: (props: T) => R, mapPrips: (props: T) => G) =>
    (prop: Omit<T, keyof G>) =>
        R;

const Connect: TConnect = (func, mapState) => (prop) => func(prop);

type TProps = { id: number, name: string };
const F1: TFunction<TProps> = ({ children, id }) => {
    console.log(id);
    return children;
};

const F2 = Connect(F1, (props) => ({ name: props.name }));

const props = {
    children: 'test'
};

const res1 = F1({ children: '1', id: 1, name: '1' });
const res2 = F2({ children: '1', id: 1, name: '1' }); */
