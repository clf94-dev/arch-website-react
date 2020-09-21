import {Button, Grid} from '@material-ui/core'
import React from 'react'
import {useForm} from 'react-hook-form';

function Form() {

    const {handleSubmit , register, errors} = useForm();
    const onSubmit = values => console.log(values);

    return (
        <div>
            <Grid container direction='row'>

                <Grid item lg={4} xs={12}>
                    <h3>Connect with us</h3>
                </Grid>
                <Grid item lg={8} xs={12}>
                    <form onSubmit={handleSubmit(onsubmit)}>
                        <input
                            type="text"
                            name='name'
                            placeholder='Name'
                            style={errors.name
                            ? {
                                borderBottomColor: "red"
                            }
                            : {
                                borderBottomColor: "black"
                            }}
                            ref={register({required: true, maxLength: 30})}
                            className="first-name input"/>

                        <input
                            type="email"
                            name='email'
                            placeholder='Email'
                            style={errors.email
                            ? {
                                borderBottomColor: "red"
                            }
                            : {
                                borderBottomColor: "black"
                            }}
                            ref={register({required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i})}
                            className="email-address input"/>
                        <textarea
                            type="text"
                            name="message"
                            className='message-input'
                            placeholder="Your message.."
                            style={errors.message && {
                            borderColor: "red"
                        }}
                            ref={register({required: true})}/>
                    </form>
                    <Button type="submit" onClick={handleSubmit(onSubmit)}>
                    Send Message </Button>

                </Grid>
            </Grid>
        </div>
    )
}

export default Form
