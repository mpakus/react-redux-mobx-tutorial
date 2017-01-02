import { observable } from "mobx"

export default class AppStore{
  @observable messages = [
      {name: 'MpaK', text: 'People are always asking me if I know Tyler Durden.'},
      {name: 'Tyler', text: "I am Jack's wasted life."},
      {name: 'Marla', text: "When you have insomnia, you're never really asleep... and you're never really awake."}      
  ] 

  addMessage(text){
    this.messages.push({ name: 'MpaK', text: text })
  }
}