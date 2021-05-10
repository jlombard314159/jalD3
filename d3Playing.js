var dataset = [1,2,3];

// var csvData;
// d3.csv('data/temp.csv', function(data){
//     csvData = data;
// })

// var printFromCSV = function(){
//     d3.csv('data/temp.csv', function(data){
//         for(var i =0; i < data.length; i++){
//             console.log(data[i].x);
//         }
//     })
// };

d3.select('body')
    .selectAll('p')
    .data(dataset)
    .text('new paragraph!')
    .enter()
    .append('p')
    .text(function(d){return d;})