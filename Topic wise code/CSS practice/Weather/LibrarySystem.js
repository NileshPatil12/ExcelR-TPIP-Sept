class Library{
   constructor(){
    this.name=[];
    this.price=[];
    this.stock=[];
    this.sell=0;
   }
    Show() {
    console.log(`Name : ${this.name}
Price: ${this.price}
Stock Size : ${this.stock}`);
   }

   addTo(Name,Price,Stock){
    this.name.push(Name);
    this.price.push(Price);
    this.stock.push(Stock);
    console.log("Appended");
   }

   buy(Name){
    for (let index = 0; index < this.name.length; index++) {
        const element = this.name[index];
        if(Name===element){
            if(this.stock[index]>0){
                this.stock[index]--;
                this.sell=this.sell+this.price[index];
            console.log("Book purchased");
            }
            else{
                console.log("Stock not available");
            }
            return;
        }
    }
    console.log("Not available");
   }

}

const obj=new Library();
obj.Show();
obj.addTo("Nilesh",10,2);
obj.Show();
obj.buy("Nilesh");
obj.Show();
