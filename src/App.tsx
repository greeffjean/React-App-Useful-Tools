import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

// Layout
import Layout from "./layout/Layout";

// pages
import Home from "./pages/Home";
import Form from "./pages/Forms/Form";
import NotFound from "./pages/NotFound";
import QueryPage from "./pages/reactQuery/reactQuery";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <Layout>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/form" element={<Form />} />
            <Route path="/queryPage" element={<QueryPage />} />
          <Route element={<NotFound />} />
        </Routes>
      </Container>
      </Layout>
      </QueryClientProvider>
  );
};

export default App;
