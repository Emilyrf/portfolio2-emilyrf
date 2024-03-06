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
})


// export default function Contact() {
//     return (
//         <section className="h-screen flex justify-center items-center" id="contact">
//             <div className='card shrink-0 w-full max-w-md shadow-2xl bg-base-200'>
//                 <form className='card-body' name="contact" method="POST">
//                 <input type="hidden" name="form-name" value="contact" />
//                     <h2 className="text-center font-electrolize text-4xl  text-primary textshadow">Contact Me </h2>
//                     <div className='form-control'>
//                         <label className='label' htmlFor='name'>
//                             Name
//                         </label>
//                         <input
//                             name='name'
//                             id='name'
//                             type='text'
//                             className='input input-bordered'
//                         />
//                     </div>

//                     <div className='form-control'>
//                         <label className='label' htmlFor='subject'>
//                             Subject
//                         </label>
//                         <input
//                             name='subject'
//                             id='subject'
//                             type='text'
//                             className='input input-bordered'
//                         />
//                     </div>

//                     <div className='form-control'>
//                         <label className='label' htmlFor='email'>
//                             Email
//                         </label>
//                         <input
//                             name='email'
//                             id='email'
//                             type='email'
//                             className='input input-bordered'
//                         />
//                     </div>

//                     <div className='form-control'>
//                         <label htmlFor='message' className='label'>
//                             Message
//                         </label>
//                         <textarea
//                             name='message'
//                             id='message'
//                             className='textarea textarea-bordered'
//                         />
//                     </div>

//                     <div className='text-center'>
//                         <button
//                             className='custom-btn text-primary mt-8'
//                             type='submit'
//                         >
//                             Submit
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </section>
//     )
// }

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

export default function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        try {
            const response = await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(data).toString()
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            console.log('Form submitted successfully!');
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <section className="h-screen flex justify-center items-center" id="contact">
            <div className='card shrink-0 w-full max-w-md shadow-2xl bg-base-200'>
                <form className='card-body' name="contact" method="POST" onSubmit={handleSubmit(onSubmit)}>
                    <input type="hidden" name="form-name" value="contact" />
                    <h2 className="text-center font-electrolize text-4xl text-primary textshadow">Contact Me </h2>
                    <div className='form-control'>
                        <label className='label' htmlFor='name'>Name</label>
                        <input
                            name='name'
                            id='name'
                            type='text'
                            className='input input-bordered'
                            {...register('name')}
                        />
                        {errors.name && <span className='text-red-600'>{errors.name.message}</span>}
                    </div>

                    <div className='form-control'>
                        <label className='label' htmlFor='subject'>Subject</label>
                        <input
                            name='subject'
                            id='subject'
                            type='text'
                            className='input input-bordered'
                            {...register('subject')}
                        />
                        {errors.subject && <span className='text-red-600'>{errors.subject.message}</span>}
                    </div>

                    <div className='form-control'>
                        <label className='label' htmlFor='email'>Email</label>
                        <input
                            name='email'
                            id='email'
                            type='email'
                            className='input input-bordered'
                            {...register('email')}
                        />
                        {errors.email && <span className='text-red-600'>{errors.email.message}</span>}
                    </div>

                    <div className='form-control'>
                        <label htmlFor='message' className='label'>Message</label>
                        <textarea
                            name='message'
                            id='message'
                            className='textarea textarea-bordered'
                            {...register('message')}
                        />
                        {errors.message && <span className='text-red-600'>{errors.message.message}</span>}
                    </div>

                    <div className='text-center'>
                        <button className='custom-btn text-primary mt-8' type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </section>
    );
}
