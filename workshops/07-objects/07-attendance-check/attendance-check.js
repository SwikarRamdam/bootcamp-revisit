let classRoom = [
    {
        "Marnie" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : true},
                {"Thursday" : true},
                {"Friday" : true}
            ]
    },
    {
        "Lena" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : true},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    },
    {
        "Shoshanna" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : false},
                {"Thursday" : true},
                {"Friday" : false}
            ]
    },
    {
        "Jessa" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : false},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    }
];


function attendanceCheck(day) {
  let presentArr = [];

  for (let i = 0; i < classRoom.length; i++) {
    let studentObj = classRoom[i];           // e.g. { "Marnie": [ ... ] }
    let studentName = Object.keys(studentObj)[0];  // "Marnie"
    let attendanceArr = studentObj[studentName];   // [ { Monday: true }, ... ]

    for (let j = 0; j < attendanceArr.length; j++) {
      let dayRecord = attendanceArr[j];           // e.g. { Monday: true }
      if (dayRecord[day] === true) {
        presentArr.push(studentName);
        break;  // once found, no need to check other days
      }
    }
  }

  return presentArr;
}

    // YOUR CODE BELOW
    // function attendanceCheck(day){
    //     let presentArr= [];
    //     for(let i = 0;i<classRoom.length;i++){
    //         let studentObj = classRoom[i];
    //         let studentName = Object.keys(studentObj)[0]; //why Object.keys and why 0?
    //         let attendanceArr = studentObj[studentName];//why couldn't we use direct classroom[i]Object.keys(studentObj)[0]
    
    //         for( let j = 0;j<attendanceArr.length; j++){
    //             let day_record = attendanceArr[j]; //does dayRecord hold only Monday or object as Monday:true
    
    //             if(day_record[day]===true){ //day_record is just a variable isn't it, then what does day_record[day] give and why is it being checked if it's true or not
    //                 presentArr.push(studentName);
    //                 break;
    //             }
    //         }
    //     }
    //     return presentArr;
    // }