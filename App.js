import React, {Component} from 'react';
import './App.css';

export default class App extends Component{

  constructor(props){
    super(props);
    this.state ={
      liczby: [],
      newliczba: "",

    }
  }

  wstawliczbe = ()=>{
    const liczbax = this.state.newliczba;
    if (!isNaN(liczbax) && (liczbax !== null) && !this.state.liczby.find(item => item.liczb === liczbax)){
      const wynik = liczbax % 2 === 0;
      this.setState({ liczby: [...this.state.liczby, { liczba: liczbax, wynik }], newliczba: ""});
    }else if (isNaN(liczbax)){
      const wynikx ="To nie jest liczba";
      this.setState({ liczby: [...this.state.liczby, { liczba: liczbax, wynikx }], newliczba: ""});
  }
}

   


  wstaw = () =>this.state.liczby.map(item => 
      <tr>
        <td>{item.liczba}</td>
        <td>{item.wynik ? "Parzysta":"Nieparzysta"}</td>
        <td>{item.wynikx}</td>    
      </tr>
    );
  


  aktualizuj = (val)=>{
    this.setState({ newliczba: val.target.value })
  }

  

  render (){
    return(
      <div >   
        <div>
          <p>Jaka liczba</p>
        </div>
        <div>
          <input value={this.state.newliczba} onChange={this.aktualizuj}/>
          <button onClick={() => { this.wstawliczbe();}}>Nowa liczba</button>
        </div>
        <table>
          <tr><th>Liczba</th><th>Stan</th></tr>
          {this.wstaw()}
        </table>
      </div>
    )
  };

}

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
