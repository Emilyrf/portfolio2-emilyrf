import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
    fullName: yup
        .string()
        .required('Name is required')
        .min(5, 'Minimum length is 5 characters'),
    subject: yup
        .string()
        .required('Subject is required')
        .min(5, 'Minimum length is 5 characters'),
    email: yup
        .string()
        .required('Email is required')
        .email('Invalid email address'),
    message: yup
        .string()
        .required('A message is required')
        .min(10, 'Minimum length is 10 characters'),
});

export default function Contact() {
    const {
        handleSubmit,
        register,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(schema),
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const onSubmit = async (data) => {
        setIsSubmitted(true);
        reset();
    };

    return (
        <section className="h-screen flex justify-center items-center" id="contact">
            <div className='card shrink-0 w-full max-w-md shadow-2xl bg-base-200'>
                <form className='card-body' onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="text-center font-electrolize text-4xl  text-primary textshadow">Contact Me </h2>
                    <div className='form-control'>
                        <label className='label' htmlFor='fullName'>
                            Name
                        </label>
                        <input
                            {...register('fullName')}
                            id='fullName'
                            type='text'
                            className='input input-bordered'
                        />
                        {errors.fullName && (
                            <span className='text-red-600'>{errors.fullName.message}</span>
                        )}
                    </div>

                    <div className='form-control'>
                        <label className='label' htmlFor='subject'>
                            Subject
                        </label>
                        <input
                            {...register('subject')}
                            id='subject'
                            type='text'
                            className='input input-bordered'
                        />
                        {errors.subject && (
                            <span className='text-red-600'>{errors.subject.message}</span>
                        )}
                    </div>

                    <div className='form-control'>
                        <label className='label' htmlFor='email'>
                            Email
                        </label>
                        <input
                            {...register('email')}
                            id='email'
                            type='email'
                            className='input input-bordered'
                        />
                        {errors.email && (
                            <span className='text-red-600'>{errors.email.message}</span>
                        )}
                    </div>

                    <div className='form-control'>
                        <label htmlFor='message' className='label'>
                            Message
                        </label>
                        <textarea
                            {...register('message')}
                            id='message'
                            className='textarea textarea-bordered'
                        />
                        {errors.message && (
                            <span className='text-red-600'>{errors.message.message}</span>
                        )}
                    </div>

                    <div className='text-center'>
                        <button
                            className='custom-btn text-primary mt-8'
                            type='submit'
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
