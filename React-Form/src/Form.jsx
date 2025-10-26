import '../src/Form.css'
const Form = ()=>{
    return(
        <>
            <div className="form-container">

                <form>
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" name="name" placeholder="Enter your full name"/>

                    <label htmlFor="email">Email address</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email"/>

                    <label htmlFor="age">Age</label>
                    <input type="number" id="age" name="age" placeholder="Enter your age"/>

                    <label htmlFor="grade">Grade</label>
                    <select id="grade" name="grade">
                    <option value="">Select your grade</option>
                    <option value="grade1">Grade 1</option>
                    <option value="grade2">Grade 2</option>
                    <option value="grade3">Grade 3</option>
                    <option value="grade4">Grade 4</option>
                    </select>

                    <fieldset className="gender-section">
                    <legend>Gender</legend>
                    <label>
                        <input type="radio" name="gender" value="male" /> Male
                    </label>
                    <label>
                        <input type="radio" name="gender" value="female" /> Female
                    </label>
                    <label>
                        <input type="radio" name="gender" value="other" /> Other
                    </label>
                    </fieldset>

                    
                    <label className="terms">
                    <input type="checkbox" name="terms" /> I agree to the terms and
                    conditions
                    </label>

                
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Form