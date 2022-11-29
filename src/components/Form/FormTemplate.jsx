import React from "react";
import FormBooks from "./FormBooks";
import FormReviews from "./FormReviews";

export default function FormTemplate(props) {

  return (
    <main>
      <section>
        {props.type === 'books' ? <FormBooks /> : <FormReviews />}
      </section>
    </main>
  )
}