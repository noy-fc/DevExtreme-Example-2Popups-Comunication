// const pagekageList = [

//     'A',
//     'B',
//     'C',
//     'D',
//     'E'

// ] ;

const packageSizeList = [
  {
    ID: 1,
    Name: "A"
  },
  {
    ID: 2,
    Name: "B"
  },
  {
    ID: 3,
    Name: "D"
  },
  {
    ID: 4,
    Name: "E"
  },
  {
    ID: 5,
    Name: "F"
  }
];

const package2 = ["A", "B", "C", "D", "E"];

export default {
  getPagekageList() {
    return packageSizeList;
  },
  getPagekageList2() {
    return package2;
  }
};
