function get_input (){
    rli= required('readline')
    rli = rli.createInterface((input: process.stdin))
    
    rli.on('line', get_planenpassenger)
  }
  
  function get_planenpassenger(line) {
    console.log(line)
    [plane, passenger] = line.trim().split(' ')
    console.log(plane, passenger)
    solve(plane, passenger)
  }
  
  function solve (plane, pasenger) {
    
  }
  
  let no_planes;
  let no_passengers;
  let plane_cap = 100;
  let plane_needed;
  
  plane_needed = plane_needed - planes;
  plane_needed = math.ceil(no_passengers / plane_cap) - no_planes;
  