import Test from "./Test";
import { useState } from "react";
const App=()=>{  
    const[data,setData]=useState({fn:"",sn:"",res:"", sum: ''});
    const[avgData,setAvgData]=useState([]);
    const[largeNo,setLargeNo]=useState('');
    const[smallNo,setSmallNo]=useState('');
    const[any, setAnyData]=useState([{value:''}]);
    const[evenNo,setEvenNo]=useState('');
    const[oddNo,setOddNo]=useState('');
    const[primeNo,setPrimeNo]=useState('');
    const[sumNo,setSumNo]=useState('');
    const[revNo,setRevNo]=useState('');
    const[palindromeNo,setPalindromeNo]=useState('');
    const[noOdDigits,setNoOdDigits]=useState('');


    const handleChange=(e)=>{  
        setData({...data,[e.target.name]:e.target.value}); 
        setAnyData(e.target.value);
    }   
    const handleClick=()=>{
        const firstNumber = Number(data.fn);
        const secondNumber = Number(data.sn);
        const thirdNumber = Number(data.res);
        avgData.push(firstNumber,secondNumber,thirdNumber)
        findLargestAndSmallest(avgData);
        const sumData = firstNumber+secondNumber+thirdNumber;
        setData({...data,sum:sumData});
        let average = 0;
        for (const num of avgData) {
            average += num / avgData.length;
        }
        setAvgData(parseFloat(average.toFixed(2)));
    }

    
    
    
    
    function findLargestAndSmallest(numbers) {
        const filteredNumbers = numbers.filter(Number.isFinite);
        if (filteredNumbers.length === 0) {
            return {
            largest: null,
            smallest: null
        };
    }
        let largest = filteredNumbers[0];
        let smallest = filteredNumbers[0];
        filteredNumbers.forEach(number => {
            if (number > largest) {
                largest = number;
            }
            if (number < smallest) {
                smallest = number;
            }
        });
        return {
            largest:setLargeNo(largest),
            smallest: setSmallNo(smallest)
        };
    }
    
    const handleAnyClick=()=>{
        let ayy = [];
        ayy.push(any)
        const enterValue = any;
        const value = analyzeNumber(enterValue);
        setEvenNo(value.even);
        setOddNo(value.odd);
        setPrimeNo(value.prime);
        setSumNo(value.sumOfDigits);
        setRevNo(value.reversed);
        setPalindromeNo(value.palindrome);
        setNoOdDigits(value.numberOfDigits);
    }

    function analyzeNumber(number) {
        const strNum = number.toString();
        const digits = strNum.split('').map(Number);
        const isEven = number % 2 === 0;
        const isPrime = number > 1 && digits.every(digit => digit > 1 && number % digit !== 0);
        const sumOfDigits = digits.reduce((acc, digit) => acc + digit, 0);
        const reversed = strNum.split('').reverse().join('');
        const isPalindrome = strNum === reversed;
        const numberOfDigits = strNum.length;
        return {
          even: isEven,
          odd: !isEven,
          prime: isPrime,
          sumOfDigits: sumOfDigits,
          reversed: reversed,
          palindrome: isPalindrome,
          numberOfDigits: numberOfDigits
        };
      }
    return(    
        <>
        <Test />
            <h1>App Component</h1>            
            First no : <input type="text" name="fn" value={data.fn} onChange={handleChange} style={{width:'309px', margin: '3px'}} /><br />
            Second no : <input type="text" name="sn" value={data.sn} onChange={handleChange}  style={{width:'290px', margin: '3px'}}/><br />
            Third no : <input type="text" name="res" value={data.res}  onChange={handleChange}  style={{width:'300px', margin: '3px'}}/><br />
            <input type="button" value="Click me" onClick={handleClick} /> <br />   
            <br />
            <div className="form-control">
                Sum : <input type="text" readOnly value={data.sum}  onChange={handleChange} style={{border:'none'}} />
            </div>
            <div className="form-control">
                Avg : {avgData}
            </div>
            <div className="form-control">
                Largest : {largeNo}
            </div>
            <div className="form-control">
                Smallest : {smallNo}
            </div>

            <hr />

            Enter any no : <input type="text" name="any" value={any.value} onChange={handleChange}  style={{width:'30%', margin: '3px'}}/><br />
            <input type="button" value="Click me" onClick={handleAnyClick} />
            <br />
            <br />
            <div className="form-control">
                Even :{evenNo === true ? "Yes": 'No'}
            </div>
            <div className="form-control">
                Odd : {oddNo === true ? "Yes": 'No'}
            </div>
            <div className="form-control">
                Prime : {primeNo === true? "Yes": 'No'}
            </div>
            <div className="form-control">
                Sum of its digits : {sumNo}
            </div>
            <div className="form-control">
                Rev : {revNo}
            </div>
            <div className="form-control">
                Palindrome  : {palindromeNo === true? "Yes": 'No'}
            </div>
            <div className="form-control">
                No of digits : {noOdDigits}
            </div>
            <hr />
        </>        
    );
}
export default App;