import React from "react"

export default function _404() {
    return(
        <section class="flex justify-center items-center flex-col">
            <div class="header text-center">Sorry, this page does not exist</div>
            <button onClick={ ()=> {window.location.href = "/";} } class="border-2 border-purple-800 text-purple-800 p-2 font-semibold hover:bg-purple-800 hover:text-white rounded focus:outline-none">Go Back</button>
        </section>
    )
}