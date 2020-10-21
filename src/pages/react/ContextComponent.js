import React, {useContext} from 'react';
import {View, Text} from 'react-native';

// Context 可以让我们无须明确地传遍每一个组件，就能将值深入传递进组件树。
// 为当前的 theme 创建一个 context（“lights”为默认值）。
const ThemeContext = React.createContext('lights');

// ContextComponent
function ContextComponent() {
  return (
    // 使用一个 Provider 来将当前的 value 传递给以下的组件树。
    // 无论多深，任何组件都能读取这个值。
    // 在这个例子中，我们将 “dark” 作为当前的值传递下去。
    <ThemeContext.Provider value={'dark'}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

// Toolbar
function Toolbar() {
  return (
    <View>
      <ThemedButton />
    </View>
  );
}

// ThemedButton
function ThemedButton() {
  // 指定 contextType 读取当前的 context。
  // React 会往上找到最近的 Provider，然后使用它的值。
  // 在这个例子中，当前的值为 “dark”。
  const context = useContext(ThemeContext);
  return (
    <View>
      <Text>{context}</Text>
    </View>
  );
}
export default ContextComponent;
