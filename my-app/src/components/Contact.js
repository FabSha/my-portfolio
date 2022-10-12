import { useRef } from "react"
import emailjs from "@emailjs/browser"


const Contact = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm("contact_service", "contact_form", form.current, "bfuw6tdIAPHV-9C_q").then((result) => {
            console.log(result.text)
        }, (error) => {
            console.log(error.text)
        }
        )
    }

    return (
        <div>
            <h1>Kontaktformulär</h1>
        


        <form className="form" ref={form} onSubmit={sendEmail}>
            <label className="form-control">Name:</label>
            <input type="text" name="user_name" />
            <label className="form-control">Email:</label>
            <input type="email" name="user_email" />
            <label className="form-control">Message:</label>
            <textarea rows={5} name="message"></textarea>
            <div>
                <button className="btn" type="submit">
                    Send
                </button>
            </div>
        </form>
        </div>
    )
}


export default Contact