import React from "react";
import {ThemeProvider} from 'styled-components';
import {lightTheme, darkTheme} from './../style/theme';
import {GlobalStyles} from './../style/global';
import {useState} from 'react';
import star from "./../style/img/star-solid.svg"
import FormStyles from './../style/FormStyles'
import {Form, Field} from 'react-final-form'

const Gallery = (props) => {

    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }

    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

    const onSubmit = async values => {
        await sleep(300)
        await sleep(300)

        addImage()
    }

    let urlFormat = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/


    const required = value => (value ? undefined : 'Required')
    const urlValue = value => (value.match(urlFormat) ? updateImageUrl(value) : 'Invalid url')
    const composeValidators = (...validators) => value =>
        validators.reduce((error, validator) => error || validator(value), undefined)

    let updateImageUrl = (value) => {
        props.updateImageUrl(value)
    }

    let addImage = () => {
        props.addImage()
    }


    return (

        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <>
                <GlobalStyles/>

                <div className={"Gallery_Container_Form_element1"}>
                    <button
                        className={"ButtonSwitcher"}
                        onClick={toggleTheme}>
                        {theme === 'light' ?
                            <img
                                src={star}
                                alt={"star"}
                                className={"DarkModeStar"}/>
                            :
                            <img
                                src={star}
                                alt={"star"}
                                className={"DarkModeStar"}/>
                        }
                    </button>

                    <FormStyles>
                        <Form
                            onSubmit={onSubmit}
                            render={({handleSubmit,
                                         form,
                                         submitting,
                                         pristine, values}) => (
                                <form onSubmit={handleSubmit}>
                                    <Field
                                        name="Image url"
                                        validate={composeValidators(
                                            required,
                                            urlValue)}>
                                        {({input,
                                              meta}) =>
                                            (
                                            <div>
                                                <label>Image url</label>
                                                <input {...input}
                                                       type="text"
                                                       placeholder="Image url"
                                                />
                                                {meta.error && meta.touched &&
                                                <span>
                                                    {meta.error}
                                                </span>}
                                            </div>
                                        )}
                                    </Field>
                                    <div className="buttons">
                                        <button type="submit"
                                                disabled={submitting}>
                                            Submit
                                        </button>
                                        <button
                                            type="button"
                                            onClick={form.reset}
                                            disabled={submitting || pristine}
                                        >
                                            Reset
                                        </button>
                                    </div>
                                </form>
                            )}
                        />
                    </FormStyles>

                </div>

                <div className={"Gallery_Container_Element2"}>
                    {props.countries.map(i => (
                        <a key={i.id}
                           href={i.url}
                        >
                            <img
                                className={"Gallery_Images_Container"}
                                key={i.id}
                                src={i.url}
                                alt={"img"}
                            />
                        </a>
                    ))}
                </div>


            </>
        </ThemeProvider>
    )
}

export default Gallery