import { useState } from 'react';
import React from 'react';

import Preview from '../Preview/Preview';
import Editor from '../Editor/Editor';

import './Home.css';

export default function Home() {
  // add useState calls here for title, subtitle, font, align, and text
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');

  return (
    <main className="main">
      {/* pass the state variables as props to the presentational components */}
      <Preview title={title} subtitle={subtitle} />
      <Editor setTitle={setTitle} setSubtitle={setSubtitle} title={title} subtitle={subtitle} />
    </main>
  );
}
