"use client";
import { useState } from 'react';
import './Contact.css';
import axios from 'axios';
import { message } from 'antd';

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const validatePhoneNumber = (phone) => {
        const phoneRegex = /^\+998\d{9}$/; // +998 bilan boshlanib, 9 ta raqam kiritilishi kerak
        return phoneRegex.test(phone);
    };

    const SendMessage = async (event) => {
        event.preventDefault();
        setLoading(true);

        const token = "6887615421:AAH1YIJJvatolq6qpSaTBdzV9pZAG-OK0jc";
        const chat_id = -1002073716537;
        const url = `https://api.telegram.org/bot${token}/sendMessage`;

        if (!validatePhoneNumber(phone)) {
            message.error("Telefon raqami formati noto'g'ri! Format: +998XXXXXXXXX");
            setLoading(false);
            return;
        }

        const sendMessageContent = `Ismi: ${name}\nTelefon raqami: ${phone}`;

        try {
            await axios.post(url, {
                chat_id,
                text: sendMessageContent,
            });
            message.success("Muvaffaqiyatli yuborildi!");
            setName('');
            setPhone('');
        } catch (err) {
            message.error("Xatolik yuz berdi! Qayta urinib ko'ring.");
            console.error("Yuborishda xatolik:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='form' id='contact'>
            <div className='container'>
                <div className="form-left">
                    <h3 className='form-title'>Biz bilan bog`laning!</h3>
                    <form className='form-inputs' onSubmit={SendMessage}>
                        <label className='form-label'>Ismingizni Kiriting:</label>
                        <input
                            placeholder='Azamatov Ahror'
                            type="text"
                            className='form-input'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <label className='form-label'>Telefon raqamingizni kiriting:</label>
                        <input
                            placeholder='+998XXXXXXXXX'
                            type="text"
                            className='form-number'
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                            onInput={(e) => e.target.value = e.target.value.replace(/[^0-9+]/g, '')} // Harf va belgilarni olib tashlaydi
                        />
                        <button className='form-button' type="submit" disabled={loading}>
                            {loading ? "Yuborilmoqda..." : "Yuborish"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
