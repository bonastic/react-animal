



function App() {
  return <div className="wrapper clear">
    <div className="overlay">
      <div className="drawer">
        <h2>Корзина</h2>
        <div className="items">
        <div className="cartItem d-flex align-center mb-20">
          <img className="mr-15" width={80} src="/img/1.jpeg" alt="food"/>
          

          <div>
            <p className="mb-5">Purina с курицей для кошек</p>
            <b>1200 руб.</b>
          </div>
          <img className="remove" height={20} src="/img/remove.png" alt="food"/>

        </div>
        
        <div className="cartItem d-flex align-center mb-20">
          <img className="mr-15" width={80} src="/img/1.jpeg" alt="food"/>
          

          <div>
            <p className="mb-5">Purina с курицей для кошек</p>
            <b>1200 руб.</b>
          </div>
          <img className="remove" height={20} src="/img/remove.png" alt="food"/>

        </div>
       
        <div className="cartItem d-flex align-center mb-20">
          <img className="mr-15" width={80} src="/img/1.jpeg" alt="food"/>
          

          <div>
            <p className="mb-5">Purina с курицей для кошек</p>
            <b>1200 руб.</b>
          </div>
          <img className="remove" height={20} src="/img/remove.png" alt="food"/>

        </div>
        <div className="cartItem d-flex align-center mb-20">
          <img className="mr-15" width={80} src="/img/1.jpeg" alt="food"/>
          

          <div>
            <p className="mb-5">Purina с курицей для кошек</p>
            <b>1200 руб.</b>
          </div>
          <img className="remove" height={20} src="/img/remove.png" alt="food"/>

        </div>
        <div className="cartItem d-flex align-center mb-20">
          <img className="mr-15" width={80} src="/img/1.jpeg" alt="food"/>
          

          <div>
            <p className="mb-5">Purina с курицей для кошек</p>
            <b>1200 руб.</b>
          </div>
          <img className="remove" height={20} src="/img/remove.png" alt="food"/>

        </div>
        </div>
       <div className="cartTotalBlock"> 
       <ul >
          <li className="d-flex">
            <span>Итого</span>
          <div></div>
          <b>21 300 руб.</b>
          </li>
        </ul>
        <button className="greenButton"> Оформить заказ<img height={20} src="/img/arrow.svg" alt="Arrow"/></button>


       </div>

      </div>

    </div>



    
    <header className="d-flex justify-between align-center">
      <div className="d-flex align-center">
        <img width={90}  src="/img/logo.png"></img>
      
      <div >
        <h3 > Сервисы</h3>
        <p>Магазин для домашних Животных</p>
      </div>
    
  </div>
  <ul className="d-flex">

    <li className="mr-30">
    <img width={20}  src="/img/icon.png"></img>
      <span> 1205 руб.</span>
    </li>
    <li>
    <img width={20}  src="/img/user.png"></img>
    </li>
  </ul>
  </header>
  <div className="content p-40">
    <div className="d-flex align-center justify-between mb-40">
      </div> 
    <h1 className=""> Вся продукция</h1>
    <div className="search-block">
      <img height={20} src="/img/search.png " alt="Search"></img>
      <input placeholder="Поиск..."></input>
    </div>
    <div className="d-flex">
    <div className="card">
      <div className="favorite">
      <img height={20} src="/img/unlike.svg" alt="unlike"></img>

      </div>
    <img width={200} src="/img/1.jpeg" alt="food"/>
    <h5>Purina с курицей для кошек</h5>
<div className="d-flex justify-between align-center">
  <div className="d-flex flex-column">
    <span>Цена:</span>
    <b>12 999 руб.</b>
    <button className="button">
      <img height={15} src="/img/plus.png" alt="Plus"></img>
    </button>
  </div>
</div>
    </div>
    
    <div className="card">
    <img width={200} src="/img/2.jpeg" alt="food"/>
    <h5>Purina с курицей для кошек</h5>
<div className="d-flex justify-between align-center">
  <div className="d-flex flex-column">
    <span>Цена:</span>
    <b>12 999 руб.</b>
    <button className="button">
      <img height={15} src="/img/plus.png" alt="Plus"></img>
    </button>
  </div>
</div>
    </div>
    <div className="d-flex">
    <div className="card">
    <img width={200} src="/img/3.jpeg" alt="food"/>
    <h5>Purina с курицей для собак</h5>
<div className="d-flex justify-between align-center">
  <div className="d-flex flex-column">
    <span>Цена:</span>
    <b>12 999 руб.</b>
    <button className="button">
      <img height={15} src="/img/plus.png" alt="Plus"></img>
    </button>
  </div>
</div>
</div>
    <div className="d-flex">
    <div className="card">
    <img width={200} src="/img/4.jpeg" alt="food"/>
    <h5>Purina с курицей для собак</h5>
<div className="d-flex justify-between align-center">
  <div className="d-flex flex-column">
    <span>Цена:</span>
    <b>12 999 руб.</b>
    <button className="button">
      <img height={15} src="/img/plus.png" alt="Plus"></img>
    </button>
  </div>
</div>
</div>
    </div>
    
    </div>
    
   
    
    </div>
  </div>

  </div>
}

export default App;
