// 'use client';

// import ChoicesFormInput from '@/components/from/ChoicesFormInput';
// import TextAreaFormInput from '@/components/from/TextAreaFormInput';
// import TextFormInput from '@/components/from/TextFormInput';
// import IconifyIcon from '@/components/wrappers/IconifyIcon';
// import { yupResolver } from '@hookform/resolvers/yup';
// import { Button, Card, CardBody, CardHeader, CardTitle, Col, Row } from 'react-bootstrap';
// import { useForm } from 'react-hook-form';
// import * as yup from 'yup';
// const PropertyAdd = () => {
//   const messageSchema = yup.object({
//     name: yup.string().required('Please enter name'),
//     description: yup.string().required('Please enter description'),
//     zipCode: yup.string().required('Please enter Zip-Code')
//   });
//   const {
//     handleSubmit,
//     control
//   } = useForm({
//     resolver: yupResolver(messageSchema)
//   });
//   return <>
//       <form onSubmit={handleSubmit(() => {})}>
//         <Card>
//           <CardHeader>
//             <CardTitle as={'h4'}>Property Information</CardTitle>
//           </CardHeader>
//           <CardBody>
//             <Row>
//               <Col lg={6}>
//                 <div className="mb-3">
//                   <TextFormInput control={control} name="name" placeholder="Name" label="Property Name" />
//                 </div>
//               </Col>
//               <Col lg={6}>
//                 <label htmlFor="property-categories" className="form-label">
//                   Property Categories
//                 </label>
//                 <ChoicesFormInput className="form-control" id="property-categories" data-choices data-choices-groups data-placeholder="Select Categories">
//                   <option value="Villas">Villas</option>
//                   <option value="Residences">Residences</option>
//                   <option value="Bungalow">Bungalow</option>
//                   <option value="Apartment">Apartment</option>
//                   <option value="Penthouse">Penthouse</option>
//                 </ChoicesFormInput>
//               </Col>
//               <Col lg={4}>
//                 <label htmlFor="property-price" className="form-label">
//                   Price
//                 </label>
//                 <div className="input-group mb-3">
//                   <span className="input-group-text fs-20 px-2 py-0">
//                     <IconifyIcon icon="ri:money-dollar-circle-line" />
//                   </span>
//                   <input type="number" id="property-price" className="form-control" placeholder={'000'} />
//                 </div>
//               </Col>
//               <Col lg={4}>
//                 <label htmlFor="property-for" className="form-label">
//                   Property For
//                 </label>
//                 <ChoicesFormInput className="form-control" id="property-for" data-choices data-choices-groups data-placeholder="Select Categories">
//                   <option value="Sale">Sale</option>
//                   <option value="Rent">Rent</option>
//                   <option value="Other">Other</option>
//                 </ChoicesFormInput>
//               </Col>
//               <Col lg={4}>
//                 <label htmlFor="property-bedroom" className="form-label">
//                   Bedroom
//                 </label>
//                 <div className="input-group mb-3">
//                   <span className="input-group-text fs-20">
//                     <IconifyIcon icon="solar:bed-broken" className="align-middle" />
//                   </span>
//                   <input type="number" id="property-bedroom" className="form-control" />
//                 </div>
//               </Col>
//               <Col lg={4}>
//                 <label htmlFor="property-bathroom" className="form-label">
//                   Bathroom
//                 </label>
//                 <div className="input-group mb-3">
//                   <span className="input-group-text fs-20">
//                     <IconifyIcon icon="solar:bath-broken" className="align-middle" />
//                   </span>
//                   <input type="number" id="property-bathroom" className="form-control" />
//                 </div>
//               </Col>
//               <Col lg={4}>
//                 <label htmlFor="property-square-foot" className="form-label">
//                   Square Foot
//                 </label>
//                 <div className="input-group mb-3">
//                   <span className="input-group-text fs-20">
//                     <IconifyIcon icon="solar:scale-broken" className="align-middle" />
//                   </span>
//                   <input type="number" id="property-square-foot" className="form-control" />
//                 </div>
//               </Col>
//               <Col lg={4}>
//                 <label htmlFor="property-square-foot" className="form-label">
//                   Floor
//                 </label>
//                 <div className="input-group mb-3">
//                   <span className="input-group-text fs-20">
//                     <IconifyIcon icon="solar:double-alt-arrow-up-broken" className="align-middle" />
//                   </span>
//                   <input type="number" id="property-square-foot" className="form-control" />
//                 </div>
//               </Col>
//               <Col lg={12}>
//                 <div className="mb-3">
//                   <TextAreaFormInput control={control} name="description" type="text" label="Property Address" className="form-control" id="schedule-textarea" rows={3} placeholder="Enter address" />
//                 </div>
//               </Col>
//               <Col lg={4}>
//                 <div className="mb-3">
//                   <TextFormInput control={control} name="zipCode" type="number" placeholder="zip-code" label="Zip-Code" />
//                 </div>
//               </Col>
//               <Col lg={4}>
//                 <label htmlFor="choices-city" className="form-label">
//                   City
//                 </label>
//                 <ChoicesFormInput className="form-control" id="choices-city" data-choices data-choices-groups data-placeholder="Select City">
//                   <option>Choose a city</option>
//                   <optgroup label="UK">
//                     <option value="London">London</option>
//                     <option value="Manchester">Manchester</option>
//                     <option value="Liverpool">Liverpool</option>
//                   </optgroup>
//                   <optgroup label="FR">
//                     <option value="Paris">Paris</option>
//                     <option value="Lyon">Lyon</option>
//                     <option value="Marseille">Marseille</option>
//                   </optgroup>
//                   <optgroup label="DE" disabled>
//                     <option value="Hamburg">Hamburg</option>
//                     <option value="Munich">Munich</option>
//                     <option value="Berlin">Berlin</option>
//                   </optgroup>
//                   <optgroup label="US">
//                     <option value="New York">New York</option>
//                     <option value="Washington" disabled>
//                       Washington
//                     </option>
//                     <option value="Michigan">Michigan</option>
//                   </optgroup>
//                   <optgroup label="SP">
//                     <option value="Madrid">Madrid</option>
//                     <option value="Barcelona">Barcelona</option>
//                     <option value="Malaga">Malaga</option>
//                   </optgroup>
//                   <optgroup label="CA">
//                     <option value="Montreal">Montreal</option>
//                     <option value="Toronto">Toronto</option>
//                     <option value="Vancouver">Vancouver</option>
//                   </optgroup>
//                 </ChoicesFormInput>
//               </Col>
//               <Col lg={4}>
//                 <label htmlFor="choices-country" className="form-label">
//                   Country
//                 </label>
//                 <ChoicesFormInput className="form-control" id="choices-country" data-choices data-choices-groups data-placeholder="Select Country">
//                   <option>Choose a country</option>
//                   <optgroup>
//                     <option>United Kingdom</option>
//                     <option value="Fran">France</option>
//                     <option value="Netherlands">Netherlands</option>
//                     <option value="U.S.A">U.S.A</option>
//                     <option value="Denmark">Denmark</option>
//                     <option value="Canada">Canada</option>
//                     <option value="Australia">Australia</option>
//                     <option value="India">India</option>
//                     <option value="Germany">Germany</option>
//                     <option value="Spain">Spain</option>
//                     <option value="United Arab Emirates">United Arab Emirates</option>
//                   </optgroup>
//                 </ChoicesFormInput>
//               </Col>
//             </Row>
//           </CardBody>
//         </Card>
//         <div className="mb-3 rounded">
//           <Row className="justify-content-end g-2">
//             <Col lg={2}>
//               <Button variant="outline-primary" type="submit" className="w-100">
//                 Create Product
//               </Button>
//             </Col>
//             <Col lg={2}>
//               <Button variant="danger" className="w-100">
//                 Cancel
//               </Button>
//             </Col>
//           </Row>
//         </div>
//       </form>
//     </>;
// };
// export default PropertyAdd;
'use client'

import { useState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Button, Card, CardBody, CardHeader, CardTitle, Col, Row } from 'react-bootstrap'
import { useNotificationContext } from '@/context/useNotificationContext'
import TextFormInput from '@/components/from/TextFormInput'
import TextAreaFormInput from '@/components/from/TextAreaFormInput'

const propertySchema = yup.object({
  title: yup.string().required('Please enter property title'),
  description: yup.string().required('Please enter description'),
  category_id: yup.string().required('Category is required'),
  property_type: yup.string().required('Property type is required'),
  listing_type: yup.string().required('Listing type is required'),
  monthly_rent: yup.number().when('listing_type', {
    is: 'rent',
    then: (schema) => schema.required('Monthly rent is required').positive(),
    otherwise: (schema) => schema.notRequired()
  }),
  sale_price: yup.number().when('listing_type', {
    is: 'sale',
    then: (schema) => schema.required('Sale price is required').positive(),
    otherwise: (schema) => schema.notRequired()
  }),
  security_deposit: yup.number().when('listing_type', {
    is: 'rent',
    then: (schema) => schema.required('Security deposit is required').positive(),
    otherwise: (schema) => schema.notRequired()
  }),
  area: yup.number().required('Area is required').positive(),
  bedroom: yup.number().required('Bedroom count is required').integer().min(0),
  bathroom: yup.number().required('Bathroom count is required').integer().min(0),
  city: yup.string().required('City is required'),
  state: yup.string().required('State is required'),
  locality: yup.string().required('Locality is required'),
  zipcode: yup.string().required('Zipcode is required'),
  full_address: yup.string().required('Full address is required'),
  images: yup.mixed().test('required', 'At least one image is required', val => val && val.length > 0),
  documents: yup.mixed().test('required', 'At least one document is required', val => val && val.length > 0)
})

const PropertyAdd = () => {
  const { showNotification } = useNotificationContext()
  const [imageFiles, setImageFiles] = useState([])
  const [documentFiles, setDocumentFiles] = useState([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [listingType, setListingType] = useState('rent')
  const [categoryOptions, setCategoryOptions] = useState([])
  const [apiError, setApiError] = useState('')

  // Fetch categories from backend
  useEffect(() => {
    fetch('http://localhost:5000/api/property-categories')
      .then(res => res.json())
      .then(data => {
        if (data.success && Array.isArray(data.data)) {
          setCategoryOptions(data.data.map(cat => ({
            value: cat._id,
            label: cat.name
          })))
        }
      })
      .catch(() => setCategoryOptions([]))
  }, [])

  const { handleSubmit, control, formState: { errors }, watch, setValue } = useForm({
    resolver: yupResolver(propertySchema),
    defaultValues: { listing_type: 'rent' }
  })

  const watchedListingType = watch('listing_type')
  useEffect(() => setListingType(watchedListingType), [watchedListingType])

  // File change handlers
  const handleImageChange = (e) => {
    setImageFiles(Array.from(e.target.files))
    setValue('images', Array.from(e.target.files)) // Ensure RHF sees the change
  }
  const handleDocumentChange = (e) => {
    setDocumentFiles(Array.from(e.target.files))
    setValue('documents', Array.from(e.target.files))
  }

  const propertyTypeOptions = [
    { value: 'apartment', label: 'Apartment' },
    { value: 'house', label: 'House' },
    { value: 'villa', label: 'Villa' },
    { value: 'plot', label: 'Plot' },
    { value: 'commercial', label: 'Commercial' },
    { value: 'office', label: 'Office' }
  ]
  const listingTypeOptions = [
    { value: 'rent', label: 'Rent' },
    { value: 'sale', label: 'Sale' },
    { value: 'both', label: 'Both' }
  ]

  // Simple reusable select
  const SimpleSelect = ({ field, options, placeholder, error }) => (
    <select {...field} className={`form-control ${error ? 'is-invalid' : ''}`}>
      <option value="">{placeholder}</option>
      {options.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
    </select>
  )

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    setApiError('')
    try {
      const formData = new FormData()
      // Append form fields
      Object.keys(data).forEach(key => {
        if (key !== 'images' && key !== 'documents' && data[key] !== undefined) {
          formData.append(key, data[key])
        }
      })
      // Images & documents
      imageFiles.forEach(file => formData.append('images', file))
      documentFiles.forEach(file => formData.append('documents', file))

      const response = await fetch('http://localhost:5000/api/properties', {
        method: 'POST',
        body: formData
      })

      const result = await response.json()
      if (response.ok && result.success) {
        showNotification({ message: 'Property created successfully!', variant: 'success' })
        window.location.href = '/property/list'
      } else {
        setApiError(result.message || 'Failed to create property')
        showNotification({ message: result.message || 'Failed to create property', variant: 'danger' })
      }
    } catch (err) {
      setApiError('An unexpected error occurred while submitting the form.')
      showNotification({ message: 'An unexpected error occurred while submitting the form.', variant: 'danger' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
      <Card>
        <CardHeader>
          <CardTitle as="h4">Property Information</CardTitle>
        </CardHeader>
        <CardBody>
          {apiError && <div className="alert alert-danger">{apiError}</div>}
          <Row>
            <Col lg={6}>
              <TextFormInput control={control} name="title" placeholder="Luxury 3BHK Apartment" label="Property Title" error={errors.title?.message} />
            </Col>
            <Col lg={6}>
              <TextFormInput control={control} name="area" type="number" placeholder="1200" label="Area (sq ft)" error={errors.area?.message} />
            </Col>
            <Col lg={6}>
              <label className="form-label">Property Type</label>
              <Controller name="property_type" control={control} render={({ field }) =>
                <SimpleSelect field={field} options={propertyTypeOptions} placeholder="Select Property Type" error={errors.property_type} />
              } />
              {errors.property_type && <div className="text-danger small mt-1">{errors.property_type.message}</div>}
            </Col>
            <Col lg={6}>
              <label className="form-label">Property Category</label>
              <Controller name="category_id" control={control} render={({ field }) =>
                <SimpleSelect field={field} options={categoryOptions} placeholder="Select Category" error={errors.category_id} />
              } />
              {errors.category_id && <div className="text-danger small mt-1">{errors.category_id.message}</div>}
            </Col>
            <Col lg={6}>
              <label className="form-label">Listing Type</label>
              <Controller name="listing_type" control={control} render={({ field }) =>
                <SimpleSelect field={field} options={listingTypeOptions} placeholder="Select Listing Type" error={errors.listing_type} />
              } />
              {errors.listing_type && <div className="text-danger small mt-1">{errors.listing_type.message}</div>}
            </Col>
            {listingType === 'rent' && (
              <>
                <Col lg={6}>
                  <TextFormInput control={control} name="monthly_rent" type="number" placeholder="25000" label="Monthly Rent (₹)" error={errors.monthly_rent?.message} />
                </Col>
                <Col lg={6}>
                  <TextFormInput control={control} name="security_deposit" type="number" placeholder="50000" label="Security Deposit (₹)" error={errors.security_deposit?.message} />
                </Col>
              </>
            )}
            {listingType === 'sale' && (
              <Col lg={6}>
                <TextFormInput control={control} name="sale_price" type="number" placeholder="5000000" label="Sale Price (₹)" error={errors.sale_price?.message} />
              </Col>
            )}
            <Col lg={4}><TextFormInput control={control} name="bedroom" type="number" placeholder="3" label="Bedrooms" error={errors.bedroom?.message} /></Col>
            <Col lg={4}><TextFormInput control={control} name="bathroom" type="number" placeholder="2" label="Bathrooms" error={errors.bathroom?.message} /></Col>
            <Col lg={4}><TextFormInput control={control} name="city" placeholder="Mumbai" label="City" error={errors.city?.message} /></Col>
            <Col lg={4}><TextFormInput control={control} name="state" placeholder="Maharashtra" label="State" error={errors.state?.message} /></Col>
            <Col lg={4}><TextFormInput control={control} name="locality" placeholder="Bandra West" label="Locality" error={errors.locality?.message} /></Col>
            <Col lg={4}><TextFormInput control={control} name="zipcode" placeholder="400050" label="Zipcode" error={errors.zipcode?.message} /></Col>
            <Col lg={8}><TextFormInput control={control} name="full_address" placeholder="123 Bandra West, Mumbai" label="Full Address" error={errors.full_address?.message} /></Col>
            <Col lg={12}><TextAreaFormInput control={control} name="description" label="Description" rows={3} placeholder="Beautiful apartment with modern amenities" error={errors.description?.message} /></Col>
            {/* File Uploads */}
            <Col lg={6}>
              <input
                type="file"
                className={`form-control ${errors.images ? 'is-invalid' : ''}`}
                multiple
                accept="image/*"
                onChange={handleImageChange}
              />
              {errors.images && <div className="text-danger small mt-1">{errors.images.message}</div>}
            </Col>
            <Col lg={6}>
              <input
                type="file"
                className={`form-control ${errors.documents ? 'is-invalid' : ''}`}
                multiple
                accept=".pdf,.doc,.docx"
                onChange={handleDocumentChange}
              />
              {errors.documents && <div className="text-danger small mt-1">{errors.documents.message}</div>}
            </Col>
          </Row>
        </CardBody>
      </Card>
      <Row className="justify-content-end g-2 mt-2">
        <Col lg={2}>
          <Button variant="outline-primary" type="submit" className="w-100" disabled={isSubmitting}>
            {isSubmitting ? 'Creating...' : 'Create Property'}
          </Button>
        </Col>
        <Col lg={2}>
          <Button variant="danger" className="w-100" type="button" onClick={() => window.history.back()}>
            Cancel
          </Button>
        </Col>
      </Row>
    </form>
  )
}

export default PropertyAdd
// 'use client'

// import ChoicesFormInput from '@/components/from/ChoicesFormInput'
// import TextAreaFormInput from '@/components/from/TextAreaFormInput'
// import TextFormInput from '@/components/from/TextFormInput'
// import { yupResolver } from '@hookform/resolvers/yup'
// import { Button, Card, CardBody, CardHeader, CardTitle, Col, Row } from 'react-bootstrap'
// import { useForm, Controller } from 'react-hook-form'
// import * as yup from 'yup'
// import { useState, useEffect } from 'react'
// import { useNotificationContext } from '@/context/useNotificationContext'

// const PropertyAdd = () => {
//   const { showNotification } = useNotificationContext()
//   const [imageFiles, setImageFiles] = useState([])
//   const [documentFiles, setDocumentFiles] = useState([])
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [listingType, setListingType] = useState('rent')

//   // ✅ Validation schema based on mongoose model
//   const propertySchema = yup.object({
//     title: yup.string().required('Please enter property title'),
//     description: yup.string().required('Please enter description'),
//     category_id: yup.string().required('Category is required'),
//     property_type: yup.string().required('Property type is required'),
//     listing_type: yup.string().required('Listing type is required'),
//     monthly_rent: yup.number()
//       .when('listing_type', {
//         is: 'rent',
//         then: (schema) => schema.required('Monthly rent is required').positive(),
//         otherwise: (schema) => schema.notRequired()
//       }),
//     sale_price: yup.number()
//       .when('listing_type', {
//         is: 'sale',
//         then: (schema) => schema.required('Sale price is required').positive(),
//         otherwise: (schema) => schema.notRequired()
//       }),
//     security_deposit: yup.number()
//       .when('listing_type', {
//         is: 'rent',
//         then: (schema) => schema.required('Security deposit is required').positive(),
//         otherwise: (schema) => schema.notRequired()
//       }),
//     area: yup.number().required('Area is required').positive(),
//     bedroom: yup.number().required('Bedroom count is required').integer().min(0),
//     bathroom: yup.number().required('Bathroom count is required').integer().min(0),
//     city: yup.string().required('City is required'),
//     state: yup.string().required('State is required'),
//     locality: yup.string().required('Locality is required'),
//     zipcode: yup.string().required('Zipcode is required'),
//     full_address: yup.string().required('Full address is required'),
//     images: yup.mixed().test('required', 'At least one image is required', () => imageFiles.length > 0),
//     documents: yup.mixed().test('required', 'At least one document is required', () => documentFiles.length > 0)
//   })

//   const { handleSubmit, control, formState: { errors }, watch } = useForm({
//     resolver: yupResolver(propertySchema),
//     defaultValues: { listing_type: 'rent' }
//   })

//   const watchedListingType = watch('listing_type')
//   useEffect(() => setListingType(watchedListingType), [watchedListingType])

//   const handleImageChange = (e) => setImageFiles(Array.from(e.target.files))
//   const handleDocumentChange = (e) => setDocumentFiles(Array.from(e.target.files))

//   const onSubmit = async (data) => {
//     setIsSubmitting(true)

//     try {
//       const formData = new FormData()

//       // Append all data (excluding images/docs handled separately)
//       Object.keys(data).forEach(key => {
//         if (data[key] !== undefined) formData.append(key, data[key])
//       })

//       imageFiles.forEach(file => formData.append('images', file))
//       documentFiles.forEach(file => formData.append('documents', file))

//       const response = await fetch('http://localhost:5000/api/properties', {
//         method: 'POST',
//         body: formData
//       })

//       const result = await response.json()

//       if (response.ok) {
//         showNotification({ message: 'Property created successfully!', variant: 'success' })
//         window.location.reload()
//       } else {
//         showNotification({ message: result.message || 'Failed to create property', variant: 'danger' })
//       }
//     } catch (err) {
//       console.error(err)
//       showNotification({ message: 'An unexpected error occurred while submitting the form.', variant: 'danger' })
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   // Simple reusable select
//   const SimpleSelect = ({ field, options, placeholder, error }) => (
//     <select {...field} className={`form-control ${error ? 'is-invalid' : ''}`}>
//       <option value="">{placeholder}</option>
//       {options.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
//     </select>
//   )

//   const propertyTypeOptions = [
//     { value: 'apartment', label: 'Apartment' },
//     { value: 'house', label: 'House' },
//     { value: 'villa', label: 'Villa' },
//     { value: 'plot', label: 'Plot' },
//     { value: 'commercial', label: 'Commercial' },
//     { value: 'office', label: 'Office' }
//   ]

//   const categoryOptions = [
//     { value: 'residential', label: 'Residential' },
//     { value: 'commercial', label: 'Commercial' },
//     { value: 'industrial', label: 'Industrial' },
//     { value: 'land', label: 'Land' }
//   ]

//   const listingTypeOptions = [
//     { value: 'rent', label: 'Rent' },
//     { value: 'sale', label: 'Sale' },
//     { value: 'both', label: 'Both' }
//   ]

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
//       <Card>
//         <CardHeader>
//           <CardTitle as="h4">Property Information</CardTitle>
//         </CardHeader>
//         <CardBody>
//           <Row>
//             <Col lg={6}>
//               <TextFormInput control={control} name="title" placeholder="Luxury 3BHK Apartment" label="Property Title" error={errors.title?.message} />
//             </Col>
//             <Col lg={6}>
//               <TextFormInput control={control} name="area" type="number" placeholder="1200" label="Area (sq ft)" error={errors.area?.message} />
//             </Col>
//             <Col lg={6}>
//               <label className="form-label">Property Type</label>
//               <Controller name="property_type" control={control} render={({ field }) =>
//                 <SimpleSelect field={field} options={propertyTypeOptions} placeholder="Select Property Type" error={errors.property_type} />
//               } />
//               {errors.property_type && <div className="text-danger small mt-1">{errors.property_type.message}</div>}
//             </Col>
//             <Col lg={6}>
//               <label className="form-label">Property Category</label>
//               <Controller name="category_id" control={control} render={({ field }) =>
//                 <SimpleSelect field={field} options={categoryOptions} placeholder="Select Category" error={errors.category_id} />
//               } />
//               {errors.category_id && <div className="text-danger small mt-1">{errors.category_id.message}</div>}
//             </Col>
//             <Col lg={6}>
//               <label className="form-label">Listing Type</label>
//               <Controller name="listing_type" control={control} render={({ field }) =>
//                 <SimpleSelect field={field} options={listingTypeOptions} placeholder="Select Listing Type" error={errors.listing_type} />
//               } />
//               {errors.listing_type && <div className="text-danger small mt-1">{errors.listing_type.message}</div>}
//             </Col>

//             {/* Rent or Sale specific fields */}
//             {listingType === 'rent' && (
//               <>
//                 <Col lg={6}>
//                   <TextFormInput control={control} name="monthly_rent" type="number" placeholder="25000" label="Monthly Rent (₹)" error={errors.monthly_rent?.message} />
//                 </Col>
//                 <Col lg={6}>
//                   <TextFormInput control={control} name="security_deposit" type="number" placeholder="50000" label="Security Deposit (₹)" error={errors.security_deposit?.message} />
//                 </Col>
//               </>
//             )}
//             {listingType === 'sale' && (
//               <Col lg={6}>
//                 <TextFormInput control={control} name="sale_price" type="number" placeholder="5000000" label="Sale Price (₹)" error={errors.sale_price?.message} />
//               </Col>
//             )}

//             <Col lg={4}><TextFormInput control={control} name="bedroom" type="number" placeholder="3" label="Bedrooms" error={errors.bedroom?.message} /></Col>
//             <Col lg={4}><TextFormInput control={control} name="bathroom" type="number" placeholder="2" label="Bathrooms" error={errors.bathroom?.message} /></Col>
//             <Col lg={4}><TextFormInput control={control} name="city" placeholder="Mumbai" label="City" error={errors.city?.message} /></Col>
//             <Col lg={4}><TextFormInput control={control} name="state" placeholder="Maharashtra" label="State" error={errors.state?.message} /></Col>
//             <Col lg={4}><TextFormInput control={control} name="locality" placeholder="Bandra West" label="Locality" error={errors.locality?.message} /></Col>
//             <Col lg={4}><TextFormInput control={control} name="zipcode" placeholder="400050" label="Zipcode" error={errors.zipcode?.message} /></Col>
//             <Col lg={8}><TextFormInput control={control} name="full_address" placeholder="123 Bandra West, Mumbai" label="Full Address" error={errors.full_address?.message} /></Col>
//             <Col lg={12}><TextAreaFormInput control={control} name="description" label="Description" rows={3} placeholder="Beautiful apartment with modern amenities" error={errors.description?.message} /></Col>

//             {/* File Uploads */}
//             <Col lg={6}><input type="file" className={`form-control ${errors.images ? 'is-invalid' : ''}`} multiple accept="image/*" onChange={handleImageChange} /></Col>
//             <Col lg={6}><input type="file" className={`form-control ${errors.documents ? 'is-invalid' : ''}`} multiple accept=".pdf,.doc,.docx" onChange={handleDocumentChange} /></Col>
//           </Row>
//         </CardBody>
//       </Card>

//       <Row className="justify-content-end g-2 mt-2">
//         <Col lg={2}><Button variant="outline-primary" type="submit" className="w-100" disabled={isSubmitting}>{isSubmitting ? 'Creating...' : 'Create Property'}</Button></Col>
//         <Col lg={2}><Button variant="danger" className="w-100" type="button" onClick={() => window.history.back()}>Cancel</Button></Col>
//       </Row>
//     </form>
//   )
// }

// export default PropertyAdd

// 'use client'

// import ChoicesFormInput from '@/components/from/ChoicesFormInput'
// import TextAreaFormInput from '@/components/from/TextAreaFormInput'
// import TextFormInput from '@/components/from/TextFormInput'
// import { yupResolver } from '@hookform/resolvers/yup'
// import { Button, Card, CardBody, CardHeader, CardTitle, Col, Row } from 'react-bootstrap'
// import { useForm, Controller } from 'react-hook-form'
// import * as yup from 'yup'
// import { useState, useEffect } from 'react'
// import { useNotificationContext } from '@/context/useNotificationContext'

// const PropertyAdd = () => {
//   const { showNotification } = useNotificationContext()
//   const [imageFiles, setImageFiles] = useState([])
//   const [documentFiles, setDocumentFiles] = useState([])
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [listingType, setListingType] = useState('rent')

//   const propertySchema = yup.object({
//     title: yup.string().required('Please enter property title'),
//     description: yup.string().required('Please enter description'),
//     category_id: yup.string().required('Category is required'),
//     property_type: yup.string().required('Property type is required'),
//     listing_type: yup.string().required('Listing type is required'),
//     monthly_rent: yup.number()
//       .when('listing_type', {
//         is: 'rent',
//         then: (schema) => schema.required('Monthly rent is required').positive(),
//         otherwise: (schema) => schema.notRequired()
//       }),
//     sale_price: yup.number()
//       .when('listing_type', {
//         is: 'sale',
//         then: (schema) => schema.required('Sale price is required').positive(),
//         otherwise: (schema) => schema.notRequired()
//       }),
//     security_deposit: yup.number()
//       .when('listing_type', {
//         is: 'rent',
//         then: (schema) => schema.required('Security deposit is required').positive(),
//         otherwise: (schema) => schema.notRequired()
//       }),
//     area: yup.number().required('Area is required').positive(),
//     bedroom: yup.number().required('Bedroom count is required').integer().min(0),
//     bathroom: yup.number().required('Bathroom count is required').integer().min(0),
//     city: yup.string().required('City is required'),
//     state: yup.string().required('State is required'),
//     locality: yup.string().required('Locality is required'),
//     zipcode: yup.string().required('Zipcode is required'),
//     full_address: yup.string().required('Full address is required'),
//     images: yup.mixed().test('required', 'At least one image is required', () => imageFiles.length > 0),
//     documents: yup.mixed().test('required', 'At least one document is required', () => documentFiles.length > 0)
//   })

//   const { handleSubmit, control, formState: { errors }, watch } = useForm({
//     resolver: yupResolver(propertySchema),
//     defaultValues: { listing_type: 'rent' }
//   })

//   const watchedListingType = watch('listing_type')
//   useEffect(() => setListingType(watchedListingType), [watchedListingType])

//   const handleImageChange = (e) => setImageFiles(Array.from(e.target.files))
//   const handleDocumentChange = (e) => setDocumentFiles(Array.from(e.target.files))

//   const onSubmit = async (data) => {
//     setIsSubmitting(true)

//     try {
//       const formData = new FormData()
//       const userId = localStorage.getItem('userId')
//       const token = localStorage.getItem('token')

//       if (!userId || !token) {
//         showNotification({ message: 'User not authenticated. Please login again.', variant: 'danger' })
//         setIsSubmitting(false)
//         return
//       }

//       formData.append('owner_id', userId)

//       Object.keys(data).forEach(key => {
//         if (data[key] !== undefined && key !== 'listing_type') formData.append(key, data[key])
//       })

//       imageFiles.forEach(file => formData.append('images', file))
//       documentFiles.forEach(file => formData.append('documents', file))

//       const response = await fetch('http://localhost:5000/api/properties', {
//         method: 'POST',
//         headers: { 'Authorization': `Bearer ${token}` },
//         body: formData
//       })

//       const result = await response.json()

//       if (response.ok) {
//         showNotification({ message: 'Property created successfully!', variant: 'success' })
//         window.location.reload()
//       } else {
//         showNotification({ message: result.message || 'Failed to create property', variant: 'danger' })
//       }
//     } catch (err) {
//       console.error(err)
//       showNotification({ message: 'An unexpected error occurred while submitting the form.', variant: 'danger' })
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   const SimpleSelect = ({ field, options, placeholder, error }) => (
//     <select {...field} className={`form-control ${error ? 'is-invalid' : ''}`}>
//       <option value="">{placeholder}</option>
//       {options.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
//     </select>
//   )

//   const propertyTypeOptions = [
//     { value: 'apartment', label: 'Apartment' },
//     { value: 'house', label: 'House' },
//     { value: 'villa', label: 'Villa' },
//     { value: 'condo', label: 'Condo' }
//   ]

//   const categoryOptions = [
//     { value: 'residential', label: 'Residential' },
//     { value: 'commercial', label: 'Commercial' },
//     { value: 'industrial', label: 'Industrial' },
//     { value: 'land', label: 'Land' }
//   ]

//   const listingTypeOptions = [
//     { value: 'rent', label: 'Rent' },
//     { value: 'sale', label: 'Sale' }
//   ]

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
//       <Card>
//         <CardHeader>
//           <CardTitle as="h4">Property Information</CardTitle>
//         </CardHeader>
//         <CardBody>
//           <Row>
//             <Col lg={6}><TextFormInput control={control} name="title" placeholder="Luxury 3BHK Apartment" label="Property Title" error={errors.title?.message} /></Col>
//             <Col lg={6}><TextFormInput control={control} name="area" type="number" placeholder="1200" label="Area (sq ft)" error={errors.area?.message} /></Col>
//             <Col lg={6}>
//               <label className="form-label">Property Type</label>
//               <Controller name="property_type" control={control} render={({ field }) => <SimpleSelect field={field} options={propertyTypeOptions} placeholder="Select Property Type" error={errors.property_type} />} />
//               {errors.property_type && <div className="text-danger small mt-1">{errors.property_type.message}</div>}
//             </Col>
//             <Col lg={6}>
//               <label className="form-label">Property Category</label>
//               <Controller name="category_id" control={control} render={({ field }) => <SimpleSelect field={field} options={categoryOptions} placeholder="Select Category" error={errors.category_id} />} />
//               {errors.category_id && <div className="text-danger small mt-1">{errors.category_id.message}</div>}
//             </Col>
//             <Col lg={6}>
//               <label className="form-label">Listing Type</label>
//               <Controller name="listing_type" control={control} render={({ field }) => <SimpleSelect field={field} options={listingTypeOptions} placeholder="Select Listing Type" error={errors.listing_type} />} />
//               {errors.listing_type && <div className="text-danger small mt-1">{errors.listing_type.message}</div>}
//             </Col>

//             {listingType === 'rent' ? (
//               <>
//                 <Col lg={6}><TextFormInput control={control} name="monthly_rent" type="number" placeholder="25000" label="Monthly Rent (₹)" error={errors.monthly_rent?.message} /></Col>
//                 <Col lg={6}><TextFormInput control={control} name="security_deposit" type="number" placeholder="50000" label="Security Deposit (₹)" error={errors.security_deposit?.message} /></Col>
//               </>
//             ) : (
//               <Col lg={6}><TextFormInput control={control} name="sale_price" type="number" placeholder="5000000" label="Sale Price (₹)" error={errors.sale_price?.message} /></Col>
//             )}

//             <Col lg={4}><TextFormInput control={control} name="bedroom" type="number" placeholder="3" label="Bedrooms" error={errors.bedroom?.message} /></Col>
//             <Col lg={4}><TextFormInput control={control} name="bathroom" type="number" placeholder="2" label="Bathrooms" error={errors.bathroom?.message} /></Col>
//             <Col lg={4}><TextFormInput control={control} name="city" placeholder="Mumbai" label="City" error={errors.city?.message} /></Col>
//             <Col lg={4}><TextFormInput control={control} name="state" placeholder="Maharashtra" label="State" error={errors.state?.message} /></Col>
//             <Col lg={4}><TextFormInput control={control} name="locality" placeholder="Bandra West" label="Locality" error={errors.locality?.message} /></Col>
//             <Col lg={4}><TextFormInput control={control} name="zipcode" placeholder="400050" label="Zipcode" error={errors.zipcode?.message} /></Col>
//             <Col lg={8}><TextFormInput control={control} name="full_address" placeholder="123 Bandra West, Mumbai" label="Full Address" error={errors.full_address?.message} /></Col>
//             <Col lg={12}><TextAreaFormInput control={control} name="description" label="Description" rows={3} placeholder="Beautiful apartment with modern amenities" error={errors.description?.message} /></Col>

//             <Col lg={6}><input type="file" className={`form-control ${errors.images ? 'is-invalid' : ''}`} multiple accept="image/*" onChange={handleImageChange} /></Col>
//             <Col lg={6}><input type="file" className={`form-control ${errors.documents ? 'is-invalid' : ''}`} multiple accept=".pdf,.doc,.docx" onChange={handleDocumentChange} /></Col>
//           </Row>
//         </CardBody>
//       </Card>

//       <Row className="justify-content-end g-2 mt-2">
//         <Col lg={2}><Button variant="outline-primary" type="submit" className="w-100" disabled={isSubmitting}>{isSubmitting ? 'Creating...' : 'Create Property'}</Button></Col>
//         <Col lg={2}><Button variant="danger" className="w-100" type="button" onClick={() => window.history.back()}>Cancel</Button></Col>
//       </Row>
//     </form>
//   )
// }

// export default PropertyAdd
