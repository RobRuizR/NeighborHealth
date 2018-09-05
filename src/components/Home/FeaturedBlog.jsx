import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import { device } from './../../utils/device';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 2em;
  margin: 1.5em 0;

  font-family: ${props => props.theme.fontFamily.main};
  font-size: calc(1rem + 1vw); 


`;

const Title = styled.p`
  font-size: 1.5em;
  font-weight: 600;
  width: 60%;

  ${device.tablet} {
    width: 80%;
  }
  ${device.mobile} {
    width: 100%;
  }
`;

/* author contact info */
const Author = styled.div`
  display: flex;
  flex-direction: row;
`;
const Image = styled.img`
  max-width: fit-content;
  margin: 0 auto;
`;
const Extract = styled.span`
  display: block;
`;
const ReadMore = styled(Link)`
  display: inline-block;
  text-decoration: none;
  border: none;
  color: ${props => props.theme.color.lightBlue};
`;

const AuthorName = styled.p`
  color: ${props => props.theme.color.lightBlue};
`;

const FeaturedBlog = (props) => {

  const node = props.postData.allMarkdownRemark.edges[0].node;

  return (
    <Container>
      <Title>{node.frontmatter.title}</Title>
      <Author>
        <AuthorName>{node.frontmatter.author}</AuthorName>
      </Author>
      <Image src={node.frontmatter.thumbnail}></Image>
      <Extract>
        {node.excerpt}
        <ReadMore to={node.fields.route}>... see more</ReadMore>
      </Extract>
    </Container>
  );
}

export default FeaturedBlog;