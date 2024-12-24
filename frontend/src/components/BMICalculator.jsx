import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
const BMICalculator = () => {
  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [gender, setGender] = useState("")
  const [bmi, setBmi] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault()

    if(!height || !weight || !gender) {
      toast.error("Please fill all the fields")
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters).toFixed(2);
    setBmi(bmiValue);
   
    if(bmiValue <18.5) {
      toast.warning(
        "You are underweight you seeking  advice from a healthcare"
      );

    }
    else if( bmiValue >= 18.5 && bmiValue <= 24.9) {
      toast.success("You are Healthy and Keep It Up")
    }
    else if( bmiValue >= 25 && bmiValue < 29.9) {
      toast.warning("you are overweight  you seeking  advice from a healthcare ")
    }
    else {
      toast.error("you are obese you seeking advice from a healthcare specialist...")
    }

  }

  
  return (
   <section className="bmi">
          <h1>BMI CALCULATOR</h1>
          <div className="container">
             <div className="wrapper">
                 <form onSubmit={calculateBMI}>
                       <div>
                           <label>HEIGHT (CM)</label>
                           <input 
                           type="number"
                           placeholder="Height in cm"
                           value={height}
                           onChange={(e) => setHeight(e.target.value)}
                            />
                       </div>
                       <div>
                           <label>WEIGHT (KG)</label>
                           <input 
                           type="number"
                           placeholder="Your Height"
                           value={weight}
                           onChange={(e) => setWeight(e.target.value)}
                            />
                       </div>
                       <div>
                           <label>GENDER</label>
                           <select value={gender} onChange={(e) => setGender(e.target.value)}>
                            <option value="">select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                           </select>
                       </div>
                       <button type="submit">Calculate Now</button>
                 </form>
             </div>

             <div className="wrapper">
               <img src="/bmi.jpg" alt="Bmi Image"/>
             </div>
          </div>
   </section>
  )
}

export default BMICalculator
