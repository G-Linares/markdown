import React from "react";
import { NoteData, Tag } from "../Utils/globaltypes";
import NoteForm from "../Components/NoteForm";

type NewNoteProps = {
  onSubmit: (data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
};

export default function NewNote({
  onSubmit,
  onAddTag,
  availableTags
}: NewNoteProps) {
  return (
    <>
      <div className="mb-4">New Note</div>
      <NoteForm
        onSubmit={onSubmit}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </>
  );
}
