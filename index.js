function generateList(array) {
    const list = document.createElement('ul');

    for (let i = 0; i < array.length; i++) {
        const listItem = document.createElement('li');

        if (Array.isArray(array[i])) {
            const sublist = generateList(array[i]);
            listItem.appendChild(sublist);
        } else {
            listItem.textContent = array[i];
        }

        list.appendChild(listItem);
    }

    return list;
}

const testArray1 = [1, 2, 3];
const testArray2 = [1, 2, [1.1, 1.2, 1.3], 3];

const body = document.querySelector('body');
const testList1 = generateList(testArray1);
const testList2 = generateList(testArray2);

body.appendChild(testList1);
body.appendChild(testList2);
