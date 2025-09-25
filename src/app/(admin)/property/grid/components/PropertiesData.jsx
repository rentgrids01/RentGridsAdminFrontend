// import IconifyIcon from '@/components/wrappers/IconifyIcon';
// import { getAllProperty } from '@/helpers/getAllProperty';
// import Image from 'next/image';
// import Link from 'next/link';
// import { Card, CardBody, CardFooter, Col, Row } from 'react-bootstrap';
// const PropertiesCard = ({
//   bath,
//   beds,
//   flor,
//   size: ft,
//   icon,
//   id,
//   location,
//   name,
//   price,
//   type,
//   variant,
//   save,
//   image
// }) => {
//   return <Card className="overflow-hidden">
//       <div className="position-relative">
//         <Image src={image} alt="properties" className="img-fluid rounded-top" />
//         <span className="position-absolute top-0 start-0 p-1">
//           {save ? <button type="button" className="btn btn-warning avatar-sm d-inline-flex align-items-center justify-content-center fs-20 rounded text-light ">
//               {' '}
//               <span>
//                 {' '}
//                 <IconifyIcon icon="solar:bookmark-broken" />
//               </span>
//             </button> : <button type="button" className="btn bg-warning-subtle avatar-sm d-inline-flex align-items-center justify-content-center fs-20 rounded text-warning">
//               <span>
//                 <IconifyIcon icon="solar:bookmark-broken" />
//               </span>
//             </button>}
//         </span>
//         <span className="position-absolute top-0 end-0 p-1">
//           <span className={`badge bg-${variant} text-white fs-13`}>{type}</span>
//         </span>
//       </div>
//       <CardBody>
//         <div className="d-flex align-items-center gap-2">
//           <div className="avatar bg-light rounded flex-centered">
//             <IconifyIcon icon={icon} width={24} height={24} className="fs-24 text-primary" />
//           </div>
//           <div>
//             <Link href="" className="text-dark fw-medium fs-16">
//               {name}
//             </Link>
//             <p className="text-muted mb-0">{location}</p>
//           </div>
//         </div>
//         <Row className="mt-2 g-2">
//           <Col lg={4} xs={4}>
//             <span className="badge bg-light-subtle text-muted border fs-12">
//               <span className="fs-16">
//                 <IconifyIcon icon="solar:bed-broken" className="align-middle" />
//               </span>
//               &nbsp;
//               {beds} Beds
//             </span>
//           </Col>
//           <Col lg={4} xs={4}>
//             <span className="badge bg-light-subtle text-muted border fs-12">
//               <span className="fs-16">
//                 <IconifyIcon icon="solar:bath-broken" className="align-middle" />
//               </span>
//               &nbsp;
//               {bath} Bath
//             </span>
//           </Col>
//           <Col lg={4} xs={4}>
//             <span className="badge bg-light-subtle text-muted border fs-12">
//               <span className="fs-16">
//                 <IconifyIcon icon="solar:scale-broken" className="align-middle" />
//               </span>
//               &nbsp;
//               {ft}ft
//             </span>
//           </Col>
//           <Col lg={4} xs={4}>
//             <span className="badge bg-light-subtle text-muted border fs-12">
//               <span className="fs-16">
//                 <IconifyIcon icon="solar:double-alt-arrow-up-broken" className="align-middle" />
//               </span>
//               &nbsp;
//               {flor} Floor
//             </span>
//           </Col>
//         </Row>
//       </CardBody>
//       <CardFooter className="bg-light-subtle d-flex justify-content-between align-items-center border-top">
//         {type == 'Sold' ? <p className="fw-medium text-muted text-decoration-line-through fs-16 mb-0">${price}.00 </p> : <p className="fw-medium text-dark fs-16 mb-0">${price}.00 </p>}
//         <div>
//           <Link href="" className="link-primary fw-medium">
//             More Inquiry <IconifyIcon icon="ri:arrow-right-line" className="align-middle" />
//           </Link>
//         </div>
//       </CardFooter>
//     </Card>;
// };
// const PropertiesData = async () => {
//   const propertiesData = await getAllProperty();
//   return <Col xl={9} lg={12}>
//       <Row>
//         {propertiesData.map((item, idx) => <Col lg={4} md={6} key={idx}>
//             <PropertiesCard {...item} />
//           </Col>)}
//       </Row>
//       <div className="p-3 border-top">
//         <nav aria-label="Page navigation example">
//           <ul className="pagination justify-content-end mb-0">
//             <li className="page-item">
//               <Link className="page-link" href="">
//                 Previous
//               </Link>
//             </li>
//             <li className="page-item active">
//               <Link className="page-link" href="">
//                 1
//               </Link>
//             </li>
//             <li className="page-item">
//               <Link className="page-link" href="">
//                 2
//               </Link>
//             </li>
//             <li className="page-item">
//               <Link className="page-link" href="">
//                 3
//               </Link>
//             </li>
//             <li className="page-item">
//               <Link className="page-link" href="">
//                 Next
//               </Link>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </Col>;
// };
// export default PropertiesData;

// RentGridsAdminFrontend/src/app/(admin)/property/grid/components/PropertiesData.jsx
'use client';

import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { getAllProperty } from '@/helpers/getAllProperty';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Card, CardBody, CardFooter, Col, Row } from 'react-bootstrap';

// Individual Property Card Component
const PropertiesCard = ({ property }) => {
  // Use REAL API field names
  const {
    _id,
    title,
    property_type,
    listing_type,
    bedroom,
    bathroom,
    area,
    floor_no,
    monthly_rent,
    sale_price,
    city,
    locality,
    images,
    status
  } = property;

  // Calculate price based on listing type
  const price = listing_type === 'rent' ? monthly_rent : sale_price;
  const location = `${city || ''} ${locality || ''}`.trim();
  
  // Handle images
  const hasImages = images && images.length > 0;
  const mainImage = hasImages ? images[0] : null;

  // Get icon based on property type
  const getPropertyIcon = (type) => {
    switch (type) {
      case 'apartment': return 'solar:home-2-broken';
      case 'villa': return 'solar:house-broken';
      case 'office': return 'solar:building-broken';
      case 'commercial': return 'solar:shop-broken';
      default: return 'solar:home-smile-broken';
    }
  };

  // Get variant color based on listing type
  const getVariantColor = (type) => {
    switch (type) {
      case 'rent': return 'success';
      case 'sale': return 'primary';
      case 'both': return 'warning';
      default: return 'secondary';
    }
  };

  return (
    <Card className="overflow-hidden h-100">
      <div className="position-relative">
        {hasImages && mainImage ? (
          <img 
            src={mainImage.url.startsWith('http') ? mainImage.url : `http://localhost:5000${mainImage.url}`}
            alt={title}
            className="img-fluid rounded-top"
            style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            onError={(e) => {
              e.target.src = '/images/properties/default.jpg';
            }}
          />
        ) : (
          <div 
            className="img-fluid rounded-top d-flex align-items-center justify-content-center bg-light"
            style={{ width: '100%', height: '200px' }}
          >
            <IconifyIcon icon="solar:home-smile-broken" width={48} height={48} className="text-muted" />
          </div>
        )}
        
        <span className="position-absolute top-0 start-0 p-1">
          <button 
            type="button" 
            className="btn bg-warning-subtle avatar-sm d-inline-flex align-items-center justify-content-center fs-20 rounded text-warning"
          >
            <IconifyIcon icon="solar:bookmark-broken" />
          </button>
        </span>
        
        <span className="position-absolute top-0 end-0 p-1">
          <span className={`badge bg-${getVariantColor(listing_type)} text-white fs-13 text-capitalize`}>
            {listing_type || 'Unknown'}
          </span>
        </span>
      </div>
      
      <CardBody>
        <div className="d-flex align-items-center gap-2 mb-2">
          <div className="avatar bg-light rounded flex-centered">
            <IconifyIcon icon={getPropertyIcon(property_type)} width={24} height={24} className="fs-24 text-primary" />
          </div>
          <div className="flex-grow-1">
            <Link href={`/property/details/${_id}`} className="text-dark fw-medium fs-16 d-block">
              {title || 'Untitled Property'}
            </Link>
            <p className="text-muted mb-0 small">{location || 'Location not specified'}</p>
          </div>
        </div>
        
        <Row className="mt-3 g-2">
          <Col lg={6} xs={6}>
            <span className="badge bg-light-subtle text-muted border fs-12 w-100">
              <IconifyIcon icon="solar:bed-broken" className="align-middle me-1" />
              {bedroom || 0} Beds
            </span>
          </Col>
          <Col lg={6} xs={6}>
            <span className="badge bg-light-subtle text-muted border fs-12 w-100">
              <IconifyIcon icon="solar:bath-broken" className="align-middle me-1" />
              {bathroom || 0} Bath
            </span>
          </Col>
          <Col lg={6} xs={6}>
            <span className="badge bg-light-subtle text-muted border fs-12 w-100">
              <IconifyIcon icon="solar:scale-broken" className="align-middle me-1" />
              {area || 0} {property.area_unit || 'sqft'}
            </span>
          </Col>
          <Col lg={6} xs={6}>
            <span className="badge bg-light-subtle text-muted border fs-12 w-100">
              <IconifyIcon icon="solar:double-alt-arrow-up-broken" className="align-middle me-1" />
              Floor {floor_no || 0}
            </span>
          </Col>
        </Row>
        
        <div className="mt-3">
          <span className={`badge bg-${status === 'published' ? 'success' : 'secondary'}-subtle text-${status === 'published' ? 'success' : 'secondary'} fs-12`}>
            {status || 'draft'}
          </span>
          {property.is_featured && (
            <span className="badge bg-warning-subtle text-warning fs-12 ms-1">
              Featured
            </span>
          )}
          {property.is_verified && (
            <span className="badge bg-info-subtle text-info fs-12 ms-1">
              Verified
            </span>
          )}
        </div>
      </CardBody>
      
      <CardFooter className="bg-light-subtle d-flex justify-content-between align-items-center border-top">
        <div>
          <p className="fw-bold text-dark fs-16 mb-0">
            ${price ? price.toLocaleString() : '0'}
            {listing_type === 'rent' ? '/month' : ''}
          </p>
          <small className="text-muted">{property_type} • {city}</small>
        </div>
        <div>
          <Link href={`/property/details/${_id}`} className="btn btn-primary btn-sm">
            View Details
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

// Main Grid Component
const PropertiesData = () => {
  const [propertiesData, setPropertiesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        console.log('🔄 Fetching properties for grid view...');
        const data = await getAllProperty();
        console.log('✅ Grid properties received:', data.length);
        setPropertiesData(data);
      } catch (error) {
        console.error('❌ Error fetching properties for grid:', error);
        setPropertiesData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return (
      <Col xl={9} lg={12}>
        <Row>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Col lg={4} md={6} key={item} className="mb-4">
              <Card className="h-100">
                <CardBody className="text-center py-5">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <p className="mt-2 mb-0">Loading property...</p>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Col>
    );
  }

  return (
    <Col xl={9} lg={12}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h5 className="mb-1">Properties Grid View</h5>
          <p className="text-muted mb-0">Showing {propertiesData.length} properties</p>
        </div>
        <div className="text-muted">
          <small>API: http://localhost:5000/api/properties</small>
        </div>
      </div>

      {propertiesData.length === 0 ? (
        <Card>
          <CardBody className="text-center py-5">
            <IconifyIcon icon="solar:home-smile-broken" width={64} height={64} className="text-muted mb-3" />
            <h5>No Properties Found</h5>
            <p className="text-muted">No properties available in the database.</p>
          </CardBody>
        </Card>
      ) : (
        <>
          <Row>
            {propertiesData.map((property, idx) => (
              <Col lg={4} md={6} key={property._id || idx} className="mb-4">
                <PropertiesCard property={property} />
              </Col>
            ))}
          </Row>
          
          <div className="p-3 border-top mt-4">
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-center mb-0">
                <li className="page-item disabled">
                  <span className="page-link">Previous</span>
                </li>
                <li className="page-item active">
                  <span className="page-link">1</span>
                </li>
                <li className="page-item">
                  <span className="page-link">2</span>
                </li>
                <li className="page-item">
                  <span className="page-link">3</span>
                </li>
                <li className="page-item disabled">
                  <span className="page-link">Next</span>
                </li>
              </ul>
            </nav>
          </div>
        </>
      )}
    </Col>
  );
};

export default PropertiesData;
