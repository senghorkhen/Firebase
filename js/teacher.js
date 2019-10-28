database.collection('student').get().then((data) => {
    const table = document.querySelector('table');
    data.forEach(item => {
        // console.log(item.data().name);
        table.innerHTML +=`
        <tr>
            <td>${item.data().name}</td>
            <td>${item.data().age}</td>
            <img src="https://foreverwithsandara.files.wordpress.com/2015/11/uhd-missing-korea-3.jpg width: 550px;">
            <td>
            <i class="material-icons text-danger" style="ursor:pointer"
            id="${item.id}" onclick="deleteStudent('${item.id}')">delete</i>
           
            </td>
        </tr>
        `;
    });
});

function deleteStudent(teaId) {
    database.collection('student').doc(teaId).delete();
}

const btnAdd = document.querySelector('button');
btnAdd.addEventListener('click', function() {
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    database.collection('student').add({
        name: name,
        age: age
    });
}); 

