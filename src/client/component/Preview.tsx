import * as React from 'react';
import type { IBlog } from '../utils/types'
import { Link } from 'react-router-dom'
import * as moment from 'moment';

const PreviewCard: React.FC<PreviewCardProps> = ({ blog }) => {
    return (
        <div className="col-md-4">
            <article className="card my-2 shadow">
                <div className="card-body">
                    <h4 className="card-title">{blog.title} </h4>
                    <p className="card-text text-muted mb-2">{blog.name}</p>
                    <p className="card-text">{blog.content.substring(0, 50)}...</p>
                    <div className="d-flex align-items-center justify-content-between">
                        <p className="card-text text-muted ">{moment(blog._created).format("MMM Do, YYYY")}</p>
                        <Link className="btn btn-sm btn-danger" to={`/details/${blog.id}`}>Read More!</Link>
                    </div>
                </div>
            </article>
        </div>
    )
}

interface PreviewCardProps {
    blog: IBlog
}

export default PreviewCard;