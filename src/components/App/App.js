import { QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';

import { Main } from 'components/Main';
import queryClient from 'services/api/queryClient';

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Main />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
