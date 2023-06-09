import { useState } from "react";

export const DaysCounter= ()=>{
    const [startingDay,setStartingDay]= useState(new Date());
    const resultDate= new Date();
    const [result,setResult]= useState("");
    const [inputDays,setInputDays] = useState(1)
    const handleInputDays =(e:any)=>{
        const input = e.target.value;
        setInputDays(input)
    }
    const handleStartingDayChange=(e:any)=>{
        const updateDate = new Date(e.target.value)
        startingDay.setTime(updateDate.getTime())
        setStartingDay(updateDate)
    }
    const handleCal=()=>{
        resultDate.setTime(startingDay.getTime()+ (inputDays-1)*1000*60*60*24)
        setResult(resultDate.toLocaleDateString())
    }
      
    return (
<div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Days Counter</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <div className="space-y-6">
      <div>
        <label htmlFor="startDay" className="block text-sm font-medium leading-6 text-gray-900">Starting Date</label>
        <div className="mt-2">
          <input id="startDay" name="date" type="date" autoComplete="date" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={new Date(startingDay.getTime() - (startingDay.getTimezoneOffset()*60*1000)).toISOString().split('T')[0]} onChange={handleStartingDayChange} />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="days" className="block text-sm font-medium leading-6 text-gray-900">Days</label>
          <div className="text-sm">
          </div>
        </div>
        <div className="mt-2">
          <input id="days" name="number" type="number" autoComplete="number" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={inputDays} onChange={handleInputDays} />
        </div>
      </div>

      <div>
        <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={handleCal}>Calculate</button>
      </div>
    </div>

    <p className="mt-10 text-center text-sm text-gray-500">
        The Date {inputDays>0?"after":"before"} {Math.abs(inputDays)} days is {result}
    </p>
  </div>
</div>
    )
}