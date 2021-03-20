import React from 'react';
import {Card, CardBody} from "reactstrap";

function HeaderNew() {
    return (
      <div>
          <Card className ="my-2 bg-warning">
              <CardBody>
                  <h1 className="text-center my-2">Spring Boot with react CRUD</h1>
              </CardBody>
          </Card>
      </div>
    );
}

export default HeaderNew;
