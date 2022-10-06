import React, { useState } from "react"
import { Search } from "./components/search";
import { ShortList } from "./components/short-list";
import { NamePicker } from "./components/name-picker";

/* 
<App>
<Search />
<ShortList />
<NamePicker />
<Footer />
<App/> 
*/





function App({names}) {
  const [searchValue, setSearchValue] = useState('');
  const [shortList, setShortList] = useState([]);

  return (
    <>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <ShortList names={names} shortList={shortList} setShortList={setShortList} />
      <NamePicker names={names} searchValue={searchValue} shortList={shortList} setShortList={setShortList} />
    </>
  )
}

export default App;
