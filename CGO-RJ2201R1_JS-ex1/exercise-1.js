// 1. Khai báo 1 biến bootcampClass là 1 object, với các props như sau:
// - name: tên lớp, giá trị là 1 string tuỳ chọn
// - monitor: là 1 object với các props: name (string), age (só nguyên dương), averageScore (số thập phân, giá trị nhỏ hơn 10) có giá trị tuỳ chọn
// - headTeacher: là 1 object với các props: name(string), age (số nguyên dương), grade (enum, là 1 trong các thang rate: A,B,C,D,E,F)
// - students: là 1 array với 20 bạn, props tương tự như monitor và chỉ khác giá trị
// * YOUR CODE HERE *

const bootcampClass = {
    name: "CNTT",
    monitor: {
        name: "moni",
        age: 18, 
        averageScore: 1.25
    },
    headTeacher: {
        name: "thay giao",
        age: 20, 
        grade: "A"
    },
    students: [
        {
            name: "Tuan",
            age: 18, 
            averageScore: 1.25
        },
        {
            name: "Hieu",
            age: 20, 
            averageScore: 3
        },
        {
            name: "Hoa",
            age: 23, 
            averageScore: 5
        },
        {
            name: "Thang",
            age: 21, 
            averageScore: 6
        },
        {
            name: "Trung",
            age: 25, 
            averageScore: 10
        },
        {
            name: "Hoang",
            age: 30, 
            averageScore: 8
        },
        {
            name: "Hiep",
            age: 31, 
            averageScore: 2
        },
        {
            name: "Trung",
            age: 25, 
            averageScore: 10
        },
        {
            name: "Hoang",
            age: 30, 
            averageScore: 8
        },
        {
            name: "Hiep",
            age: 31, 
            averageScore: 2
        }
    ]
}

// 2. Tạo 1 hàm đọc ra tên của bạn lớp trưởng (monitor) với tham số đầu vào (argument) là object bootcampClass trên
// * YOUR CODE HERE *

// function doctenloptruong(bootcampClass){

//     return bootcampClass.monitor.name;

// }




// 3. Tạo 1 hàm đọc ra tên của thầy giáo chủ nhiệm (headTeacher) với tham số đầu vào (argument) là object bootcampClass trên
// * YOUR CODE HERE *

// function doctengvcn(bootcampClass){

//     return bootcampClass.headTeacher.name;

// }

// console.log(doctenloptruong(bootcampClass));

// 4. (optional) Tạo 1 hàm tính tổng số điểm trung bình của tất cả sinh viên trong lớp, với tham số đầu vào (argument) là object bootcampClass trên
// * YOUR CODE HERE *

// function tinhtongtrungbinh(bootcampClass){

//     var diem = bootcampClass.students.forEach(function(diemm){
//         return  diemm.averageScore;
//     })

//     function sumArray(diem){
//         let sum = 0;
//         for (let i = 0; i < diem.length; i++){
//             sum += diem[i];
//         }
         
//         return sumArray;
//     }
// }

// console.log(tinhtongtrungbinh(bootcampClass));

// 5. Xét điêm trung bình của lớp trưởng (monitor), 
// - nếu điểm số trên 7.5 thì alert ra "Đạt yêu cầu!"
// - nếu điểm từ 7.5 - 8.5 thì alert ra "Quá là đạt yêu cầu luôn!"
// - nếu điểm từ 8.5-10 thì alert ra "Bạn ấy không thuộc về thế giới này" 
// - còn lại thì alert ra "Thay lớp trưởng thôi!"
// tip: sử dụng if/else if/else hoặc switch/case/default
// * YOUR CODE HERE *

// const diemloptruong = bootcampClass.monitor.averageScore;


// function xetdiemloptruong(diemloptruong){
//     if(diemloptruong > 7.5){
//         alert('Đạt yêu cầu');
//     }else if(7.5< diemloptruong < 8.5){
//         alert('Qúa là đạt yêu cầu luôn')
//     }else if(8.5 < diemloptruong <10){
//         alert('Bạn ấy không thuộc về nới này');
//     }
// }


// 6. Sử dụng for hoặc while hoặc do-while, lặp qua tất cả sinh viên của lớp, console.log ra từng sinh viên
// * YOUR CODE HERE *

// var dssv = bootcampClass.students;


// for(let i = 0; i < dssv.length; i++) {
//     console.log(dssv[i]);
// }

// 7. Sử dụng for hoặc while hoặc do-while, lặp qua tất cả sinh viên của lớp, tính ra tổng số điểm trung bình. Sau đó xét các case:
// - Nếu điểm số thấp hơn 100, alert ra "Trainer thất bại!"
// - Nếu điểm số trong khoảng 100 - 150, alert ra "Tạm đạt yêu cầu!"
// - Nếu điểm số trong khoảng 150 - 200, alert ra "Đạt yêu cầu!"
// tip: sử dụng if/else if/else hoặc switch/case/default
// * YOUR CODE HERE *


    

    if(diem < 100){
                 alert('Trainer thất bại');
           }else if(100< diem < 150){
                 alert('Tạm đạt yêu cầu')
             }else if(150 < diemloptruong < 200){
                alert('Đạt yêu cầu');
             }

// 8. (nâng cao, optional) Biến hàm ở bài số 2 và 3 thành method của object bootcampClass, thay thế đầu vào bằng từ khoá this
// * YOUR CODE HERE *



