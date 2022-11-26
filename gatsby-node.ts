import { GatsbyNode } from 'gatsby';

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = ({ actions }) => {
	actions.createTypes(`
    type ProjectsJson implements Node {
      jsonId: String!
      title: String!
      desc: String!
      tech: String!
      github: String!
      link: String!
      dim: ProjectsJsonDim!
      info: [ProjectsJsonInfo!]!
    }

    type ProjectsJsonDim {
      height: Float!
      width: Float!
    }

    type ProjectsJsonInfo {
      line: String!
    }
  `);
};
