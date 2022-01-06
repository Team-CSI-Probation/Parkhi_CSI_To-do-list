window.addEventListener('load', () => {
	const form = document.querySelector("#new-form");
	const input = document.querySelector("#new-input");
	const list = document.querySelector("#tasks");

    
      const Check = ""


	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;

		const taskl = document.createElement('div');
		taskl.classList.add('task');

		const taskc = document.createElement('div');
		taskc.classList.add('content');

		taskl.appendChild(taskc);

		const taski = document.createElement('input');
		taski.classList.add('text');
		taski.type = 'text';
		taski.value = task;
		taski.setAttribute('readonly', 'readonly');

		taskc.appendChild(taski);

		const taska = document.createElement('div');
		taska.classList.add('actions');
		
		const taske = document.createElement('button');
		taske.classList.add('edit');
		taske.innerText = 'Edit';

		const taskd = document.createElement('button');
		taskd.classList.add('delete');
		taskd.innerText = 'Delete';

		taska.appendChild(taske);
		taska.appendChild(taskd);

		taskl.appendChild(taska);

		list.appendChild(taskl);

		input.value = '';

		taske.addEventListener('click', (e) => {
			if (taske.innerText.toLowerCase() == "edit") {
				taske.innerText = "Save";
				taski.removeAttribute("readonly");
				taski.focus();
			} else {
				taske.innerText = "Edit";
				taski.setAttribute("readonly", "readonly");
			}
		});

		taskd.addEventListener('click', (e) => {
			list.removeChild(taskl);
		});
	});
});
