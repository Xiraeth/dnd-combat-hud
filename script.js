"use strict";

const addAllyButton = document.querySelector(".add-ally");
const addEnemyButton = document.querySelector(".add-enemy");
const combatContainer = document.querySelector(".combatantsContainer");
let inputFields;

let isEditting = false;

addAllyButton.addEventListener("click", () => {
  flashColor(addAllyButton, "forestgreen");
  addAlly();
});

addEnemyButton.addEventListener("click", () => {
  flashColor(addEnemyButton, "firebrick");
  addEnemy();
});

combatContainer.addEventListener("click", (e) => {
  const valueEl = e.target.closest(".value");
  const inputEl = e.target.parentElement.querySelector("input");
  if (!valueEl) return;

  valueEl.classList.toggle("hidden");
  inputEl.classList.toggle("hidden");
  inputEl.focus();

  isEditting = true;
});

/*
inputFields.forEach(field => {
	field.addEventListener("blur", e => {
		const valueEl = field.parentElement.querySelector(".value");
		const number = field.value;
		
		if (number == "") valueEl.textContent = 0;
		else valueEl.textContent = number;
		
		valueEl.classList.toggle('hidden');
		field.classList.toggle("hidden");
	})
})
*/

function addAlly() {
  const markup = `
	<div class="allyContainer userContainer">
		<div class="name" contenteditable="true">Name</div>
				
			<div class="stats">
				<div class="AC"><span>AC:</span>
					<div class="value">0</div>
					<input type="number" class="statsInput hidden">
				</div>
					
				<div class="HP"><span>HP:</span>
					<div class="value">0</div>
					<input type="number" class="statsInput hidden">
				</div>		

				<div class="initiative"><span>Initiative:</span>
					<div class="value">0</div>
					<input type="number" class="statsInput hidden">
				</div>		
			</div>
			
			<div class="takeDamageContainer">
				<form>
					<label for="damage"><span>Take damage:</span>
						<input type="number" id="damage" class="damage">
						<input type="submit" value="Submit" class="submit">
					</label>
				</form>
		</div>
	</div>
	`;
  combatContainer.insertAdjacentHTML("beforeend", markup);

  const container = combatContainer.querySelector(".userContainer:last-child");
  const inputFields = container.querySelectorAll(
    "input:not(input[type='submit'])"
  );

  const submitBtn = container.querySelector("input[type='submit']");

  submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const damageEl = e.target.parentElement.querySelector(
      'input[type="number"]'
    );
    const hpEl = container.querySelector(".HP div");

    hpEl.textContent = hpEl.textContent - damageEl.value;
    damageEl.value = "";
  });

  inputFields.forEach((field) => {
    field.addEventListener("blur", (e) => {
      if (field.classList.contains("damage")) {
        return;
      }

      const valueEl = field.parentElement.querySelector(".value");
      const number = field.value;

      if (number == "") valueEl.textContent = 0;
      else valueEl.textContent = number;

      valueEl.classList.toggle("hidden");
      field.classList.toggle("hidden");
    });
  });
}

function addEnemy() {
  const markup = `
	<div class="enemyContainer userContainer">
		<div class="name" contenteditable="true">Name</div>
				
			<div class="stats">
				<div class="AC"><span>AC:</span>
					<div class="value">0</div>
					<input type="number" class="statsInput hidden">
				</div>
					
				<div class="HP"><span>HP:</span>
					<div class="value">0</div>
					<input type="number" class="statsInput hidden">
				</div>		

				<div class="initiative"><span>Initiative:</span>
					<div class="value">0</div>
					<input type="number" class="statsInput hidden">
				</div>		
			</div>
			
			<div class="takeDamageContainer">
				<form>
					<label for="damage"><span>Take damage:</span>
						<input type="number" id="damage" class="damage">
						<input type="submit" value="Submit" class="submit">
					</label>
				</form>
		</div>
	</div>
	`;
  combatContainer.insertAdjacentHTML("beforeend", markup);

  const container = combatContainer.querySelector(".userContainer:last-child");
  const inputFields = container.querySelectorAll(
    "input:not(input[type='submit'])"
  );

  const submitBtn = container.querySelector("input[type='submit']");

  submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const damageEl = e.target.parentElement.querySelector(
      'input[type="number"]'
    );
    const hpEl = container.querySelector(".HP div");

    hpEl.textContent = hpEl.textContent - damageEl.value;
    damageEl.value = "";
  });

  inputFields.forEach((field) => {
    field.addEventListener("blur", (e) => {
      if (field.classList.contains("damage")) {
        return;
      }

      const valueEl = field.parentElement.querySelector(".value");
      const number = field.value;

      if (number == "") valueEl.textContent = 0;
      else valueEl.textContent = number;

      valueEl.classList.toggle("hidden");
      field.classList.toggle("hidden");
    });
  });
}

function flashColor(el, color) {
  const initColor = el.style.color;
  el.style.color = color;
  setTimeout(function () {
    el.style.color = initColor;
  }, 200);
}
