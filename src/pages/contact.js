import React, { useState }  from "react"
import axios from "axios";
import "../styles/global.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"

const MyForm = () => {
    
    const [serverState, setServerState] = useState({
      submitting: false,
      status: null
    });
    const handleServerResponse = (ok, msg, form) => {
      setServerState({
        submitting: false,
        status: { ok, msg }
      });
      if (ok) {
        form.reset();
      }
    };
    const handleOnSubmit = e => {
      e.preventDefault();
      const form = e.target;
      setServerState({ submitting: true });
      axios({
        method: "post",
        url: "https://getform.io/f/8775d1c3-d5a4-4b9f-9b0b-fda493a82838",
        data: new FormData(form)
      })
        .then(r => {
          handleServerResponse(true, "Thanks!", form);
        })
        .catch(r => {
          handleServerResponse(false, r.response.data.error, form);
        });
    };
    return (
      <section class="bg-gradient-to-r from-purple-500 to-blue-900 grid items-center justify-center justify-items-center">
        <Link to="/" class="absolute h-8 pt-4 w-4"><FontAwesomeIcon icon={faChevronLeft} class="h-25 w-25"></FontAwesomeIcon></Link>
          <div class="w-11/12 bg-white h-60vh rounded p-6">
            <h3 class="header text-center">Contact</h3>
            <form onSubmit={handleOnSubmit} class="h-3/4 grid items-center">
            <div class="grid grid-cols-3">
                <label for="exampleInputEmail1" required="required" htmlFor="email" class="col-span-1">
                  Email address
                </label>
                <input type="email" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" class=" focus:outline-none rounded focus:border-blue-300 border-2 col-span-2"/>
                
            </div> 
            <div class="grid grid-cols-3">
              <label for="exampleInputName" htmlFor="name" class="col-span-1">Name</label>
              <input type="text" name="name" id="exampleInputName" placeholder="Enter your name" required="required" class="col-span-2 focus:outline-none rounded focus:border-blue-300 border-2"/>
            </div>
                
            <div class="grid grid-cols-3">
              <label for="exampleFormControlSelect1" class="col-span-1" htmlFor="platform">Favourite Platform</label>
                <select id="exampleFormControlSelect1" name="platform" required="required" class="col-span-2 focus:outline-none rounded focus:border-blue-300 border-2">
                  <option>Github</option>
                  <option>Gitlab</option>
                  <option>Bitbucket</option>
                </select>
            </div>
            <button type="submit" disabled={serverState.submitting} class="m-auto font-semibold text-xl border-purple-600 bg-purple-600 rounded border-2 p-2 hover:bg-white hover:text-purple-900 focus:outline-none focus:bg-blue-800 focus:text-white">Submit</button>
            {serverState.status && (
                <p class="text-red" className={!serverState.status.ok ? "errorMsg" : ""}>
                {serverState.status.msg}
                </p>
            )}
            </form>
          </div>
         
      </section>
    );
  };
  
  export default MyForm;