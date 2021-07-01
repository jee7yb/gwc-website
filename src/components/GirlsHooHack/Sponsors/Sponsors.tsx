import React , { useEffect, useState } from 'react';
import { request } from 'graphql-request';
import googleCloud from '../../../assets/images/google-cloud.png';
import stickerMule from '../../../assets/images/sticker-mule.png';
import wolfram from '../../../assets/images/wolfram.png';
import hackerearth from '../../../assets/images/hackerearth.png';
import uvads from '../../../assets/images/uva-datascience.png';
import {Row, Col} from 'react-bootstrap';
import {isMobile} from 'react-device-detect';
import Image from 'react-bootstrap/Image'

function Sponsors() {

  const [sponsors, setSponsors] = useState<any[]>([]);

  useEffect(() => {
    const fetchSponsors = async () => {
      const { hackathonSponsors } = await request(
        process.env.REACT_APP_GRAPHCMS_URL ? process.env.REACT_APP_GRAPHCMS_URL : "",
        `
          { 
            hackathonSponsors {
              sponsorImage {
                url
              }
              sponsorName
              sponsorUrl
            }
          }
        `
      );
      setSponsors(hackathonSponsors);
    };

    fetchSponsors();
  }, []);

  return (
    <Row className={`justify-content-center py-5`}>
      <Col sm={10} xs={11} className={isMobile ? "my-3" : "my-5 py-5"}>
        <h2 className="text-orange hack mb-5">Sponsors</h2>
      {/*<div className="mx-auto" style={{width:"85%"}}>*/}
        <Row className={`${isMobile ? "mt-5" : "mt-1"} d-flex justify-content-around`}>
          {sponsors.map(simg => 
            <Col md={2} xs={6} className="my-auto mr-3">
              <a href={simg.sponsorUrl} target="_blank" rel="noreferrer"><Image src={simg.sponsorImage.url} alt={simg.sponsorName} fluid /></a>
            </Col>
          )}
        </Row>
      </Col>
    </Row>
  );
}

export default Sponsors;
