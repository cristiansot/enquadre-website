import React from 'react';
import { useForm } from 'react-hook-form';
import '../assets/css/form.css'

function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Nombre" {...register("First name", {required: true, maxLength: 80})} />
      <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      <textarea type="text" placeholder="Comentario" {...register("Text area", {})} />

      <input type="submit" />
    </form>
  );
}

export default Form;
