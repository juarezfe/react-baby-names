import React from "react"
import { Search } from "./components/search";
import { ShortList } from "./components/short-list";
import { NamePicker } from "./components/name-picker";
import { ResetSearch } from "./components/reset-search";

function App() {

  return (
    <>
      <Search />
      <NamesContainer />
    </>
  )
}

function NamesContainer() {
  return (
  <main>
    <ShortList />
    <NamePicker />
    <ResetSearch />
  </main>
  )
}

export default App;
