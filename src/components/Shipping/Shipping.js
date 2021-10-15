import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './Shipping.css'

const Shipping = () => {
    const {user} = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div >
            <form className='shipping-form' onSubmit={handleSubmit(onSubmit)}>

                <input defaultValue={user.displayName} placeholder='your name' {...register("name")} />
                <input defaultValue={user.email} placeholder='email' {...register("email", { required: true })} />
                {errors.email && <span className='error'>This field is required</span>}
                <input placeholder='address' {...register("address")} />
                <input placeholder='city' {...register("city")} />
                <input placeholder='phone' {...register("phone")} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;