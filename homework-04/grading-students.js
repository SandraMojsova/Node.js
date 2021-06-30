let grades=[73,67,38,33];
function gradingStudents(grades) {
    return grades.map(originalGrade => {
        let finalGrade=parseInt(originalGrade/5)*5+5;
        if(originalGrade>=38) {
            if(finalGrade-originalGrade<3) {
                return finalGrade;
            }
            if(finalGrade-originalGrade>=3){
                return originalGrade;
            }
        }
        return originalGrade;
    });
}
console.log(gradingStudents(grades));

//parseInt(73/5)*5+5=14*5+5=70+5=75
//parseInt(67/5)*5+5=13*5+5=65+5=70
//parseInt(38/5)*5+5=7*5+5=35+5=40