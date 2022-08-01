import React from "@types/react";

export const EventHandle = () => {

  function handleSubmit(e) {
    e.preventDefault()
    print("You clicked submit")
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type={"submit"}>Submit</button>
    </form>
  )
}

