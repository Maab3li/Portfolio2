import { GradualSpacing } from "../features/gradualSpacingTextAnimation"
import { useForm } from "react-hook-form"

type FormValues = {
    email: string
    message: string
}

export const Contact = () => {

    //const [result, setResult] = useState('')

    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>();

    // 2. Type your submit handler using SubmitHandler
    const onSubmit= async(data:object,event:any) => {
      event.preventDefault()
        //setResult("Sending....");
        const updatedData = {...data, access_key: "5a211f9f-ff10-47ab-bdb4-7c62268b5b1f"}

        const response = await fetch("https://api.web3forms.com/submit", {
          
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(updatedData, null, 2)
        },);
    
        const result = await response.json();
        if (result.success) {
          //setResult("Form Submitted Successfully");
          console.log(result)
          reset()
        } else {
          //setResult("Error");
        }
    };

  return (
    <div id="contact" className="bg-[#0B0511] w-[100%] h-[100vh] md:px-[10%]">
        <div>
            <GradualSpacing text="Contact" />
            <div className="px-10 flex flex-col gap-5 *:text-yellow-100">
                <form onSubmit={handleSubmit(onSubmit)} action="https://api.web3forms.com/submit" method="POST">
                    <input type="hidden" name="access_key" value="5a211f9f-ff10-47ab-bdb4-7c62268b5b1f" />
                    <div className="w-[100%] flex flex-row justify-between pb-1">
                        <label className="mr-auto">Email</label>
                        <input {...register('email', {required: "*This field is required."})} type="email" className="border-1 border-yellow-50 px-2 w-[70%] rounded"></input>
                        
                    </div>
                    <div className="text-red-200 h-8">{errors.email&&errors?.email.message}</div>
                    <div className="w-[100%] flex flex-row justify-between pb-1">
                        <label className="mr-auto">Message</label>
                        <textarea {...register('message', {required:"*This field is required."})} className="border-1 border-yellow-50 px-2 w-[70%] h-24 rounded"></textarea> 
                    </div>
                    <div className="text-red-200 pb-5 h-8">{errors.message&&errors?.message.message}</div>
                    <button type="submit" className="w-[100%] bg-yellow-100 font-bold hover:bg-yellow-50 text-black text-md rounded py-1 hover-white md:w-[200px]">Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}
