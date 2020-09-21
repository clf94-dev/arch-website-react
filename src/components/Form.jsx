import {Button, Grid} from '@material-ui/core'
import React from 'react'
import {useForm} from 'react-hook-form';

function Form() {

    const {handleSubmit , register, errors} = useForm();
    const onSubmit = values => console.log(values);

    return (
        <div>
            <Grid container direction='row' className='form-sect-cont'>

                <Grid item lg={4} xs={12} className='title-col'>
                    <h3>Connect with us</h3>
                </Grid>
                <Grid item lg={8} xs={12} className='form-cont'>
                    <form onSubmit={handleSubmit(onsubmit)} >
                        <input
                            type="text"
                            name='name'
                            placeholder={errors.name? 'Name' +'        ' + '   This is required': 'Name'}
                            style={errors.name
                            ? {
                                borderBottomColor: "red",
                                color: 'red'
                            }
                            : {
                                borderBottomColor: "black"
                            }}
                            ref={register({required: true, maxLength: 30})}
                            className={errors.name? "error input" :" input"}/>

                        <input
                            type="email"
                            name='email'
                            placeholder={errors.name? 'Email' +'        ' + '   Enter a valid email address': 'Email'}
                            style={errors.email
                            ? {
                                borderBottomColor: "red",
                                color:'red'
                            }
                            : {
                                borderBottomColor: "black"
                            }}
                            ref={register({required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i})}
                            className={errors.email? "error input" :" input"}/>
                        <textarea
                            type="text"
                            name="message"
                            className={errors.message? "error message" :" message"}
                            placeholder={errors.message? 'Your message....' +'        ' + '   This is required': 'Your message....'}
                            style={errors.message  ? {
                                borderBottomColor: "red",
                                color:'red'
                            }
                            : {
                                borderBottomColor: "black"
                            }}
                            ref={register({required: true})}/>
                    </form>
                    <Button type="submit" onClick={handleSubmit(onSubmit)} className='submit-btn'>
                    Send Message </Button>

                </Grid>
            </Grid>
        </div>
    )
}

export default Form
