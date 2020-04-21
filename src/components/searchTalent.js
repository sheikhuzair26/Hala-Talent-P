import React from "react";
import SearchTalentSection1 from "./searchTalentSection/searchTalentSection1";
import SearchTalentSection2 from "./searchTalentSection/searchTalentSection2";

class SearchTalent extends React.Component {
  render() {
    return (
      <div>
        <SearchTalentSection1 />
        <SearchTalentSection2 />
      </div>
    );
  }
}

export default SearchTalent;
