import * as React from 'react';
import { useParams } from "react-router-dom";
import type { IBlog } from '../utils/types';
import * as moment from 'moment';
import { Link } from 'react-router-dom'

const Details: React.FC<DetailsProps> = props => {
    const { blogid } = useParams();
    const [blog, setBlog] = React.useState<IBlog>(null);

    React.useEffect(() => {
        (async () => {
            const res = await fetch(`/api/blogs/${blogid}`);
            const blog = await res.json();
            setBlog(blog);
        })();

    }, []);


    return (
        <main className='conatiner'>
            <section className='row'>
                <div className="col-12">
                    <article className="card my-2 shadow">
                        <div className="card-body">
                            <h1 className="card-text text-center">{blog?.title}</h1>
                            <h4 className="card-text text-center text-muted mb-2">
                                Author: {blog?.name},  Published- {moment(blog?._created).format("MMM Do, YYYY")}
                            </h4>
                            <p className="card-text px-5 ">{blog?.content}</p>
                        </div>
                        <div className= 'ml-5' >
                            <Link className="btn btn-outline-danger" to = '/'>Go back home </Link>
                        </div>
                    </article>
                </div>
            </section>
        </main>
    );
};

interface DetailsProps { }

export default Details;