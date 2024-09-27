class TenthStudent{
    static passMarks =35;
    constructor(){
        console.log("Inside constructor");
        this.engMarks = 0;
        this.hinMarks = 0;
        this.telMarks = 0; 
    }
        calculateResult =()=>{
            if(this.engMarks >= TenthStudent.passMarks &&
                this.hinMarks >= TenthStudent.passMarks &&
                this.telMarks >= TenthStudent.passMarks 
            ){
            console.log("Student passed in Tenth")
            }else{
            console.log("Student Failed in Tenth")

            }
        }
    }

export default TenthStudent;