let arr = [65, 89, 73, 45, 67]

function grade(score){
    let grade = {'A': 0, 'B':0, 'C':0, 'D':0, 'F':0}
    
    for(score of score){
        if(score >= 80){
            let a_count = grade['A']
            let new_a = a_count + 1
            grade['A'] = new_a
        }
        else if(score >= 70){
            grade['B'] = grade['B'] + 1
        }
        else if(score >= 60){
            grade['C'] = grade['C'] + 1
        }
        else if(score >= 50){
            grade['D'] = grade['D'] + 1
        }
        else{
            grade['F'] = grade['F'] + 1
        }
    }

    //console.log(grade)
    let total = 0
    for(score of scores){
        total = total + score

    }
    let average = total / arr.length
    console.log(average)
}



grade(arr)
