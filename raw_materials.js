const raw_materials_list = document.getElementById('raw_materials_list')
const raw_materials_button = document.getElementById('raw_materials_button')
const add_materials_button = document.getElementById('add_materials_btn')
const add_materials_div = document.getElementById('add_div')

console.log("script started")

const raw_materials = [
    {
        material: "aluminium"
    },
    {
        material: "Steel(Stainless)"
    },
    {
        material: "Steel(Iron)"
    },
    {
        material: "Iron"
    },
    {
        material: "Copper"
    }
]


var MATERIALS_SHOWED = false

raw_materials_button.addEventListener('click', () => { 
    if (MATERIALS_SHOWED == false){
        show_materials()
        add_materials_button.classList.remove('hide')
    }
    MATERIALS_SHOWED = true
})

add_materials_button.addEventListener('click', () => {
    add_materials_div.classList.remove('hide')
    console.log("Please add materials")
    // add_material(raw_materials)
    // while(raw_materials_list.lastElementChild) {
    //     raw_materials_list.removeChild(raw_materials_list.lastElementChild)
    // }
    // show_materials()
})

function show_materials(){
    for ( var i = 0; i < raw_materials.length; i++ ){
        var material = document.createTextNode(raw_materials[i].material)
        raw_materials_li = document.createElement('li')
        raw_materials_a = document.createElement('a')
        // raw_materials_a.setAttribute('href',"")
        raw_materials_a.appendChild(material)
        raw_materials_li.appendChild(raw_materials_a)
        raw_materials_list.appendChild(raw_materials_li)
    }
}

function add_material(raw_materials, mat){
    raw_materials.push({ material: mat})
    console.log(raw_materials)
    console.log(raw_materials.includes(mat))
}

function save_this(){
    var x = document.getElementById('materials_input').value 
    add_material(raw_materials, x)
    while(raw_materials_list.lastElementChild) {
        raw_materials_list.removeChild(raw_materials_list.lastElementChild)
    }
    show_materials()
}


