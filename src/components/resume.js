import React from 'react';
import moment from 'moment';
import { Container, Row, Col } from 'reactstrap';
import styled from "styled-components";

import styles from './resume.module.scss';

const StyledItem = styled.div`
  margin-bottom: 16px;
  h4 {
      margin-bottom: 0px;
  }
  a {
      color: white;
      text-decoration: none;
      transition: all 300ms ease;
  }
  a:hover {
      color: #e2e2e2;
  }
`

const Paragraph = styled.p`
  max-height: ${props => props.open ? "100%" : "0px"};
    overflow: hidden;
    transition: all 0.3s ease-out;
`

const Company = styled.p`
  font-size: 10px;
  margin-bottom: 0px;
`

const Timespan = styled.p`
  font-size: 10px;
  margin-bottom: 0px;
`

class TimelineItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: true
    }
  }

  toggleParagraph = () => {
    this.setState({
      open: !this.state.open
    });
  }

  render = () => {

    const { position, text, institution, url, from, to } = this.props;
    const place = url ? (
      <a href={url} target='_blank'>{institution}</a>
    ) : (
        <p>{institution}</p>
      );


    return (
      <StyledItem>
        <Timespan>{from.format('MMM YYYY')} - {to.format('MMM YYYY')}</Timespan>
        <Company>
          {place}
        </Company>
        <h4 onClick={this.toggleParagraph}>{position}</h4>
        <Paragraph open={this.state.open ? 1 : 0}>
          {text}
        </Paragraph>
      </StyledItem>
    )
  }
}

export const Resume = () => {

  const item = {
    position: 'co-founder',
    text: 'I did lots of fun stuff actually.',
    institution: 'Kartenhaus Software GmbH',
    url: 'https://kartenhaus.io',
    from: moment().year(2017).month(3),
    to: moment()
  }

  const items = [
    <TimelineItem key={1} {...item} />,
    <TimelineItem key={2} {...item} />,
    <TimelineItem key={3} {...item} />
  ]

  return (
    <div>
      <Container>
        <h2>vita</h2>
        <Row>
          <Col xs='12' md='6'>
            <div className={styles.timeline}>
              <h4>experience</h4>
              <div className={styles.timeline}>
                {items}
              </div>
            </div>
          </Col>
          <Col xs='12' md='6'>
            <div className={styles.timeline}>
              <h4>education</h4>
              <div className={styles.timeline}>
                {items}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
