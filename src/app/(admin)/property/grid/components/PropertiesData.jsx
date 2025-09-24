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
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { getAllProperty } from '@/helpers/getAllProperty';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardBody, CardFooter, Col, Row } from 'react-bootstrap';

// Dynamic card for each property
const PropertiesCard = ({
  _id,
  image,
  title,
  location,
  area,
  property_type,
  listing_type,
  bedrooms,
  bathrooms,
  floor,
  price,
  saved
}) => {
  return (
    <Card className="overflow-hidden">
      <div className="position-relative">
        {image ? (
          <Image
            src={image.startsWith('http') ? image : `/uploads/${image}`}
            alt="property"
            width={500}
            height={250}
            className="img-fluid rounded-top"
            style={{ objectFit: "cover" }}
          />
        ) : (
          <div className="img-fluid rounded-top bg-light-subtle" style={{ height: 200 }} />
        )}
        <span className="position-absolute top-0 start-0 p-1">
          {saved ? (
            <button type="button" className="btn btn-warning avatar-sm d-inline-flex align-items-center justify-content-center fs-20 rounded text-light ">
              <IconifyIcon icon="solar:bookmark-broken" />
            </button>
          ) : (
            <button type="button" className="btn bg-warning-subtle avatar-sm d-inline-flex align-items-center justify-content-center fs-20 rounded text-warning">
              <IconifyIcon icon="solar:bookmark-broken" />
            </button>
          )}
        </span>
        <span className="position-absolute top-0 end-0 p-1">
          <span className={`badge bg-${listing_type === 'Rent' ? 'success' : listing_type === 'Sold' ? 'danger' : 'warning'} text-white fs-13`}>
            {listing_type}
          </span>
        </span>
      </div>
      <CardBody>
        <div className="d-flex align-items-center gap-2">
          <div className="avatar bg-light rounded flex-centered">
            {/* Example icon, you can map property_type to specific icons if you want */}
            <IconifyIcon icon="solar:home-broken" width={24} height={24} className="fs-24 text-primary" />
          </div>
          <div>
            <Link href={`/property/details/${_id}`} className="text-dark fw-medium fs-16">
              {title}
            </Link>
            <p className="text-muted mb-0">{location}</p>
          </div>
        </div>
        <Row className="mt-2 g-2">
          <Col lg={4} xs={4}>
            <span className="badge bg-light-subtle text-muted border fs-12">
              <IconifyIcon icon="solar:bed-broken" className="align-middle fs-16" />
              &nbsp;{bedrooms || '-'} Beds
            </span>
          </Col>
          <Col lg={4} xs={4}>
            <span className="badge bg-light-subtle text-muted border fs-12">
              <IconifyIcon icon="solar:bath-broken" className="align-middle fs-16" />
              &nbsp;{bathrooms || '-'} Bath
            </span>
          </Col>
          <Col lg={4} xs={4}>
            <span className="badge bg-light-subtle text-muted border fs-12">
              <IconifyIcon icon="solar:scale-broken" className="align-middle fs-16" />
              &nbsp;{area || '-'} ft
            </span>
          </Col>
          <Col lg={4} xs={4}>
            <span className="badge bg-light-subtle text-muted border fs-12">
              <IconifyIcon icon="solar:double-alt-arrow-up-broken" className="align-middle fs-16" />
              &nbsp;{floor || '-'} Floor
            </span>
          </Col>
        </Row>
      </CardBody>
      <CardFooter className="bg-light-subtle d-flex justify-content-between align-items-center border-top">
        {listing_type === 'Sold' ? (
          <p className="fw-medium text-muted text-decoration-line-through fs-16 mb-0">${price || '-'} </p>
        ) : (
          <p className="fw-medium text-dark fs-16 mb-0">${price || '-'} </p>
        )}
        <div>
          <Link href={`/property/details/${_id}`} className="link-primary fw-medium">
            More Inquiry <IconifyIcon icon="ri:arrow-right-line" className="align-middle" />
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

const PropertiesData = async () => {
  const propertiesData = await getAllProperty();

  return (
    <Col xl={9} lg={12}>
      <Row>
        {propertiesData.length === 0 ? (
          <Col>
            <p className="text-center my-5">No properties found.</p>
          </Col>
        ) : (
          propertiesData.map((item, idx) => (
            <Col lg={4} md={6} key={item._id || idx}>
              <PropertiesCard {...item} />
            </Col>
          ))
        )}
      </Row>
      <div className="p-3 border-top">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-end mb-0">
            <li className="page-item">
              <Link className="page-link" href="">
                Previous
              </Link>
            </li>
            <li className="page-item active">
              <Link className="page-link" href="">
                1
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" href="">
                2
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" href="">
                3
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" href="">
                Next
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </Col>
  );
};

export default PropertiesData;