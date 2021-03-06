import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components/macro';
import AppLayout from '../components/AppLayout';

import ReactMarkdown from 'react-markdown';
import { device } from '../utils/device';
import { graphql } from 'gatsby';

import AuthorMedia from './../components/AuthorMedia';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;

  margin: 50px 150px;
  min-height: 100vh;

  img {
    border-radius: 10px;
  }

  ${device.tablet} {
    margin: 25px 0;
    img {
      border-radius: 0;
    }
  }
`;

const ReactMD = styled(ReactMarkdown)`
  width: 100%;

  ${device.tablet} {
    padding: 0 15px;
    width: 100%;
  }

  & * {
    font-size: calc(1rem + 0.5vw);
    color: ${({ theme }) => theme.color.black};
    font-family: ${props => props.theme.fontFamily.main}, sans-serif;
    display: block;
  }

  & > * {
    align-self: flex-start;
  }

  p {
    margin: 1em 0;
    color: ${({ theme }) => theme.color.black};
    font-family: ${props => props.theme.fontFamily.main}, sans-serif;
  }

  p img {
    max-width: 100%;
    height: auto;
    max-height: 70vh;
    margin: 20px auto;
  }

  p strong {
    font-weight: bold;
    display: inline-block;
    color: ${props => props.theme.color.lightBlue};
  }

  p em {
    font-style: italic;
  }

  p a {
    display: inline;
    color: ${props => props.theme.color.lightBlue};
  }

  code {
    font-size: 0.85em;
  }

  blockquote {
    margin: 1em 0 1em 2em;
    padding: 0 10px;
    position: relative;

    p {
      font-size: 0.85em;
    }

    ::before {
      content: '';
      top: 0;
      left: 0;
      height: 100%;
      width: 0.075em;
      background: ${props => props.theme.color.lightBlue};
      position: absolute;
    }
  }

  ul,
  ol {
    list-style-position: inside;
    margin-left: 1.5em;
    li {
      display: list-item;
    }
  }

  pre {
    white-space: pre;
    border: 1px solid #ccc;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: calc(1.5rem + 1vw);
  }
`;

const Title = styled.p`
  font-size: calc(2rem + 1vw);
  color: ${({ theme }) => theme.color.black};
  font-weight: 600;
  font-family: ${props => props.theme.fontFamily.main};
  text-align: center;

  margin: 20px 0;

  align-self: flex-start;
  word-break: break-word;

  ${device.tablet} {
    margin: 0 15px;
  }
`;

const ThumbnailImage = styled.img`
  max-width: 100%;
  height: auto;
  margin: 20px 0 40px 0;

  align-self: center;
`;

export default function Template(props) {
  const { markdownRemark: post } = props.data;

  return (
    <AppLayout>
      <Container>
        <Helmet title={post.frontmatter.title} />
        <Title>{post.frontmatter.title}</Title>
        <AuthorMedia authorName={post.frontmatter.author} />
        <ThumbnailImage src={post.frontmatter.thumbnail} />
        <ReactMD source={post.rawMarkdownBody} />
      </Container>
    </AppLayout>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($route: String) {
    markdownRemark(fields: { route: { eq: $route } }) {
      html
      rawMarkdownBody
      frontmatter {
        layout
        date(formatString: "MMMM DD, YYYY")
        title
        thumbnail
        author
      }
    }
  }
`;
