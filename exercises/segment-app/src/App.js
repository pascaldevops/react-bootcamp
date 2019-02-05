import React from "react";
import Segment from "./Segment";

const App = () => {
  return (
    <div>
      <Segment
        noDoc="No documents are listed for this customer."
        customerDoc="Add Document"
        header="For Your Information"
        text="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."
      />
    </div>
  );
};

export default App;
