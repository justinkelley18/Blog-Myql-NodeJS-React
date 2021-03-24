
import * as React from 'react';

const Compose: React.FC<ComposeProps> = props => {
    const [title, setTitle] = React.useState('');
    const [content, setContent] = React.useState('');

    return (
        <main className='conatiner'>
            <section className='row'>
                <div className="col-12">
                    <form className="form-group p-3 border rounded-lg">
                        <label htmlFor="title">Title</label>
                        <input
                            placeholder="Title?"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            type="text"
                            
                        />
                        <textarea
                            value={content}
                            onChange={e => setContent(e.target.value)}
                            rows={20}
                            placeholder="Blog Text?"
                            
                        />
                    </form>
                </div>
            </section>
        </main>
    )
}

interface ComposeProps { }

export default Compose;