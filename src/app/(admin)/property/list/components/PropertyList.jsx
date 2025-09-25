// import IconifyIcon from '@/components/wrappers/IconifyIcon';
// import { getAllProperty } from '@/helpers/getAllProperty';
// import Image from 'next/image';
// import Link from 'next/link';
// import { Button, Card, CardFooter, CardHeader, CardTitle, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'react-bootstrap';
// const PropertyList = async () => {
//   const propertyListData = await getAllProperty();
//   return <Row>
//       <Col xl={12}>
//         <Card>
//           <CardHeader className="d-flex justify-content-between align-items-center border-bottom">
//             <div>
//               <CardTitle as={'h4'} className="mb-0">
//                 All Properties List
//               </CardTitle>
//             </div>
//             <Dropdown>
//               <DropdownToggle as={'a'} className="btn btn-sm btn-outline-light rounded content-none icons-center" data-bs-toggle="dropdown" aria-expanded="false">
//                 This Month <IconifyIcon className="ms-1" width={16} height={16} icon="ri:arrow-down-s-line" />
//               </DropdownToggle>
//               <DropdownMenu className="dropdown-menu-end">
//                 <DropdownItem>Download</DropdownItem>
//                 <DropdownItem>Export</DropdownItem>
//                 <DropdownItem>Import</DropdownItem>
//               </DropdownMenu>
//             </Dropdown>
//           </CardHeader>
//           <div className="table-responsive">
//             <table className="table align-middle text-nowrap table-hover table-centered mb-0">
//               <thead className="bg-light-subtle">
//                 <tr>
//                   <th style={{
//                   width: 20
//                 }}>
//                     <div className="form-check">
//                       <input type="checkbox" className="form-check-input" id="customCheck1" />
//                       <label className="form-check-label" htmlFor="customCheck1" />
//                     </div>
//                   </th>
//                   <th>Properties Photo &amp; Name</th>
//                   <th>Size</th>
//                   <th>Property Type</th>
//                   <th>Rent/Sale</th>
//                   <th>Bedrooms</th>
//                   <th>Location</th>
//                   <th>Price</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {propertyListData.map((item, idx) => <tr key={idx}>
//                     <td>
//                       <div className="form-check">
//                         <input type="checkbox" className="form-check-input" id="customCheck2" />
//                         <label className="form-check-label" htmlFor="customCheck2">
//                           &nbsp;
//                         </label>
//                       </div>
//                     </td>
//                     <td>
//                       <div className="d-flex align-items-center gap-2">
//                         <div>
//                           <Image src={item.image} alt="properties" className="avatar-md rounded border border-light border-3" />
//                         </div>
//                         <div>
//                           <Link href="" className="text-dark fw-medium fs-15">
//                             {item.name}
//                           </Link>
//                         </div>
//                       </div>
//                     </td>
//                     <td>{item.size}ft</td>
//                     <td>Residences</td>
//                     <td>
//                       {' '}
//                       <span className={`badge bg-${item.type == 'Rent' ? 'success' : item.type == 'Sold' ? 'danger' : 'warning'}-subtle text-${item.type == 'Rent' ? 'success' : item.type == 'Sold' ? 'danger' : 'warning'} py-1 px-2 fs-13`}>
//                         {item.type}
//                       </span>
//                     </td>
//                     <td>
//                       <p className="mb-0">
//                         <IconifyIcon icon="solar:bed-broken" className="align-middle fs-16" /> {item.beds}
//                       </p>
//                     </td>
//                     <td>{item.country}</td>
//                     <td>${item.price}.00</td>
//                     <td>
//                       <div className="d-flex gap-2">
//                         <Button variant="light" size="sm">
//                           <IconifyIcon icon="solar:eye-broken" className="align-middle fs-18" />
//                         </Button>
//                         <Button variant="soft-primary" size="sm">
//                           <IconifyIcon icon="solar:pen-2-broken" className="align-middle fs-18" />
//                         </Button>
//                         <Button variant="soft-danger" size="sm">
//                           <IconifyIcon icon="solar:trash-bin-minimalistic-2-broken" className="align-middle fs-18" />
//                         </Button>
//                       </div>
//                     </td>
//                   </tr>)}
//               </tbody>
//             </table>
//           </div>
//           <CardFooter>
//             <nav aria-label="Page navigation example">
//               <ul className="pagination justify-content-end mb-0">
//                 <li className="page-item">
//                   <Link className="page-link" href="">
//                     Previous
//                   </Link>
//                 </li>
//                 <li className="page-item active">
//                   <Link className="page-link" href="">
//                     1
//                   </Link>
//                 </li>
//                 <li className="page-item">
//                   <Link className="page-link" href="">
//                     2
//                   </Link>
//                 </li>
//                 <li className="page-item">
//                   <Link className="page-link" href="">
//                     3
//                   </Link>
//                 </li>
//                 <li className="page-item">
//                   <Link className="page-link" href="">
//                     Next
//                   </Link>
//                 </li>
//               </ul>
//             </nav>
//           </CardFooter>
//         </Card>
//       </Col>
//     </Row>;
// };
// export default PropertyList;

// RentGridsAdminFrontend/src/app/(admin)/property/list/components/PropertyList.jsx
'use client';

import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { getAllProperty } from '@/helpers/getAllProperty';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button, Card, CardFooter, CardHeader, CardTitle, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'react-bootstrap';

const PropertyList = () => {
  const [propertyListData, setPropertyListData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const data = await getAllProperty();
        console.log('📦 Properties data for rendering:', data);
        
        // Debug: Check each property's images
        data.forEach((property, index) => {
          console.log(`🏠 Property ${index + 1}:`, property.title);
          console.log('📸 Images array:', property.images);
          if (property.images && property.images.length > 0) {
            property.images.forEach((img, imgIndex) => {
              console.log(`🖼️ Image ${imgIndex + 1}:`, img);
            });
          }
        });
        
        setPropertyListData(data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  // SVG data URL for fallback image
  const fallbackImageSVG = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24'%3E%3Cpath fill='%23ddd' d='M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z'/%3E%3C/svg%3E";

  // Function to get correct image URL
  const getImageUrl = (imageObj) => {
    if (!imageObj) return null;
    
    // If imageObj is a string (direct URL)
    if (typeof imageObj === 'string') {
      return imageObj.startsWith('http') ? imageObj : `http://localhost:5000${imageObj}`;
    }
    
    // If imageObj has a url property
    if (imageObj.url) {
      return imageObj.url.startsWith('http') ? imageObj.url : `http://localhost:5000${imageObj.url}`;
    }
    
    return null;
  };

  // Function to handle image error
  const handleImageError = (e, imageUrl) => {
    console.error('❌ Image failed to load:', imageUrl);
    e.target.src = fallbackImageSVG;
  };

  if (loading) {
    return (
      <Row>
        <Col xl={12}>
          <Card>
            <div className="card-body text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-2 mb-0">Loading properties from database...</p>
            </div>
          </Card>
        </Col>
      </Row>
    );
  }

  return (
    <Row>
      <Col xl={12}>
        <Card>
          <CardHeader className="d-flex justify-content-between align-items-center border-bottom">
            <div>
              <CardTitle as={'h4'} className="mb-0">
                All Properties List ({propertyListData.length})
              </CardTitle>
              <small className="text-muted">Backend: http://localhost:5000/api/properties</small>
            </div>
            <Dropdown>
              <DropdownToggle as={'a'} className="btn btn-sm btn-outline-light rounded content-none icons-center">
                Actions <IconifyIcon className="ms-1" width={16} height={16} icon="ri:arrow-down-s-line" />
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-end">
                <DropdownItem onClick={() => window.location.reload()}>Refresh</DropdownItem>
                <DropdownItem>Export</DropdownItem>
                <DropdownItem>Import</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </CardHeader>
          <div className="table-responsive">
            <table className="table align-middle text-nowrap table-hover table-centered mb-0">
              <thead className="bg-light-subtle">
                <tr>
                  <th style={{ width: 20 }}>
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="customCheck1" />
                      <label className="form-check-label" htmlFor="customCheck1" />
                    </div>
                  </th>
                  <th>Properties Photo & Name</th>
                  <th>Size</th>
                  <th>Property Type</th>
                  <th>Rent/Sale</th>
                  <th>Bedrooms</th>
                  <th>Location</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {propertyListData.length === 0 ? (
                  <tr>
                    <td colSpan={10} className="text-center py-4">
                      <div className="text-muted">
                        <IconifyIcon icon="solar:home-smile-broken" width={48} height={48} className="text-muted mb-2" />
                        <p className="mb-0">No properties found in database</p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  propertyListData.map((item, idx) => {
                    const price = item.listing_type === 'rent' ? item.monthly_rent : item.sale_price;
                    const location = `${item.city || ''} ${item.locality || ''}`.trim();
                    
                    // Enhanced image handling
                    const hasImages = item.images && item.images.length > 0;
                    let mainImage = null;
                    let imageUrl = null;

                    if (hasImages) {
                      // Try to find main image or use first image
                      mainImage = item.images.find(img => img.is_main) || item.images[0];
                      imageUrl = getImageUrl(mainImage);
                    }

                    // If no images in array, try direct image field (fallback)
                    if (!hasImages && item.image) {
                      imageUrl = getImageUrl(item.image);
                    }

                    return (
                      <tr key={item._id || idx}>
                        <td>
                          <div className="form-check">
                            <input type="checkbox" className="form-check-input" id={`customCheck${idx + 2}`} />
                            <label className="form-check-label" htmlFor={`customCheck${idx + 2}`} />
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <div style={{ position: 'relative' }}>
                              {imageUrl ? (
                                <>
                                  <img 
                                    src={imageUrl}
                                    alt={item.title}
                                    width={48}
                                    height={48}
                                    className="avatar-md rounded border border-light border-3"
                                    style={{ objectFit: 'cover' }}
                                    onError={(e) => handleImageError(e, imageUrl)}
                                    onLoad={() => console.log('✅ Image loaded successfully:', imageUrl)}
                                  />
                                  {hasImages && item.images.length > 1 && (
                                    <span className="position-absolute top-0 end-0 translate-middle badge bg-primary rounded-pill fs-10">
                                      +{item.images.length - 1}
                                    </span>
                                  )}
                                </>
                              ) : (
                                <div 
                                  className="avatar-md rounded border border-light border-3 bg-light-subtle d-flex align-items-center justify-content-center"
                                  title="No image available"
                                >
                                  <IconifyIcon icon="solar:home-smile-broken" width={24} height={24} className="text-muted" />
                                </div>
                              )}
                            </div>
                            <div>
                              <Link href={`/property/details/${item._id}`} className="text-dark fw-medium fs-15 d-block">
                                {item.title || 'Untitled Property'}
                              </Link>
                              <small className="text-muted">ID: {item._id?.substring(0, 8)}...</small>
                              <br />
                              <small className="text-muted">
                                Images: {item.images ? item.images.length : 0}
                              </small>
                            </div>
                          </div>
                        </td>
                        <td>{item.area ? `${item.area} ${item.area_unit || 'sqft'}` : '-'}</td>
                        <td className="text-capitalize">{item.property_type || '-'}</td>
                        <td>
                          <span className={`badge bg-${item.listing_type === 'rent' ? 'success' : item.listing_type === 'sale' ? 'primary' : 'warning'}-subtle text-${item.listing_type === 'rent' ? 'success' : item.listing_type === 'sale' ? 'primary' : 'warning'} py-1 px-2 fs-13 text-capitalize`}>
                            {item.listing_type || '-'}
                          </span>
                        </td>
                        <td>
                          <p className="mb-0">
                            <IconifyIcon icon="solar:bed-broken" className="align-middle fs-16 me-1" /> 
                            {item.bedroom || item.bedrooms || '0'}
                          </p>
                        </td>
                        <td>
                          <div>
                            <div className="fw-medium">{item.city || 'N/A'}</div>
                            <small className="text-muted">{item.locality || ''}</small>
                          </div>
                        </td>
                        <td>
                          <div className="fw-bold text-primary">
                            ${price ? price.toLocaleString() : '0'}
                            {item.listing_type === 'rent' ? '/month' : ''}
                          </div>
                        </td>
                        <td>
                          <span className={`badge bg-${item.status === 'published' ? 'success' : 'secondary'}-subtle text-${item.status === 'published' ? 'success' : 'secondary'} py-1 px-2 fs-12 text-capitalize`}>
                            {item.status || 'draft'}
                          </span>
                        </td>
                        <td>
                          <div className="d-flex gap-2">
                            <Button 
                              variant="light" 
                              size="sm" 
                              title="View Details"
                              onClick={() => window.open(`/property/details/${item._id}`, '_blank')}
                            >
                              <IconifyIcon icon="solar:eye-broken" className="align-middle fs-18" />
                            </Button>
                            <Button 
                              variant="soft-primary" 
                              size="sm" 
                              title="Edit Property"
                              onClick={() => window.open(`/property/edit/${item._id}`, '_blank')}
                            >
                              <IconifyIcon icon="solar:pen-2-broken" className="align-middle fs-18" />
                            </Button>
                            <Button 
                              variant="soft-danger" 
                              size="sm" 
                              title="Delete Property"
                              onClick={() => {
                                if (confirm(`Are you sure you want to delete "${item.title}"?`)) {
                                  console.log('Delete property:', item._id);
                                }
                              }}
                            >
                              <IconifyIcon icon="solar:trash-bin-minimalistic-2-broken" className="align-middle fs-18" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
          <CardFooter className="d-flex justify-content-between align-items-center">
            <div>
              <small className="text-muted">
                Showing {propertyListData.length} properties • Backend: localhost:5000
              </small>
            </div>
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-end mb-0">
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
          </CardFooter>
        </Card>
      </Col>
    </Row>
  );
};

export default PropertyList;