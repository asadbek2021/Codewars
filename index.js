//https://www.codewars.com/kata/52742f58faf5485cae000b9a/solutions/javascript  // Link to the Task

function formatDuration (seconds) {
  
  if(seconds<=0){
      return 'now'
  };
  
  let year = Math.floor(seconds/(365*24*3600));
  let day = Math.floor((seconds-(year*365*24*3600))/(24*3600));
  let hour = Math.floor(((seconds)%(24*3600))/3600);
  let minute = Math.floor(((seconds)%(3600))/60);
  let second = Math.floor((seconds)%(60));
  let arr = {year,day,hour,minute,second}
  let result = []
  
  Object.keys(arr).forEach(key=>{
    if(arr[key]){
        result.push(`${arr[key]} ${key}${arr[key]>1 ? 's':''}`)
    }
  })
  
  if(result.length>1){
    let last = result.pop()
    result.push('and')
    result.push(last)
  }
  if(result.length>=4){
    let res = result.splice(0,result.length-2);
    res = res.join(', ')
    result.unshift(res)
  }
  
  
 return result.join(' ')
}
