import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from 'axios';

export default function Create () {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    
    const postData = () => {
        axios.post(`/api/notes`, {
            title,
            description
        })
    }

    return (
        <Form>
            <Form.Field>
                <label>Title</label>
                <input onChange={(e) => setTitle(e.target.value)} placeholder='Title' />
            </Form.Field>
            <Form.Field>
                <label>Description</label>
                <input onChange={(e) => setDescription(e.target.value)} placeholder='Description' />
            </Form.Field>
            <Button onClick={postData} type='submit'>Submit</Button>
        </Form>
    )

};