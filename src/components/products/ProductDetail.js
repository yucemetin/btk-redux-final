import React from 'react'
import SelectInput from '../toolbox/SelectInput'
import TextInput from "../toolbox/TextInput"

export default function ProductDetail({
    categories,
    product,
    onSave,
    onChange,
    errors
}) {
    return (
        <form onSubmit={onSave}>
            <h2>{product.id ? "Update" : "Create"}</h2>
            <TextInput
                name="productName"
                label="Product Name"
                value={product.productName}
                onChange={onChange}
                error={errors.productName}
            />
            <SelectInput
                name="categoryId"
                label="Category"
                value={product.categoryId || ""}
                defaultOption="Choose"
                options={categories.map(category => {
                    return {
                        value: category.id,
                        text: category.categoryName
                    }
                })}
                onChange={onChange}
                error={errors.categoryId}

            />
            <TextInput
                name="unitPrice"
                label="Unit Price"
                value={product.unitPrice}
                onChange={onChange}
                error={errors.unitPrice}
            />
            <TextInput
                name="quantityPerUnit"
                label="Quantity Per Unit"
                value={product.quantityPerUnit}
                onChange={onChange}
                error={errors.quantityPerUnit}
            />
            <TextInput
                name="unitsInStock"
                label="Units In Stock"
                value={product.unitsInStock}
                onChange={onChange}
                error={errors.unitsInStock}
            />

            <button type='submit' className='btn btn-success'>Save</button>
        </form>
    )
}
