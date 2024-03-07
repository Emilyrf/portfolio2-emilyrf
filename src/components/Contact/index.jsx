export default function Contact() {
    return (
        <section className="h-screen flex justify-center items-center pt-20" id="contact">
            <div className='card shrink-0 w-full max-w-md shadow-2xl bg-base-200'>
                <form className='card-body' name="contact" method="POST">
                <input type="hidden" name="form-name" value="contact" />
                    <h2 className="text-center font-electrolize text-4xl  text-primary textshadow">Contact Me </h2>
                    <div className='form-control'>
                        <label className='label' htmlFor='name'>
                            Name
                        </label>
                        <input
                            name='name'
                            required
                            id='name'
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
                            required
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
                            required
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
                            required
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
