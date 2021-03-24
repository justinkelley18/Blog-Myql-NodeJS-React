import { Router } from 'express';
import db from '../db'

const router = Router();
// GET /API/BLOGS
router.get('/:blogid?', async (req, res) => {
    const blogid = Number(req.params.blogid);

    try {
        if (blogid) {
            const [blog] = await db.blogs.one(blogid);
            res.json(blog)
        } else {
            const blogs = await db.blogs.all();
            res.json(blogs)
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'Lmk if I suck', err })

    }
});


// Request Body  (title: string, content: string, authorid: number)
router.post('/', async (req, res) => {
    const newBlog = req.body;
    newBlog.authorid = 1;

    try {
        const result = await db.blogs.insert(newBlog);
        res.json({ msg:'Blog created!', id: result.insertID });
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'Lmk if I suck', err })

    }
});


router.put('/:blogid', async (req, res) => {
    const blogid = Number(req.params.blogid);
    const editedBlog = req.body;

    try {
        const result = await db.blogs.update(editedBlog, blogid);
        res.json({msg:`Blog ${blogid} edited!`, affectedRows: result.AffectedRows});
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'Lmk if I suck', err })

    }
});


router.delete('/:blogid', async (req, res) => {
    const blogid = Number(req.params.blogid);
    

    try {
        const result = await db.blogs.destroy(blogid);
        res.json({msg:`Blog ${blogid} obliterated!`, affectedRows: result.AffectedRows});
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'Lmk if I suck', err })

    }
});

export default router;