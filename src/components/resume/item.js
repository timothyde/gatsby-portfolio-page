import React from 'react'
import styled from 'styled-components'
import Collapsible from 'react-collapsible'

const Item = styled.div`
  display: flex;
  color: #fff;
  width: 100%;
`

const Timespan = styled.h3`
  font-weight: 300;
  margin-right: 8px;
  text-align: right;
  width: 40%;
`

const Job = styled.div`
  width: 60%;
  h3 {
    margin-bottom: 0px;
  }
`

const Institution = styled.p``

const URL = styled.a`
  color: #fff;
  text-decoration: none;
  transition: color 300ms ease-in-out;

  &:hover {
    color: rgba(255, 255, 255, 0.6);
  }
`

const ArrowContainer = styled.div`
  float: right;
  ${props =>
    props.isOpen ? 'transform: rotate(180deg)' : 'transform: rotate(0deg)'};
`

const Arrow = ({ isOpen }) => (
  <ArrowContainer isOpen={isOpen}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 49.8 49.8"
      width="24"
      height="24"
    >
      <path
        d="M24.9 35.8c-.7 0-1.4-.3-1.9-.8L6.6 18.6c-1-1-1-2.7 0-3.8 1-1 2.7-1 3.8 0l14.5 14.5 14.5-14.5c1-1 2.7-1 3.8 0 1 1 1 2.7 0 3.8L26.8 35c-.5.5-1.2.8-1.9.8z"
        fill="#fff"
      />
    </svg>
  </ArrowContainer>
)

const JobContainer = styled.div`
  h3 {
    ${props => (props.hasDescription ? 'transition: all 200ms ease;' : '')};
  }

  &:hover {
    ${props => (props.hasDescription ? 'cursor: pointer;' : '')} h3 {
      ${props =>
        props.hasDescription ? 'color: rgba(255, 255, 255, 0.6);' : ''};
    }
  }
`

const JobHeader = ({ isOpen, children, hasDescription }) => (
  <JobContainer hasDescription={!!hasDescription}>
    {hasDescription && <Arrow isOpen={isOpen} />}
    <h3>{children}</h3>
  </JobContainer>
)

const Description = styled.p``

export default ({
  title,
  institution,
  description,
  timespan,
  url,
  urlName,
}) => (
  <Item>
    <Timespan>{timespan}</Timespan>
    <Job>
      <Collapsible
        transitionTime={100}
        trigger={<JobHeader hasDescription={!!description}>{title}</JobHeader>}
        triggerWhenOpen={
          description ? (
            <JobHeader hasDescription={!!description} isOpen>
              {title}
            </JobHeader>
          ) : (
            undefined
          )
        }
      >
        <Description>{description}</Description>
      </Collapsible>
      <Institution>
        {institution}
        {url && ' - '}
        {url && (
          <URL href={url} target="_blank">
            {urlName}
          </URL>
        )}
      </Institution>
    </Job>
  </Item>
)
