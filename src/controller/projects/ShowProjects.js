import Project from '../../model/projects/project.js';

export default async(req, res) => {
    await Project.sync();
    const projects = await Project.findAll({
        attributes: ['id', 'name', 'description', 'img', 'deploy', 'github']
    });
    res.status(200).json({ "projects": projects });
}