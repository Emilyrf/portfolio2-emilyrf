export default function Contact() {
    return (
        <section className="h-screen flex justify-center items-center" id="contact">
            <div className='card shrink-0 w-full max-w-md shadow-2xl bg-base-200'>
                <form className='card-body' name="contact" method="POST" data-netlify="true">
                    <h2 className="text-center font-electrolize text-4xl  text-primary textshadow">Contact Me </h2>
                    <div className='form-control'>
                        <label className='label' htmlFor='fullName'>
                            Name
                        </label>
                        <input
                            name='fullName'
                            id='fullName'
                            type='text'
                            className='input input-bordered'
                        />
                    </div>

                    <div className='form-control'>
                        <label className='label' htmlFor='subject'>
                            Subject
                        </label>
                        <input
                            name='subject'
                            id='subject'
                            type='text'
                            className='input input-bordered'
                        />
                    </div>

                    <div className='form-control'>
                        <label className='label' htmlFor='email'>
                            Email
                        </label>
                        <input
                            name='email'
                            id='email'
                            type='email'
                            className='input input-bordered'
                        />
                    </div>

                    <div className='form-control'>
                        <label htmlFor='message' className='label'>
                            Message
                        </label>
                        <textarea
                            name='message'
                            id='message'
                            className='textarea textarea-bordered'
                        />
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
    )
}
