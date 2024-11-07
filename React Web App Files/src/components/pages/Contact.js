import React from 'react';
import '../pages/contact.css';
import Footer from '../Footer';

export default function Contact() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");
        const formData = new FormData(event.target);

        
        formData.append("access_key", "a97281c5-8d8f-42e1-a9db-71ce9128460c");

        // Send form data to Web3 Forms
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <>
            <div className="contact-page">
                <h1 className="contact">Contact Us</h1>
                <div className="contact-content">
                    {/* Contact Form */}
                    <form className="contact-form" onSubmit={onSubmit}>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />

                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows="4" required></textarea>

                        <button type="submit">Submit Form</button>
                    </form>

                    <span className="form-result">{result}</span>

                    {/* Contact Information */}
                    <div className="contact-info">
                        <h2>Our Contact Information</h2>
                        <p>Email: slastoresautomation@gmail.com</p>
                        <p>Team of Developers</p>
                        <p>Developer: linukperera@icloud.com</p>
                        <p>Designer: venura33@yahoo.com</p>
                        <p>Designer: yasindujay07@gmail.com</p>
                    </div>

                    
                </div>
            </div>
            <Footer />
        </>
    );
}
