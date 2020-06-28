const path = require('path');

exports.createPages = async ({ graphql, actions: { createPage } }) => {
	const projectTemplate = path.resolve('src/templates/ProjectTemplate.js');

	const result = await graphql(`
		{
			allProjectsJson {
				nodes {
					id
				}
			}
		}
	`);

	result.data.allProjectsJson.nodes.forEach(node => {
		createPage({
			path: `/projects/${node.id}`,
			component: projectTemplate,
			context: node
		});
	});
};
