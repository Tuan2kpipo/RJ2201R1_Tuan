//Cho trước 1 mảng các trainee như sau:
const traineeIterator = [
  {
    id: 1,
    firtName: 'A',
    lastName: 'Nguyen',
    className: 'CGO-RJ2201R1',
    grade: 'C'
  },
  {
    id: 2,
    firtName: 'B',
    lastName: 'Tran',
    className: 'CGO-RJ2201R1',
    grade: 'D'
  },
  {
    id: 3,
    firtName: 'C',
    lastName: 'Dinh',
    className: 'CGO-RJ2201R1',
    grade: 'A'
  },
  {
    id: 4,
    firtName: 'D',
    lastName: 'Le',
    className: 'CGO-RJ2201R1',
    grade: 'B'
  },
  {
    id: 5,
    firtName: 'D',
    lastName: 'Hoang',
    className: 'CGO-RJ2201R1',
    grade: 'F'
  },
  {
    id: 6,
    firtName: 'E',
    lastName: 'Pham',
    className: 'CGO-RJ2201R1',
    grade: 'E'
  }
];

//1. Sử dụng forEach(), hãy console.log() ra full name (firstName + lastName) của tất cả các phần từ trong mảng trên
// *YOUR CODE HERRE *

// traineeIterator.forEach( function(trainee, index){
//   console.log(`Ho ten nguoi thu`+" "+ index + `:`, trainee.firtName + " " +trainee.lastName);
//   });

//2. Sử dụng forEach(), hãy console.log() ra điểm số (grade) + full name (trong cùng 1 string, format: D Hoang / F) 
//của tất cả các phần từ trong mảng trên
// *YOUR CODE HERRE *

// traineeIterator.forEach( function(trainee, index){
//   const fulName = trainee.firtName + " " +trainee.lastName;
//   const grade = trainee.grade;
//   console.log(index, grade +" "+ fulName);
//   });


//3. Sử dụng map(), hãy tạo ra 1 mảng mới với tên gọi expectedTraineeArray, 
//trong đó các props của từng phần tử được đổi như sau:
// - newId: className-id
// - fullName: firstName lastName
// - rank: grade
//ex: {
//  newId: 'CGO-RJ2201R1-5,
//  fullName: 'D Hoang',
//  rank: 'F'
//}
// *YOUR CODE HERRE *

// const expectedTraineeArray =  traineeIterator.map(function(trai){
//   return {
//     newId: trai.id,
//     fullName: `${trai.firtName} ${trai.lastName} `,
//     newClassName: trai.className,
//     newGrade: trai.grade,
//   }
// });

// console.log(expectedTraineeArray);
//4, Sử dụng map(), hãy tạo ra 1 mảng mới với tên gọi newTraineeArray,
//trong đó các props của từng phần tử được đổi như sau:
// - id: id
// - codeName: [className] - firstName lastName
// - classification: xét điều kiện:
// -> nếu đạt A grade trả về: 'Excellent'
// -> nếu đạt B grade trả về: 'Good'
// -> nếu đạt C grade trả về: 'Medium'
// -> nếu đạt D grade trả về: 'Weak'
// -> nếu đạt E grade trả về: 'Poor'
// -> nếu đạt F grade trả về: 'Disbanded'
// => tip: tạo ra 1 hàm, với đầu vào là grade, trả về giá trị tương ứng, không xét điều kiện trong forEach() body
// *YOUR CODE HERRE *


// const newTraineeArray =  traineeIterator.map(function(trai){
  
//   if(trai.grade == 'A'){
//     trai.grade = "Excellent";
//   }else if (trai.grade == 'B'){
//     trai.grade = "Good";
//   }if(trai.grade == 'C'){
//     trai.grade = "Medium";
//   }else if (trai.grade == 'D'){
//     trai.grade = "Weak";
//   }if(trai.grade == 'E'){
//     trai.grade = "Poor";
//   }else if (trai.grade == 'F'){
//     trai.grade = "Disbanded";
//   }

//   return {
//     id: trai.id,
//     codeName: [trai.className] +  "- " + `${trai.firtName} ${trai.lastName} `,
//     classification: trai.grade,
//   };
// });

// console.log(newTraineeArray);


//5. Lọc ra các trainee với grade dưới B
// *YOUR CODE HERRE *

console.log(newTraineeArray);

//6. Lọc ra các trainee với grade trên C, sau đố xét điều kiện sau:
// -> nếu số các trainee với grade trên C >= 50% sĩ số lớp, alert ra "Effective training!"
// -> nếu số các trainee với grade trên C < 30% sĩ số lớp, alert ra "Average training!"
// -> nếu số các trainee với grade trên C = 0, alert ra "Failed training!"
// *YOUR CODE HERRE *



//7. Tìm ra thành viên có grade A, alert ra tên đầy đủ của thành viên đó
// *YOUR CODE HERRE *

// traineeIterator.forEach( function(trainee){
//   if(trainee.grade == 'A'){
//     alert("Thong tin thanh vien:" + `${trainee.firtName} ${trainee.lastName} ${trainee.className} ${trainee.grade}`);
//   }
//   });



//8. Tìm ra thành viên có grade F, alert ra tên đầy đủ của thành viên đó
// *YOUR CODE HERRE *

// traineeIterator.forEach( function(trainee){
//   if(trainee.grade == 'F'){
//     alert("Thong tin thanh vien:" + `${trainee.firtName} ${trainee.lastName} ${trainee.className} ${trainee.grade}`);
//   }
//   });


//9. Sử dụng reduce, hãy tạo ra 1 string cấu thành từ điểm số của các thành viên trong mảng đã cho
// *YOUR CODE HERRE *

// function stringGrade(accmulator, current_value){
//   const grade = accmulator + `${current_value.grade}`;

//   return grade;
// }

// const cau9 = traineeIterator.reduce(stringGrade, 0);

// console.log(cau9);



//10. (optional) Sử dụng reduce, hãy tạo ra 1 hàm tính được giai thừa của 1 số đầu vào. Ex: input 6 => 1*2*3*4*5*6 = 720
// *YOUR CODE HERRE *




//11. (optional) Hãy tạo ra 1 mảng mới, sử dụng 1 trong các cấu trúc lặp đã học, trong đó có các phần tử 
// - grade thấp nhất
// - grade cao nhất
// - grade trung bình dạng số, biết các giá trị tương ứng của từng grade như sau: A=1, B=2, ... , F=5
// *YOUR CODE HERRE *




// const newExpectedTraineeArray =  traineeIterator.map(function(trai){
  
//   if(trai.grade == 'A'){
//     trai.grade = 1;
//   }else if (trai.grade == 'B'){
//     trai.grade = 2;
//   }if(trai.grade == 'C'){
//     trai.grade = 3;
//   }else if (trai.grade == 'D'){
//     trai.grade = 4;
//   }if(trai.grade == 'E'){
//     trai.grade = 5;
//   }else if (trai.grade == 'F'){
//     trai.grade = 6;
//   }

//   return {
//     newId: trai.id,
//     fullName: `${trai.firtName} ${trai.lastName} `,
//     newClassName: trai.className,
//     newGrade: trai.grade,
//   };
// });

// console.log(newExpectedTraineeArray);