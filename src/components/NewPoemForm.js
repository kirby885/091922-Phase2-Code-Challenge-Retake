import React, {useState} from "react";

function NewPoemForm({createNewPoem}) {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [content, setContent] = useState("")

  function handleSubmit(e){
    e.preventDefault();
    createNewPoem({
      title: title ,
      author: author ,
      content: content ,
    })
  }
  console.log(title)
  return (
    <form className="new-poem-form" onSubmit={handleSubmit}>
      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)}/>
      <input placeholder="Author" value={author} onChange={e => setAuthor(e.target.value)}/>
      <textarea placeholder="Write your masterpiece here..." rows={10} value={content} onChange={e => setContent(e.target.value)}/>
      <input type="submit" value="Share your masterpiece" />
    </form>
  );
}

export default NewPoemForm;
