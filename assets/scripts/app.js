
 
 class Player {


    constructor(name, img, title) {
       this.name = name;
       this.img = img;
       this.title = title;
    }

 }


 // const player = new Player('Cristiano Roanldo','https://c8.alamy.com/comp/2F2MXAF/cristiano-ronaldo-of-real-madrid-during-the-uefa-champions-league-group-f-football-match-between-real-madrid-cf-and-sporting-cp-on-september-14-2016-at-santiago-bernabeu-stadium-in-madrid-spain-photo-manuel-blondeau-aop-press-dppi-2F2MXAF.jpg','Best player')


 class PlayerDatas {
    
   constructor(players){
      this.players = players
   }

   clickedButton(){
      console.log(this);
   }

   render(){
      const listItem = document.createElement('li')
      listItem.className = 'product-item'

      listItem.innerHTML = `
                 <div> 
                 <div class="product__box"> <img src="${this.players.img}"> </div>
                    <div class="product-item__content">
                       <h2>${this.players.name}</h2>
                        <p>${this.players.title}</p>
                        <button>Tikla kec</button>
                    </div>
                 </div>
               
               `   

               const addCartButton = document.querySelector('button')
               addCartButton.addEventListener('click',this.clickedButton.bind(this))
         return listItem;    
   }


   
      

 }


// const playerDatas = new PlayerDatas()



 class PlayerRender {
   allDatas = [
      new Player('Cristiano Roanldo',
         'https://i.ytimg.com/vi/mV0PLaXxt0E/maxresdefault.jpg',
         'Best player'),
      new Player('Lionel Messi',
         'https://dailypost.ng/wp-content/uploads/2022/11/3cabcc81540d0491.jpg',
         'Best player'),
      new Player('Klian Mbappe',
         'https://talksport.com/wp-content/uploads/sites/5/2022/12/breton-francevp221204_npEyn-JS781075481.jpg?strip=all&w=960&quality=40',
         'Best player'),
   ];

    render() {
       const renderHooks = document.querySelector('#app')
       const list = document.createElement('ul')
       list.className = 'product-list'
       
       for (let data of this.allDatas) {
          
         let playersInfo = new PlayerDatas(data)
           
          let listItem = playersInfo.render()

          list.append(listItem)
       }

       renderHooks.append(list)

    }
 }



 const playerInfo = new PlayerRender()


 playerInfo.render()

























