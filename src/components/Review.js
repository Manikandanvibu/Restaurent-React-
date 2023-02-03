import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';


function Review({ reviewData }) {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Button className='mt-3 ms-4'
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
            >
                See Reviews
            </Button>
            <div style={{ minHeight: '150px' }}>
                <Collapse in={open} dimension="width">
                    <div id="example-collapse-text">
                        {
                            reviewData.map(data => (
                                <div>
                                    <Card body  className="mt-3">
                                        <h6>{data.name}</h6>
                                        <h6>{data.date}</h6>
                                        <h6>{data.rating}</h6>
                                        <h6>{data.comments}</h6>
                                    </Card>
                                </div>
                            ))
                        }


                    </div>
                </Collapse>
            </div>
        </>
    )
}

export default Review