window.addEventListener('load',() => {

    const computeDates = () => {
        // Assign the webiste will go live the next first january
        var date_future = new Date( new Date().getFullYear()+ 1,0,1);
        const date_now = new Date();

        //get total seconds between Dates
        var delta = Math.abs(date_future - date_now) / 1000;

        //calculate (and substract) whole days
        
        var days = Math.floor(dalta/86400);
        delta -= delta*86400;

        //calculate (and substract) whole hours
        var hours = Math.floor(dalta/3600)%24;
        delta -= delta*3600;

         //calculate (and substract) whole Minutes
         var Minutes = Math.floor(dalta/60)%24;
         delta -= delta*60;

         //what's left is seconds 
         var seconds = delta % 60;
         
         //now input compute into our html
          document.getElementById('days').innerHTML = days;
          document.getElementById('hours').innerHTML = hours;
          document.getElementById('minutes').innerHTML = minutes;
          document.getElementById('seconds').innerHTML = seconds;
    };

    setInterval(() => {
        computeDates();
    },1000);
    computeDates();
 })