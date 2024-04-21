import { useState } from "react";

function SubGroupInput() {
  const [tags, setTags] = useState([]);

  const handleTagKeyPress = (event) => {
    if (event.key === "Enter" && event.target.value) {
      const newTag = event.target.value.trim();
      if (tags.length < 5 && !tags.includes(newTag)) {
        setTags([...tags, newTag]);
      }
      event.target.value = "";
    }
  };

  const handleTagRemove = (tag) => {
    setTags(tags.filter((t) => t !== tag));
  };

  return (
    <div>
      <label htmlFor="sub-group">*Sub Group</label>
      <div className="tag-container">
        {tags.map((tag) => (
          <div className="tag" key={tag}>
            {tag}
            <button className="tag-remove" onClick={() => handleTagRemove(tag)}>
              x
            </button>
          </div>
        ))}
        <textarea
          placeholder="Enter tags separated by Enter key"
          onKeyPress={handleTagKeyPress}
          style={{ resize: "none" }}
        ></textarea>
      </div>
    </div>
  );
}

export default SubGroupInput;
