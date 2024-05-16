// Add JS here
let gridSize=16
let container=document.querySelector('.container')

function gridMaker(){
for (let i=1;i<=gridSize;i++){
    let rows=document.createElement('div')
    rows.style.display='flex'
    rows.style.flexDirection='row'
    rows.style.border= '0px solid red'
    rows.style.width='100%'
    rows.style.justifyContent='center'
    rows.style.alignItems='center'
    rows.className='rows'

    rows.style.flex='auto';
    for (let j=1;j<=gridSize;j++){
        let columns =document.createElement('div')
        columns.style.height='100%'
        columns.style.width='50px'
        columns.style.border= '0px solid red'
        columns.className='columns 1'
        columns.style.flex='auto'
        
        columns.addEventListener('mouseover',()=> {
            let inc=1;
            inc+=Number(columns.className.split(' ')[1])
            columns.style.backgroundColor='white';
            columns.className=`columns ${inc}`
            columns.style.opacity=inc*0.2
        })
        columns.addEventListener('mouseout',()=> {
            // columns.style.opacity=0.1*Number(columns.className.split(' ')[1])
        })
        rows.appendChild(columns);
    }
    container.appendChild(rows);
    

    
}}
gridMaker()
    
let gridChanger=document.querySelector('.changeGrid') ;
gridChanger.addEventListener('click',()=>{ 
    gridSize=prompt('enter grid size (max is 100)')
    if (gridSize>100){
        gridSize=100
    }

    document.querySelectorAll('.rows').forEach((row) => container.removeChild(row))
    gridMaker()



})   
let clearButton=document.querySelector('.clear')
clearButton.addEventListener('click',()=>{
    document.querySelectorAll('.columns').forEach((column) => column.style.backgroundColor='black')

})

