import logo from './logo.svg';
import './App.css';
import TenthStudent from './classes/TenthStudent';

function App() {

  //  let Dhoni = new TenthStudent();
  //  Dhoni.engMarks=90;
  //  Dhoni.hinMarks=99;
  //  Dhoni.telMarks=92;
  //  Dhoni.calculateResult();
  
  // console.log(TenthStudent.passMarks);

  let actorsOfKalki =["Prabhas","Amitabh Bachchan","Kamal Haasan","Deepika Padukone","Disha Patani","Keerthi Suresh",
    "Vijay Devarakonda","Dulkar Salman","Malavika Nair","Rajamouli","Brahmanandam","Rajendra Prasad","Keerthi Suresh","Ram Gopal Verma"]

  return (
    <div className="App">

      <h1>Learning Array Methods</h1>

      <button type='button' onClick={()=>{
        for(let i=0;i<= actorsOfKalki.length;i++) {
          console.log(actorsOfKalki[i]) 
         }
        console.log(actorsOfKalki[5])
        console.log(actorsOfKalki.length);

      }}>length</button>

      <button type="button" onClick={()=>{
       console.log(actorsOfKalki[6])
       console.log(actorsOfKalki.at(6))
      }}>at</button>

     <button type="button" onClick={()=>{
      console.log(actorsOfKalki[7])
      console.log(actorsOfKalki.toString(7))
      }}>toString</button>
       
     <button type="button" onClick={()=>{
      console.log(actorsOfKalki[8])
      console.log(actorsOfKalki.join("<--->"))
      }}>join</button>

    <button type="button" onClick={()=>{
     console.log(actorsOfKalki)
     console.log(actorsOfKalki.pop())
    }}>pop</button>

    <button type="button" onClick={()=>{
    console.log(actorsOfKalki)
    console.log(actorsOfKalki.push("Nag Ashwin"))
    }}>push</button>

    <button type="button" onClick={()=>{
     console.log(actorsOfKalki)
     console.log(actorsOfKalki.shift())
    }}>shift</button>

    <button type="button" onClick={()=>{
     console.log(actorsOfKalki)
     console.log(actorsOfKalki.unshift("Ashwini Dutt"))
    }}>unshift</button>

    <button type="button" onClick={()=>{
     console.log(actorsOfKalki)
     console.log(actorsOfKalki.splice(3,0,"Apple","Orange"))
    }}>splice</button>

    <br></br>
      
      <button onClick={()=>{
        console.log(actorsOfKalki);
        delete (actorsOfKalki[null]);

      }}>delete</button> 

      <button onClick={()=>{
       let fruits =["apple","banana","grapes"];
       let vegitables =["tomatoes","potatoes"];
       let treeProducts = fruits.concat(vegitables);
       console.log(fruits);
       console.log(vegitables);
       console.log(treeProducts);

       let treeProducts1 =[...fruits,...vegitables];
       console.log(treeProducts1)
      }}>concat</button>  

      <button onClick={()=>{
       let rcbTeam =["duplessis",["virat","anushka"],"siraj"]
       let miTeam =["rohit","bumrah","hardhik"]
       let cskTeam =["dhoni","ruturaj","jadeja"];

       let iplTeam =[rcbTeam,miTeam,cskTeam]
       console.log(iplTeam)

       let allMembers = iplTeam.flat(2)
       console.log(allMembers)
      }}>flat</button> 

      <button onClick={()=>{
       let actors = actorsOfKalki.slice(0,4);
       console.log(actors)
      }}>slice</button>  

      <button onClick={()=>{
       let actors = actorsOfKalki.fill("kalki",5);
       console.log(actors);
      }}>fill</button>  

      <button onClick={()=>{ 
       let movieTitle = "DEVARA"
       console.log(movieTitle)
       let arr = Array.from(movieTitle);
       console.log(arr)
      }}>from</button>

      <button onClick={()=>{
       let result = actorsOfKalki.includes("Amitabh Bachchan");
       console.log(result);
      }}>includes</button>  

      <button onClick={()=>{
       let result = actorsOfKalki.indexOf("Keerthi Suresh");
       console.log(result)
      }}>indexOf</button>  
      
      <button onClick={()=>{
       let result = actorsOfKalki.lastIndexOf("Keerthi Suresh");
       console.log(result)
        }}>lastIndexOf</button>  

      <button onClick={()=>{
      console.log(actorsOfKalki);
      console.log(actorsOfKalki.reverse());
      }}>Reverse</button>   

     <button onClick={()=>{
      for(let i=0; i<=actorsOfKalki.length;i++){
        console.log(actorsOfKalki[i])      
      }
       actorsOfKalki.forEach ((ele,i)=>{
        //console.log(ele)
        console.log(`${i} ----> ${ele}`)
      })
      }}>forEach</button>   

<button onClick={()=>{
let marksArr =[44,55,66,77,88,99];
// if(marksArr[0]>=35 &&
//   marksArr[1]>=35 &&
//   marksArr[2]>=35 &&
//   marksArr[3]>=35 &&
//   marksArr[4]>=35 &&
//   marksArr[5]>=35 
// ){
//   console.log("student Passed in Tenth")
// }else{
//   console.log("student Failed in Tenth")
// }
let result= marksArr.every((ele,i)=>{
   return ele>=35
})
if(result==true){
  console.log("Student Passed in Tenth")
}else{
  console.log("Student Failed in Tenth")
}
}}>every</button> 

<button onClick={()=>{
let marksArr =[44,55,66,77,88,95,96,97,98,99];
let result = marksArr.some((ele,i)=>{
  return ele<35
})
if(result==true){
  console.log("failed")
}else{
console.log("passed")
}
}}>some</button> 

<button onClick={()=>{
let marksArr =[44,55,66,77,88,95,96,97,98,99];
let result = marksArr.filter((ele,i)=>{
  return ele %2==0;
})
console.log(result);
}}>filter</button> 

<button onClick={()=>{
 let marksArr =[44,55,66,77,88,95]
 let find = marksArr.find((ele,i)=>{
  return ele>90
})
console.log(find)
let Index = marksArr.findIndex((ele,i)=>{
  return ele>90
})
console.log(Index)
}}>find/findIndex</button> 

<button onClick={()=>{
let marksArr =[44,55,66,77,88,95]
let find = marksArr.findLast((ele,i)=>{
 return ele>90
})
console.log(find)
let Index = marksArr.findLastIndex((ele,i)=>{
 return ele>90
})
console.log(Index)
}}>findLast/findLastIndex</button> 

<button onClick={()=>{
let movieTitle =["Devara"];
let value = Array.isArray(movieTitle);
console.log(value)
}}>isArray</button> 

<button onClick={()=>{
console.log(actorsOfKalki);
actorsOfKalki.sort()
console.log(actorsOfKalki)
let numbers =[32,43,53,21,15,74,82,9];
console.log(numbers)
numbers.sort()
console.log(numbers)
numbers.sort((a,b)=>{
return a-b
})
console.log(numbers)
}}>sort</button> 

<button onClick={()=>{
let arr = [32,41,52,32,74,91]
let result = arr.reduce((total=0,ele,i)=>{
  return (total+=ele)
})
console.log(result)
}}>reduce/reduceRight</button> 

<button onClick={()=>{
actorsOfKalki.map((ele,i)=>{
return console.log(`shri ${ele} garu`)
})
}}>map</button>

<div>
  {actorsOfKalki.map((ele,i)=>{
  return <h2>{ele}</h2>
  })}

</div>


    </div>
  );
}
      
export default App;
