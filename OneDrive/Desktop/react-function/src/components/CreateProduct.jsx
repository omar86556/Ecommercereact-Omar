import React, { useState } from 'react'
import Button from "@mui/joy/Button";
import SvgIcon from "@mui/joy/SvgIcon";
import { styled } from "@mui/joy";
import axios from 'axios';




const VisuallyHiddenInput = styled("input")`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;
function CreateProduct({ addProduct, changeView }) {
  const [img, setImg] = useState("")
  const [product, setProduct] = useState({
    id: crypto.randomUUID(),
    image: "",
    price: "",
    category: "",
    name: "",
    description: ""
  })


  let handleSubmit = async () => {
    const formData = new FormData()
    formData.append("file", img)
    formData.append("upload_preset", "gr8xtc18")
    let postCloudinary = await axios
    .post("https://api.cloudinary.com/v1_1/dmtovotst/image/upload",formData)
    console.log(postCloudinary.data, 'this is post cloudinary') 
    console.log(postCloudinary.data["secure_url"], 'this is secureURL') 
    addProduct(product)
    changeView("home")
  }
  return (
    <div>
      <div className='bg-light d-flex flex-column justify-content-center align-items-center '>
        <label for="basic-url">Your Product Name</label>
        <input name="name" type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" className='h-300 w-40' onChange={
          (e) => setProduct({ ...product, name: e.target.value })
        } />

        <label>Upload your Image here</label>

        {product.image && (
          <img
            src={product.image}
            alt="image choosed"
            loading="lazy"
            width={200}
            className="rounded-circle text-center"
          />
        )}

        <Button
          component="label"
          role={undefined}
          tabIndex={-1}
          variant="outlined"
          color="neutral"
          startDecorator={
            <SvgIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                />
              </svg>
            </SvgIcon>
          }
        >
          Upload a file
          <VisuallyHiddenInput
            type="file"
            name="image"
            accept="image/*"
            className="form-control"
            onChange={(e) => { setImg(e.target.files[0]); setProduct({ ...product, image: URL.createObjectURL(e.target.files[0]) }) }}
            required
          />
        </Button>
        <label for="basic-url">Your Product's Price</label>
        <input name="price" type="number" class="form-control" id="basic-url" aria-describedby="basic-addon3" className='h-300 w-40' onChange={
          (e) => setProduct({ ...product, price: +e.target.value })
        } />
        <label for="basic-url">Your Product's Category</label>
        <input name="category" type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" className='h-300 w-40' onChange={
          (e) => setProduct({ ...product, category: e.target.value })
        } />
        <label for="basic-url">Your Product's Description </label>
        <input name="description" type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" className='h-300 w-40' onChange={
          (e) => setProduct({ ...product, description: e.target.value })
        } />
        <div className='d-flex justify-content-end p-5 gap-4'>
          <button className='btn btn-danger'
            onClick={() => handleSubmit()}

          > Add Product </button>
          <button className='btn btn-outline-danger'> Cancel </button>
        </div>
      </div>
    </div>
  )
}

export default CreateProduct
