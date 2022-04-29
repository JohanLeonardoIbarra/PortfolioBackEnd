import Project from '../../model/projects/project.js';

export default async(req, res) => {
    if (!req.body.name || !req.body.description || !req.body.img || !req.body.deploy || !req.body.github) {
        res.status(400).json({ "message": "Missing parameters, fill all inputs" });
    }
    try {
        const project = await Project.create({
            name: req.body.name,
            description: req.body.description,
            img: req.body.img,
            deploy: req.body.deploy,
            github: req.body.github
        });
        res.status(200).json({ "project": project });
    } catch (error) {
        res.status(500).json({ "error": "Internal Server Error" });
    }
}