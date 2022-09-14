import React, { useState } from "react";
import data from '../../data/enum/enum'
import { Form, Button } from 'semantic-ui-react';
import { useForm } from "react-hook-form";

export default function BodyRequest() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    const [requestTitleConfig] = useState(data.requestTitleConfig)

    return (
        <div className="box body-request">
            <div className="container">
                {
                    requestTitleConfig.map((item) => {
                        return (
                            <div key={item.key}>
                                <div className="title-venture">
                                    <h1 className="title">
                                        <a href={item.url}>{item.title}</a>
                                    </h1>
                                </div>
                                <div className="describe grey-color">
                                    {item.describe}
                                </div>
                            </div>
                        )
                    })
                }
                <div>
                    <Form onSubmit={handleSubmit(onSubmit)} className="form-contact-contain">
                        <div className="form-item">
                            <Form.Field>
                                <div className="form-group">
                                    <div className="form-control-wrap name">
                                        <input
                                            className="form-control"
                                            placeholder='Name *'
                                            type="text"
                                            {...register("name", { required: true, maxLength: 10 })}
                                            style={{ border: errors.name ? '1px solid red' : '' }}
                                        />
                                    </div>
                                </div>
                            </Form.Field>
                            {errors.name && <p className="text-error">Please check the Name</p>}
                            <Form.Field>
                                <div className="form-group">
                                    <div className="form-control-wrap email">
                                        <input
                                            className="form-control"
                                            placeholder='Email *'
                                            type="email"
                                            {...register("email",
                                                {
                                                    required: true,
                                                    // eslint-disable-next-line
                                                    pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                                })}
                                            style={{ border: errors.email ? '1px solid red' : '' }}
                                        />
                                    </div>
                                </div>
                            </Form.Field>
                            {errors.email && <p className="text-error">Please check the Email</p>}
                            <Form.Field>
                                <div className="form-group">
                                    <div className="form-control-wrap phone">
                                        <input
                                            className="form-control"
                                            placeholder='Phone'
                                            type="text"
                                        />
                                    </div>
                                </div>
                            </Form.Field>
                        </div>
                        <div className="form-item">
                            <Form.Field>
                                <div className="form-group">
                                    <div className="form-control-wrap subject">
                                        <input
                                            className="form-control"
                                            placeholder='Subject *'
                                            type="text"
                                            {...register("subject", { required: true, maxLength: 20 })}
                                            style={{ border: errors.subject ? '1px solid red' : '' }}
                                        />
                                    </div>
                                </div>
                            </Form.Field>
                            {errors.subject && <p className="text-error">Please check the Subject</p>}
                            <Form.Field>
                                <div className="form-group">
                                    <div className="form-control-wrap">
                                        <textarea
                                            className="form-control"
                                            placeholder="You're looking for *"
                                            rows="4"
                                            {...register("message", { required: true, maxLength: 20 })}
                                            style={{ border: errors.message ? '1px solid red' : '' }}>
                                        </textarea>
                                    </div>
                                </div>
                            </Form.Field>
                            {errors.message && <p className="text-error">Please check the Message</p>}
                        </div>
                        <div className="form-item">
                            <div className="form-group">
                                <div className="form-control-wrap">
                                    <div className="recapcha"></div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-control-wrap">

                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-control-wrap">
                                    <Button className="button-default" type='submit'>Request now</Button>
                                </div>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}

