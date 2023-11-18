// Header.tsx
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { update } from '../redux/formSlice';
import Loader from '../components/loader';
import { useNavigate } from "react-router-dom";
const GiftForm: React.FC = () => {
    const data:any = useSelector((state) => state)
    let navigate = useNavigate();
    const dispatch = useDispatch()
    const [gender, setGender] = useState('');
    const [errorCheck, seterrorCheck] = useState(false);
    const [step, setstep] = useState(1);
    const [formData, SetFormData] = useState({
        step1: {
            buying: '',
            age: '',
            gender: '',
            hobbies: ''
        },
        step2: {
            occasion: '',
            gift: '',
            willingSpend: '',
            country: ''
        }
    })

    // Update Form Data Function
    const handleFormData = (event: any) => {
        if (event.target.name == "gender") {
            setGender(event.target.value);
        }
        const { name, value } = event.target;

        // Use the spread operator to maintain the existing state and update the specific field
        SetFormData((prevValue: any) => ({
            ...prevValue,
            [step == 1 ? "step1" : "step2"]: {
                ...prevValue[step == 1 ? "step1" : "step2"],
                [name]: value
            }
        }));
    }
    // Dispatch Data
    useEffect(()=>{
        dispatch(update(formData))
    },[formData])
    const submitData = (event: any) => {
        event.preventDefault();
        let formdata = step == 1 ? formData.step1 : formData.step2
        const isStep1Valid = Object.values(formdata).every(value => value !== '');
        if (!isStep1Valid) {
            seterrorCheck(true)
        } else {
            seterrorCheck(false)
            setstep(step + 1)
        }
    }
    if (step == 3) {
        console.log(data)
        setTimeout(() => {
            navigate("/products")
        }, 1000);
        return (<Loader />)
    }
   
    return (
        <>
            <section className='sec_gift_form'>
                <img className='sec_img' src={require('../Assets/Images/gift.png')} alt="" />
                <h2 className='sec_heading'>Tell us about your gift recipient </h2>
                <form action="" onSubmit={(e) => submitData(e)}>
                    {step == 1 ? <React.Fragment>
                        <div className='gift_input'>
                            <label htmlFor="">Who are you buying for?</label>
                            <input className={errorCheck&&formData.step1.buying==""?"error_active":""} type="text" name='buying' onChange={(e) => handleFormData(e)} />
                        </div>
                        <div className='gift_input'>
                            <label htmlFor="">How old are they?</label>
                            <div className='age_input'>
                                <input className={errorCheck&&formData.step1.age==""?"error_active":""} type="number" name='age' onChange={(e) => handleFormData(e)} />
                                <span>years old</span>
                            </div>
                        </div>
                        <div className='gift_input'>
                            <label htmlFor="">They identify as:</label>
                            <div className='gender_input'>
                                <label className={`${gender == "female" ? "active" : ""} ${errorCheck&&formData.step1.gender==""?"error_active":""}` }>
                                    <input type="radio"  name="gender" value="female" onChange={(e) => handleFormData(e)} /> Female
                                </label>
                                <label className={`${gender == "male" ? "active" : ""} ${errorCheck&&formData.step1.gender==""?"error_active":""}`}>
                                    <input type="radio"  name="gender" value="male" onChange={(e) => handleFormData(e)} /> Male
                                </label>
                                <label className={`${gender == "others" ? "active" : ""} ${errorCheck&&formData.step1.gender==""?"error_active":""}`}>
                                    <input type="radio" name="gender" value="others" onChange={(e) => handleFormData(e)} /> Others
                                </label>
                            </div>

                        </div>
                        <div className='gift_input'>
                            <label htmlFor="">What do they like to do? Be specific!</label>
                            <textarea name='hobbies' className={errorCheck&&formData.step1.hobbies==""?"error_active":""} onChange={(e) => handleFormData(e)} placeholder='Enter interests and hobbies' />
                        </div></React.Fragment> : <React.Fragment>
                        <div>
                            <div className='gift_input'>
                                <label htmlFor="">What's the occasion?</label>
                                <input type="text" className={errorCheck&&formData.step2.occasion==""?"error_active":""} name='occasion' onChange={(e) => handleFormData(e)} />
                            </div>
                            <div className='gift_input'>
                                <label htmlFor="gift">What type of a gift would you like?</label>
                                <select id="gift" name="gift" onChange={(e) => handleFormData(e)} className={errorCheck&&formData.step2.gift==""?"error_active":""}>
                                    <option value="option">Select Option</option>
                                    <option value="Thoughtful">Thoughtful</option>
                                    <option value="Practical">Practical</option>
                                    <option value="Funny">Funny</option>
                                    <option value="Romantic">Romantic</option>
                                    <option value="Sentimental">Sentimental</option>
                                    <option value="Entertaining">Entertaining</option>
                                </select>
                            </div>
                            <div className='gift_input'>
                                <label htmlFor="">What’s the maximum you’re willing to spend?</label>
                                <div className='age_input usd'>
                                    <input type="text" readOnly value={"USD"} />
                                    <input type="number" name='willingSpend' onChange={(e) => handleFormData(e)} className={errorCheck&&formData.step2.willingSpend==""?"error_active":""}/>
                                </div>
                            </div>
                            <div className='gift_input'>
                                <label htmlFor="countary">What country should we return the results for?</label>
                                <select id="countary" name='country' onChange={(e) => handleFormData(e)} className={errorCheck&&formData.step2.country==""?"error_active":""}>
                                    <option value="option">Select Country</option>
                                    <option value="US">US</option>
                                    <option value="USA">USA</option>

                                </select>
                            </div>
                        </div>
                    </React.Fragment>
                    }
                    <div className='gift_submit_btn'>
                        <input type="submit" value="Back" />
                        <input type="submit" value="Continue" />
                    </div>
                    {errorCheck && <p className='error'>You need to answer all questions before continuing.</p>}
                </form>

                <div className='form_step'><span>step {step}</span>/ <span>2</span></div>
            </section>
        </>
    );
};

export default GiftForm;
