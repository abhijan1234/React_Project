import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet';
import Form from './components/Form';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
function App() {
  return (
    <div className="App">
      {/*<Greet name="Abhi" hero="AntMan">
        <p>
          Children Properties
        </p>
      </Greet>
      <Greet name="Yuri" hero="Thor"/>
      <Greet name="Babi" hero="IronMan"/>
      <Welcome name="DJ" style="pop"/>
  <Welcome name="Singer" style="rock" /> 
      <Message/>
      <Counter name="Abhi"/>
      <FunctionClick/>
      <ClassClick/>
      <EventBind />
      <ParentComponent />
      <UserGreeting />
      <NameList/>
      <StyleSheet />
      <Form />
      <HookCounter />*/}
      <HookCounterTwo />
    </div >
  );
}

export default App;
