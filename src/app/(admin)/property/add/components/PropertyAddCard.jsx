// import properties1 from '@/assets/images/properties/p-1.jpg';
// import IconifyIcon from '@/components/wrappers/IconifyIcon';
// import { currency } from '@/context/constants';
// import Image from 'next/image';
// import { Button, Card, CardBody, CardFooter, Col, Row } from 'react-bootstrap';
// const PropertyAddCard = () => {
//   return <Col xl={3} lg={4}>
//       <Card>
//         <CardBody>
//           <div className="position-relative">
//             <Image src={properties1} alt="properties" className="img-fluid rounded bg-light" />
//             <span className="position-absolute top-0 end-0 p-1">
//               <span className="badge bg-success text-light fs-13">For Rent</span>
//             </span>
//           </div>
//           <div className="mt-3">
//             <h4 className="mb-1">
//               Dvilla Residences Batu<span className="fs-14 text-muted ms-1">(Residences)</span>
//             </h4>
//             <p className="mb-1">4604 , Philli Lane Kiowa U.S.A</p>
//             <h5 className="text-dark fw-medium mt-3">Price :</h5>
//             <h4 className="fw-semibold mt-2 text-muted">{currency}8,930.00</h4>
//           </div>
//           <Row className="mt-2 g-2">
//             <Col lg={3} xs={3}>
//               <span className="badge bg-light-subtle text-muted border fs-12">
//                 <span className="fs-16">
//                   <IconifyIcon icon="solar:bed-broken" className="align-middle" />
//                 </span>
//                 &nbsp;5 Beds
//               </span>
//             </Col>
//             <Col lg={3} xs={3}>
//               <span className="badge bg-light-subtle text-muted border fs-12">
//                 <span className="fs-16">
//                   <IconifyIcon icon="solar:bath-broken" className="align-middle" />
//                 </span>
//                 &nbsp;4 Bath
//               </span>
//             </Col>
//             <Col lg={3} xs={3}>
//               <span className="badge bg-light-subtle text-muted border fs-12">
//                 <span className="fs-16">
//                   <IconifyIcon icon="solar:scale-broken" className="align-middle" />
//                 </span>
//                 &nbsp;1400ft
//               </span>
//             </Col>
//             <Col lg={3} xs={3}>
//               <span className="badge bg-light-subtle text-muted border fs-12">
//                 <span className="fs-16">
//                   <IconifyIcon icon="solar:double-alt-arrow-up-broken" className="align-middle" />
//                 </span>
//                 &nbsp;3 Floor
//               </span>
//             </Col>
//           </Row>
//         </CardBody>
//         <CardFooter className="bg-light-subtle">
//           <Row className="g-2">
//             <Col lg={6}>
//               <Button variant="outline-primary" className="w-100">
//                 Add Property
//               </Button>
//             </Col>
//             <Col lg={6}>
//               <Button variant="danger" className="w-100">
//                 Cancel
//               </Button>
//             </Col>
//           </Row>
//         </CardFooter>
//       </Card>
//     </Col>;
// };
// export default PropertyAddCard;
import properties1 from '@/assets/images/properties/p-1.jpg';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { currency } from '@/context/constants';
import Image from 'next/image';
import { Button, Card, CardBody, CardFooter, Col, Row } from 'react-bootstrap';

const PropertyAddCard = () => {
  return (
    // make this column 3/12 on xl so other components can appear to the right
    <Col xl={3} lg={4} md={6} sm={12} className="mb-4">
      <Card className="h-70 shadow-sm rounded-3 overflow-hidden">
        {/* Image area (fixed height; object-fit cover for consistent crop) */}
        <div style={{ position: 'relative', width: '100%', height: 220 }}>
          <Image
            src={properties1}
            alt="properties"
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 1200px) 100vw, 300px"
            className="rounded-top"
          />
          <span className="position-absolute top-0 end-0 m-2">
            <span className="badge bg-success text-light px-2 py-1 fs-12">For Rent</span>
          </span>
        </div>

        <CardBody className="d-flex flex-column justify-content-between">
          <div>
            <h5 className="fw-bold mb-1">
              Dvilla Residences Batu
              <span className="fs-14 text-muted ms-1">(Residences)</span>
            </h5>
            <p className="text-muted mb-2">4604, Philli Lane Kiowa, U.S.A</p>

            <div className="d-flex align-items-center justify-content-between mt-2">
              <span className="fw-semibold text-dark">Price:</span>
              <h5 className="fw-bold text-danger mb-0">{currency}8,930.00</h5>
            </div>

            {/* Badges: 2x2 grid using bootstrap cols (xs=6 => two items per row) */}
            <Row className="g-2 mt-3">
              <Col xs={6}>
                <div className="badge bg-dark-subtle text-muted w-100 py-2 d-flex align-items-center justify-content-center rounded-2">
                  <IconifyIcon icon="solar:bed-broken" className="me-1 fs-16" />
                  <span className="ms-1">5 Beds</span>
                </div>
              </Col>
              <Col xs={6}>
                <div className="badge bg-dark-subtle text-muted w-100 py-2 d-flex align-items-center justify-content-center rounded-2">
                  <IconifyIcon icon="solar:bath-broken" className="me-1 fs-16" />
                  <span className="ms-1">4 Bath</span>
                </div>
              </Col>
              <Col xs={6}>
                <div className="badge bg-dark-subtle text-muted w-100 py-2 d-flex align-items-center justify-content-center rounded-2">
                  <IconifyIcon icon="solar:scale-broken" className="me-1 fs-16" />
                  <span className="ms-1">1400 ft²</span>
                </div>
              </Col>
              <Col xs={6}>
                <div className="badge bg-dark-subtle text-muted w-100 py-2 d-flex align-items-center justify-content-center rounded-2">
                  <IconifyIcon icon="solar:double-alt-arrow-up-broken" className="me-1 fs-16" />
                  <span className="ms-1">3 Floor</span>
                </div>
              </Col>
            </Row>
          </div>
        </CardBody>

        {/* Footer with vertically stacked buttons (Add on top, Cancel below) */}
        <CardFooter className="bg-transparent border-0 p-3">
          <div className="d-grid gap-2">
            <Button variant="primary" className="w-100">
              Add Property
            </Button>
            <Button variant="outline-danger" className="w-100">
              Cancel
            </Button>
          </div>
        </CardFooter>
      </Card>
    </Col>
  );
};

export default PropertyAddCard;
