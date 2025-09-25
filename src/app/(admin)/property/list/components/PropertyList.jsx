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
import Image from 'next/image';
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
        setPropertyListData(data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

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
            </div>
            <Dropdown>
              <DropdownToggle as={'a'} className="btn btn-sm btn-outline-light rounded content-none icons-center" data-bs-toggle="dropdown" aria-expanded="false">
                This Month <IconifyIcon className="ms-1" width={16} height={16} icon="ri:arrow-down-s-line" />
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-end">
                <DropdownItem>Download</DropdownItem>
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
                      No properties found
                    </td>
                  </tr>
                ) : (
                  propertyListData.map((item, idx) => {
                    // Use REAL API field names
                    const price = item.listing_type === 'rent' ? item.monthly_rent : item.sale_price;
                    const location = `${item.city || ''} ${item.locality || ''}`.trim();
                    
                    // Handle images - check if images array exists and has items
                    const hasImages = item.images && item.images.length > 0;
                    const mainImage = hasImages ? item.images[0] : null;

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
                            <div>
                              {hasImages && mainImage ? (
                                <img 
                                  src={mainImage.url.startsWith('http') ? mainImage.url : `http://localhost:5000${mainImage.url}`}
                                  alt={item.title}
                                  width={48}
                                  height={48}
                                  className="avatar-md rounded border border-light border-3"
                                  style={{ objectFit: 'cover' }}
                                  onError={(e) => {
                                    e.target.src = '/images/properties/default.jpg';
                                  }}
                                />
                              ) : (
                                <div className="avatar-md rounded border border-light border-3 bg-light-subtle d-flex align-items-center justify-content-center">
                                  <IconifyIcon icon="solar:home-smile-broken" width={24} height={24} className="text-muted" />
                                </div>
                              )}
                            </div>
                            <div>
                              <Link href={`/property/details/${item._id}`} className="text-dark fw-medium fs-15">
                                {item.title || 'Untitled Property'}
                              </Link>
                              <br />
                              <small className="text-muted">{item.property_type}</small>
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
                            <IconifyIcon icon="solar:bed-broken" className="align-middle fs-16" /> 
                            {item.bedroom || item.bedrooms || '-'}
                          </p>
                        </td>
                        <td>{location || '-'}</td>
                        <td>
                          ${price ? price.toLocaleString() : '0'}
                          {item.listing_type === 'rent' ? '/month' : ''}
                        </td>
                        <td>
                          <span className={`badge bg-${item.status === 'published' ? 'success' : 'secondary'}-subtle text-${item.status === 'published' ? 'success' : 'secondary'} py-1 px-2 fs-12 text-capitalize`}>
                            {item.status || 'draft'}
                          </span>
                        </td>
                        <td>
                          <div className="d-flex gap-2">
                            <Button variant="light" size="sm" title="View">
                              <IconifyIcon icon="solar:eye-broken" className="align-middle fs-18" />
                            </Button>
                            <Button variant="soft-primary" size="sm" title="Edit">
                              <IconifyIcon icon="solar:pen-2-broken" className="align-middle fs-18" />
                            </Button>
                            <Button variant="soft-danger" size="sm" title="Delete">
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
          <CardFooter>
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-end mb-0">
                <li className="page-item">
                  <Link className="page-link" href="#">
                    Previous
                  </Link>
                </li>
                <li className="page-item active">
                  <Link className="page-link" href="#">
                    1
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" href="#">
                    2
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" href="#">
                    3
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" href="#">
                    Next
                  </Link>
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

// import IconifyIcon from '@/components/wrappers/IconifyIcon';
// import { getAllProperty } from '@/helpers/getAllProperty';
// import Image from 'next/image';
// import Link from 'next/link';
// import { Button, Card, CardFooter, CardHeader, CardTitle, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'react-bootstrap';

// const PropertyList = async () => {
//   const propertyListData = await getAllProperty();

//   return (
//     <Row>
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
//                   <th style={{ width: 20 }}>
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
//                 {propertyListData.length === 0 ? (
//                   <tr>
//                     <td colSpan={9} className="text-center">No properties found.</td>
//                   </tr>
//                 ) : (
//                   propertyListData.map((item, idx) => (
//                     <tr key={item._id || idx}>
//                       <td>
//                         <div className="form-check">
//                           <input type="checkbox" className="form-check-input" id={`customCheck${idx+2}`} />
//                           <label className="form-check-label" htmlFor={`customCheck${idx+2}`}></label>
//                         </div>
//                       </td>
//                       <td>
//                         <div className="d-flex align-items-center gap-2">
//                           <div>
//                             {item.image ? (
//                               <Image
//                                 src={item.image.startsWith('http') ? item.image : `/uploads/${item.image}`}
//                                 alt="properties"
//                                 width={48}
//                                 height={48}
//                                 className="avatar-md rounded border border-light border-3"
//                               />
//                             ) : (
//                               <div className="avatar-md rounded border border-light border-3 bg-light-subtle" />
//                             )}
//                           </div>
//                           <div>
//                             <Link href={`/property/details/${item._id}`} className="text-dark fw-medium fs-15">
//                               {item.title || item.name}
//                             </Link>
//                           </div>
//                         </div>
//                       </td>
//                       <td>{item.area || item.size || '-'} ft</td>
//                       <td>{item.property_type || 'Residences'}</td>
//                       <td>
//                         <span className={`badge bg-${item.listing_type === 'Rent' ? 'success' : item.listing_type === 'Sold' ? 'danger' : 'warning'}-subtle text-${item.listing_type === 'Rent' ? 'success' : item.listing_type === 'Sold' ? 'danger' : 'warning'} py-1 px-2 fs-13`}>
//                           {item.listing_type}
//                         </span>
//                       </td>
//                       <td>
//                         <p className="mb-0">
//                           <IconifyIcon icon="solar:bed-broken" className="align-middle fs-16" /> {item.bedrooms || item.beds || '-'}
//                         </p>
//                       </td>
//                       <td>{item.country || item.location || '-'}</td>
//                       <td>${item.price || item.monthly_rent || '-'} .00</td>
//                       <td>
//                         <div className="d-flex gap-2">
//                           <Button variant="light" size="sm">
//                             <IconifyIcon icon="solar:eye-broken" className="align-middle fs-18" />
//                           </Button>
//                           <Button variant="soft-primary" size="sm">
//                             <IconifyIcon icon="solar:pen-2-broken" className="align-middle fs-18" />
//                           </Button>
//                           <Button variant="soft-danger" size="sm">
//                             <IconifyIcon icon="solar:trash-bin-minimalistic-2-broken" className="align-middle fs-18" />
//                           </Button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))
//                 )}
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
//     </Row>
//   );
// };

// export default PropertyList;



// RentGridsAdminFrontend/src/app/(admin)/property/list/components/PropertyList.jsx
// 'use client'; // Add this for client-side functionality

// import IconifyIcon from '@/components/wrappers/IconifyIcon';
// import { getAllProperty } from '@/helpers/getAllProperty';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useState, useEffect } from 'react';
// import { Button, Card, CardBody, CardFooter, CardHeader, CardTitle, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'react-bootstrap';

// const PropertyList = () => {
//   const [propertyListData, setPropertyListData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProperties = async () => {
//       try {
//         const data = await getAllProperty();
//         setPropertyListData(data);
//       } catch (error) {
//         console.error('Error fetching properties:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProperties();
//   }, []);

//   if (loading) {
//     return (
//       <Row>
//         <Col xl={12}>
//           <Card>
//             <CardBody className="text-center py-5">
//               <div className="spinner-border text-primary" role="status">
//                 <span className="visually-hidden">Loading...</span>
//               </div>
//               <p className="mt-2 mb-0">Loading properties...</p>
//             </CardBody>
//           </Card>
//         </Col>
//       </Row>
//     );
//   }

//   return (
//     <Row>
//       <Col xl={12}>
//         <Card>
//           <CardHeader className="d-flex justify-content-between align-items-center border-bottom">
//             <div>
//               <CardTitle as={'h4'} className="mb-0">
//                 All Properties List ({propertyListData.length})
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
//                   <th style={{ width: 20 }}>
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
//                 {propertyListData.length === 0 ? (
//                   <tr>
//                     <td colSpan={9} className="text-center py-4">
//                       <div className="text-muted">
//                         <IconifyIcon icon="solar:home-smile-broken" width={48} height={48} className="text-muted mb-2" />
//                         <p className="mb-0">No properties found.</p>
//                         <small>Make sure your backend server is running on port 5000</small>
//                       </div>
//                     </td>
//                   </tr>
//                 ) : (
//                   propertyListData.map((item, idx) => (
//                     <tr key={item._id || idx}>
//                       <td>
//                         <div className="form-check">
//                           <input type="checkbox" className="form-check-input" id={`customCheck${idx+2}`} />
//                           <label className="form-check-label" htmlFor={`customCheck${idx+2}`}></label>
//                         </div>
//                       </td>
//                       <td>
//                         <div className="d-flex align-items-center gap-2">
//                           <div>
//                             {item.images && item.images.length > 0 ? (
//                               <Image
//                                 src={item.images[0].url.startsWith('http') ? item.images[0].url : `http://localhost:5000${item.images[0].url}`}
//                                 alt={item.title}
//                                 width={48}
//                                 height={48}
//                                 className="avatar-md rounded border border-light border-3"
//                                 onError={(e) => {
//                                   e.target.src = '/images/properties/default.jpg';
//                                 }}
//                               />
//                             ) : (
//                               <div className="avatar-md rounded border border-light border-3 bg-light-subtle d-flex align-items-center justify-content-center">
//                                 <IconifyIcon icon="solar:home-smile-broken" width={24} height={24} className="text-muted" />
//                               </div>
//                             )}
//                           </div>
//                           <div>
//                             <Link href={`/property/details/${item._id}`} className="text-dark fw-medium fs-15">
//                               {item.title || 'Untitled Property'}
//                             </Link>
//                             <br />
//                             <small className="text-muted">{item.city || item.locality || ''}</small>
//                           </div>
//                         </div>
//                       </td>
//                       <td>{item.area ? `${item.area} ft` : '-'}</td>
//                       <td className="text-capitalize">{item.property_type || '-'}</td>
//                       <td>
//                         <span className={`badge bg-${item.listing_type === 'rent' ? 'success' : item.listing_type === 'sale' ? 'primary' : 'warning'}-subtle text-${item.listing_type === 'rent' ? 'success' : item.listing_type === 'sale' ? 'primary' : 'warning'} py-1 px-2 fs-13 text-capitalize`}>
//                           {item.listing_type || '-'}
//                         </span>
//                       </td>
//                       <td>
//                         <p className="mb-0">
//                           <IconifyIcon icon="solar:bed-broken" className="align-middle fs-16" /> {item.bedroom || item.bedrooms || '-'}
//                         </p>
//                       </td>
//                       <td>{item.city || item.location || '-'}</td>
//                       <td>
//                         ${item.monthly_rent || item.sale_price || item.price || '0'} 
//                         {item.listing_type === 'rent' ? '/month' : ''}
//                       </td>
//                       <td>
//                         <div className="d-flex gap-2">
//                           <Button variant="light" size="sm" title="View">
//                             <IconifyIcon icon="solar:eye-broken" className="align-middle fs-18" />
//                           </Button>
//                           <Button variant="soft-primary" size="sm" title="Edit">
//                             <IconifyIcon icon="solar:pen-2-broken" className="align-middle fs-18" />
//                           </Button>
//                           <Button variant="soft-danger" size="sm" title="Delete">
//                             <IconifyIcon icon="solar:trash-bin-minimalistic-2-broken" className="align-middle fs-18" />
//                           </Button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>
//           <CardFooter>
//             <nav aria-label="Page navigation example">
//               <ul className="pagination justify-content-end mb-0">
//                 <li className="page-item disabled">
//                   <Link className="page-link" href="#">
//                     Previous
//                   </Link>
//                 </li>
//                 <li className="page-item active">
//                   <Link className="page-link" href="#">
//                     1
//                   </Link>
//                 </li>
//                 <li className="page-item">
//                   <Link className="page-link" href="#">
//                     2
//                   </Link>
//                 </li>
//                 <li className="page-item">
//                   <Link className="page-link" href="#">
//                     3
//                   </Link>
//                 </li>
//                 <li className="page-item">
//                   <Link className="page-link" href="#">
//                     Next
//                   </Link>
//                 </li>
//               </ul>
//             </nav>
//           </CardFooter>
//         </Card>
//       </Col>
//     </Row>
//   );
// };

// export default PropertyList;