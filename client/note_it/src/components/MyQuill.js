import React, { useEffect } from 'react';
import './noteView.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNotes } from '../notesContext';
// import { updateNote, deleteNote } from '../api.service';
// import { useDebouncedCallback } from 'use-debounce';
import { saveImageToCloudinary, loadImageFromCloudinary } from '../cloudinary';

export const MyQuill = () => {
  const { note, setNote } = useNotes();

  const debouncedBody = async value => {
    await setNote(oldNote => {
      return {
        ...oldNote,
        body: value,
      };
    });
  };
  // const [delta, setDelta] = useState(note.body);
  // const handleChange = (value, delta, source, editor) => {
  //   // Save the delta to state
  //   setDelta(delta);
  // };

  //  const handleImageUpload = async (file, callback) => {
  //   // Upload the image to Cloudinary
  //   const cloudinaryResponse = await saveImageToCloudinary(file);

  //   // Callback with the URL of the uploaded image
  //   callback(cloudinaryResponse.url);
  // };

  // const handleImageLoad = async (url) => {
  //   // Load the image from Cloudinary
  //   const cloudinaryResponse = await loadImageFromCloudinary(url);

  //   // Return the URL of the loaded image
  //   return cloudinaryResponse.url;
  // };

  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ color: [] }, { background: [] }],
      [{ script: 'sub' }, { script: 'super' }],
      ['blockquote', 'code-block'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ indent: '-1' }, { indent: '+1' }, { align: [] }],
      ['link', 'image', 'video'],
      ['clean'],
    ],
  };
  const formats = [
    'font',
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'color',
    'background',
    'script',
    'blockquote',
    'code-block',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
  ];
  return (
    <div>
      <ReactQuill
        theme='snow'
        placeholder='Write something amazing...'
        className='h-96 mb-3 overflow-auto'
        value={note.body}
        modules={modules}
        formats={formats}
        onImageUpload={handleImageUpload}
        onImageLoad={handleImageLoad}
        onChange={debouncedBody}
      />
    </div>
  );
};
