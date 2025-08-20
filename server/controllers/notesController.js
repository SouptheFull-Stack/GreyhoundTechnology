export const getAllNotes = (req, res) => {
  res.status(200).send("You just fetched the notes!");
};

export const makeNewNote = (req, res) => {
  res.status(201).json({ message: "post created successfully!" });
};

export const updateNote = (req, res) => {
  res.status(200).json({ message: "Note updated successfully!" });
};

export const deleteNote = (req, res) => {
  res.status(200).json({ message: "Note deleted successfully!" });
};
