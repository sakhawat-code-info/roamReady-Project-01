

const Delete = () => {
    const handleSubmit = (e) => {
        // Prevent the browser from reloading the page
        e.preventDefault();

        const form = e.target;

        const postContent = form.postContent.value;
        const selectedFruit = form.selectedFruit.value;
        console.log(selectedFruit);

    }



    return (
        <>


            <form onSubmit={handleSubmit}>
                <label>
                    Post title: <input name="postTitle" defaultValue="Biking" />
                </label>
                <label>
                    Edit your post:
                    <textarea
                        name="postContent"
                        defaultValue="I really enjoyed biking yesterday!"
                        rows={4}
                        cols={40}
                    />
                </label>
                <label>
                    Pick a fruit:
                    <select name="selectedFruit">
                        <option value="apple">Apple</option>
                        <option value="banana">Banana</option>
                        <option value="orange">Orange</option>
                    </select>
                </label>
                <hr />
                <button type="reset">Reset edits</button>
                <button type="submit">Save post</button>
            </form>


            <section className="p-6 dark:text-gray-800">
                <form noValidate="" className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-50">
                    <h2 className="w-full text-3xl font-bold leading-tight">Contact us</h2>
                    <div>
                        <label htmlFor="name" className="block mb-1 ml-1">Name</label>
                        <input id="name" type="text" placeholder="Your name" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-1 ml-1">Email</label>
                        <input id="email" type="email" placeholder="Your email" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block mb-1 ml-1">Message</label>
                        <textarea id="message" type="text" placeholder="Message..." className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100"></textarea>
                    </div>
                    <div>
                        <button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-violet-600 focus:dark:ring-violet-600 hover:dark:ring-violet-600 dark:text-gray-50">Send</button>
                    </div>
                </form>
            </section>







        </>
    );
};

export default Delete;






