const car = {
     nameByPrint:'Corolla',
     nameByFunc: function () {
       console.log(`${this.nameByPrint}`)
     }
   }
   
   car.nameByFunc()