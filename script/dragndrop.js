function dragStart(event) {
    console.log("You picked up", event.target.id);
  }
  function dragEnd(event) {
    console.log("end");
  }

  function dragOver(event) {
    event.preventDefault();
      console.log("You are over", event.target.parentNode.parentNode.id);
  };
  function dragEnter(event) {
    event.preventDefault();
    console.log("You entered", event.target.parentNode.parentNode.id);
  };
  function dragLeave(event) {
    console.log("You left", event.target.parentNode.parentNode.id);
  };
  function dragDrop(event) {
    event.target.parentNode.parentNode.appendChild(event.target);
    console.log("dropped");
  };