class User {
    constructor(firstName, lastName, id) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.id = id;
    }
  
    checkId() {
      const id = this.id;
      const thatId = Array.from(id);
  
      const arrId = thatId.filter((char) => {
        return char !== "/";
      });
  
      if (id.length < 9 || id.length > 11) return false;
  
      if (
        id.charAt(2) !== "0" &&
        id.charAt(2) !== "1" &&
        id.charAt(2) !== "5" &&
        id.charAt(2) !== "6"
      )
        return false;
  
      if (arrId.length === 9) arrId.push("0");
  
      const numberIdArr = arrId.map((char) => {
        return parseInt(char);
      });
  
      let numberId = 0;
  
      numberIdArr.forEach((digit, index) => {
        numberId += digit * Math.pow(10, numberIdArr.length - index);
      });
  
      if (numberId % 11 !== 0) return false;
  
      return true;
    }
  }
  
  const user = new User("Ivan", "Maly", "990604/6722");
  
  console.log(user.checkId());
