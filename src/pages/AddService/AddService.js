import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import './AddService.css';

function AddService() {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added a new service.');
                }
            })
            reset();
    }

    return (
        <div className="add-service">
            <h2>Add a service:</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true })} placeholder="Name" />
                <textarea {...register("shortDesc", { required: true })} placeholder="Short Description" />
                <textarea {...register("details")} placeholder="Details" />
                <input type="number" {...register("price", { required: true })} placeholder="Price" />
                <input {...register("img", { required: true })} placeholder="Image URL" />
                <input type="submit" value="Add Service" />
            </form>
        </div>
    )
}

export default AddService;