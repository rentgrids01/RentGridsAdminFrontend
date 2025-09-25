'use client';

import { Card, CardBody, Form } from 'react-bootstrap';

const PropertiesFilter = () => {
  return (
    <Card>
      <CardBody>
        <h6 className="mb-3">Filters</h6>
        
        <div className="mb-3">
          <label className="form-label">Property Type</label>
          <Form.Select>
            <option value="">All Types</option>
            <option value="apartment">Apartment</option>
            <option value="villa">Villa</option>
            <option value="office">Office</option>
            <option value="commercial">Commercial</option>
          </Form.Select>
        </div>
        
        <div className="mb-3">
          <label className="form-label">Listing Type</label>
          <Form.Select>
            <option value="">All Listings</option>
            <option value="rent">For Rent</option>
            <option value="sale">For Sale</option>
            <option value="both">Both</option>
          </Form.Select>
        </div>
        
        <div className="mb-3">
          <label className="form-label">Price Range</label>
          <div className="d-flex gap-2">
            <Form.Control type="number" placeholder="Min" />
            <Form.Control type="number" placeholder="Max" />
          </div>
        </div>
        
        <button className="btn btn-primary w-100">Apply Filters</button>
      </CardBody>
    </Card>
  );
};

export default PropertiesFilter;