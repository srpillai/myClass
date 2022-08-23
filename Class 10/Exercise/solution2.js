function gradeLabs(labs) {
    for (let i=0; i < labs.length; i++) {
       let lab = labs[i];
       let output = `${lab.student}'s code worked: `;
       try{
         let result = lab.runLab(3);
         output += (result === 27);
       } catch(TypeError) {
         output += "Error thrown";
       }
       console.log(output);
    }
  }
 
 let studentLabs = [
    {
       student: 'Carly',
       runLab: function (num) {
          return Math.pow(num, num);
       }
    },
    {
       student: 'Erica',
       runLab: function (num) {
          return num * num;
       }
    }
 ];
 
 
 let studentLabs2 = [
    {
       student: 'Blake',
       myCode: function (num) {
          return Math.pow(num, num);
       }
    },
    {
       student: 'Jessica',
       runLab: function (num) {
          return Math.pow(num, num);
       }
    },
    {
       student: 'Mya',
       runLab: function (num) {
          return num * num;
       }
    }
 ];
 
 gradeLabs(studentLabs2);