import React from 'react';
import { ButtonContainer, Icon } from './components/ButtonBlock/ButtonBlock.styles.ts';
import ButtonBlock from './components/ButtonBlock/ButtonBlock.tsx';

function App() {
  return (
    <div className="App">
      <ButtonBlock
        size="normal"
        is_active={true}
        icon={{ label: '🔍', position: 'right', color: 'active' }}
        align_items="center"
        variant="main"
      >
        안녕하세요
      </ButtonBlock>

      <ButtonBlock
        size="large"
        is_active={true}
        icon={{ label: '', position: 'none', color: 'sub' }}
        variant="sub"
      > 
          how are you
      </ButtonBlock>

      <ButtonBlock
        size="small"
        is_active={true}
        icon={{ label: '🛠', position: 'left', color: 'main' }}
        variant="main"
      >
        가나다라
      </ButtonBlock>

      <ButtonBlock
        size="normal"
        is_active={true}
        icon={{ label: '🔍', position: 'none', color: 'main_reverse' }}
        align_items="center"
        variant="main_reverse"
      >
        안녕하세요
      </ButtonBlock>

    </div>
  );
}

export default App;
