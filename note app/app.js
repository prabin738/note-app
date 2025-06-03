const addBtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");

const saveNotes = () => {
  const note = document.querySelectorAll(".note textarea");
  const data = [];
  notes.forEach((note) => data.push(note));
};

addBtn.addEventListener("click", function () {
  addNote();
});

//  <!-- <div class="note">
//         <div class="tool">
//           <i class="fa-solid fa-floppy-disk"></i>
//           <i class="fa-solid fa-trash"></i>
//         </div>
//         <textarea></textarea>
//       </div> -->
const addNote = () => {
  const note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = `
        <div class="tool">
          <i class=" save fa-solid fa-floppy-disk"></i>
          <i class=" trash fa-solid fa-trash"></i>
        </div>
        <textarea></textarea> `;

  note.querySelector(".trash").addEventListener("click", function () {
    note.remove();
  });
  note.querySelector(".save").addEventListener("click", function () {
    saveNotes();
  });
  main.appendChild(note);
};
