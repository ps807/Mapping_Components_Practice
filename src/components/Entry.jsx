import React from "react";
import EntryDescription from "./EntryDescription";
import EntryTitle from "./EntryTitle";

function Entry(props) {
  return (
    <div className="term">
      <EntryTitle emoji={props.emoji} name={props.name} />
      <EntryDescription meaning={props.meaning} />
    </div>
  );
}

export default Entry;
