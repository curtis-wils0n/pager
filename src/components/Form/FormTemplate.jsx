import React from "react";
import FormBooks from "./FormBooks";
import FormReviews from "./FormReviews";

export default function FormTemplate(props) {

  return (
    <main>
      {props.type === 'books' ? <FormBooks /> : <FormReviews />}
    </main>
  )
}