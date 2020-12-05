import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Card, TitleWrap } from 'components/common';
import Star from 'components/common/Icons/Star';
import Fork from 'components/common/Icons/Fork';
import { Wrapper, Grid, Item, Content, Stats, Languages } from './styles';

export const Projects = () => {
  const { theme } = useContext(ThemeContext);
  // const {
  //   github: {
  //     viewer: {
  //       repositories: { edges },
  //     },
  //   },
  // } = useStaticQuery(
  //   graphql`
  //     {
  //       github {
  //         viewer {
  //           repositories(first: 8, orderBy: { field: STARGAZERS, direction: DESC }) {
  //             edges {
  //               node {
  //                 id
  //                 name
  //                 url
  //                 description
  //                 stargazers {
  //                   totalCount
  //                 }
  //                 forkCount
  //                 languages(first: 3) {
  //                   nodes {
  //                     id,
  //                     name
  //                   }
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `
  // );
  const projects = [
    { id: 1, name: 'Cafe Coffee', description: 'A online Coffee buy site',
  url: 'https://cafecoffee.netlify.app/',},
    { id: 2, name: 'Bombay trimming', description: 'Online Saloon booking and buy beauty products', url: 'https://bombaytrimming.netlify.app/' },
    { id: 3, name: 'Ethflix', description: 'Etherium temlate', url: 'https://ethflix.io/' },
    { id: 3, name: 'Bakery', description: 'Buy online bakery products', url: 'https://bakery-v1.netlify.app/' },
    { id: 3, name: 'Safaa', description: 'Online buy women wear', url: 'https://safaa.netlify.app/' },

  ];
  return (
    <Wrapper as={Container} id="projects">
      <h2>Projects</h2>
      <Grid>
      {projects.map(item => (
          <Item as="a" href={item.url} target="_blank" rel="noopener noreferrer" theme={theme}>
            <Card theme={theme}>
              <Content>
                <h4>{item.name}</h4>
                <p>{item.description}</p>
              </Content>
              <Stats theme={theme}>
                  <Languages>
                    {/* {
                      item.languages.map(({ id, name }) => (*/}
                        <span >
                          HTML, CSS, JAVASCRIPT, REACT
                        </span>
                      {/* ))
                    } */}
                  </Languages>
                </Stats>
            </Card>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  );
};
