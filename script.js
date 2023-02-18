function gradeCalc(grade, unit) {
    if (grade === "O") {
        console.log(10*unit)
      return 10 * unit;
    } else if (grade === "A+") {
        console.log(9*unit)
      return 9 * unit;
    } else if (grade === "A") {
        console.log(8*unit)
      return 8 * unit;
    } else if (grade === "B+") {
        console.log(7*unit)
      return 7 * unit;
    } else if (grade === "B") {
        console.log(6*unit)
      return 6 * unit;
    } 
  }
  let counter = 1;
  function addCourse() {
    let addNew = document.createElement("form");
    addNew.classList.add("add_new", `key-${counter}`);
    const course_name = `
    <form class="add_new key-${counter}">
      <input type="text" placeholder="Course Code" class="courses key-${counter}" required>
          <input type="text" placeholder="Credit Points" class="credit-units key-${counter}" required>
          <select class="grade key-${counter}" required>
        <option value="select">Select</option>
        <option value="4">O</option>
        <option value="3">A+</option>
        <option value="2">A</option>
        <option value="1">B+</option>
        <option value="0">B</option>
      </select>  
    </form>
    `;
    addNew.innerHTML = course_name;
    document.getElementById("course-wrapper").appendChild(addNew);
    counter++;
  }
  
  function removeCourse() {
    let mainForm = document.querySelector("form.add_new");
    mainForm.remove();
  }
  
  const reports = [];
  function calcCgpa() {
    const CGPAPARAGRAPH = document.getElementById("cgpa-calc");
    const GRADESSELECT = document.querySelectorAll("select.grade");
    const UNIT = document.querySelectorAll("input.credit-units");
  
    const courseReport = {};
  
    const listOfGrades = [];
    const listOfUnits = [];
     let totalUnits = 0;
    GRADESSELECT.forEach((e) => {
      let GRADES = e.options;
      const selectedIndex = e.selectedIndex;
      const selectedGrade = GRADES[selectedIndex];
      const gradeValue = selectedGrade.text.toUpperCase();
      listOfGrades.push(gradeValue);
    });
    console.log(listOfGrades);
    UNIT.forEach((e) => {
      const unitValue = parseFloat(e.value);
      totalUnits += unitValue;
      listOfUnits.push(unitValue);
    });
    console.log(listOfUnits);
    let totalEarnedUnits = 0;
    for (let i = 0; i < listOfUnits.length; i++) {
      totalEarnedUnits += gradeCalc(listOfGrades[i], listOfUnits[i]);
    }
    console.log(totalEarnedUnits+" "+totalUnits)
    let gpa = totalEarnedUnits / totalUnits;
    if (gpa >= 0){
      CGPAPARAGRAPH.textContent = "Your CGPA is " + gpa.toFixed(3);   
    } else {
      CGPAPARAGRAPH.textContent = "Please enter your correct grade and credit points";    
    }
    
  }
