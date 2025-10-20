import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdminLogin from "@/components/AdminLogin";
import React from "react";

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  // This is a client-side placeholder for authentication.
  // In a real application, this would involve a backend API call.
  const handleLogin = (email: string, password: string) => {
    if (email === "admin@sistema.com.br" && password === "admin123") {
      setIsAuthenticated(true);
      alert("Login bem-sucedido!");
    } else {
      alert("Credenciais inválidas.");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-[1440px] mx-auto px-8 lg:px-20 py-16">
        <div className="text-center mb-12">
          <h1 className="text-[36px] text-[#171717] font-medium mb-4">
            Painel Administrativo
          </h1>
          <p className="text-[18px] text-[#525252]">
            Gerencie todos os aspectos do BrechApp.
          </p>
        </div>

        {!isAuthenticated ? (
          <AdminLogin onLogin={handleLogin} />
        ) : (
          <div className="bg-[#F5F5F4] p-8 rounded-lg shadow-sm">
            <h2 className="text-[28px] text-[#171717] font-medium mb-6">
              Bem-vindo, Administrador!
            </h2>
            <p className="text-lg text-[#525252] mb-8">
              Aqui você poderá editar informações de lojas, produtos, conteúdo da landing page,
              usuários e posts.
            </p>
            {/* Placeholder for admin functionalities */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#E5E5E5]">
                <h3 className="text-xl font-semibold mb-2">Gerenciar Lojas</h3>
                <p className="text-[#525252]">Adicionar, editar ou remover lojas.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#E5E5E5]">
                <h3 className="text-xl font-semibold mb-2">Gerenciar Produtos</h3>
                <p className="text-[#525252]">Atualizar estoque e detalhes de produtos.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#E5E5E5]">
                <h3 className="text-xl font-semibold mb-2">Conteúdo da Landing Page</h3>
                <p className="text-[#525252]">Editar textos e imagens da página inicial.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#E5E5E5]">
                <h3 className="text-xl font-semibold mb-2">Gerenciar Usuários</h3>
                <p className="text-[#525252]">Alterar dados de clientes e vendedores.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#E5E5E5]">
                <h3 className="text-xl font-semibold mb-2">Gerenciar Posts</h3>
                <p className="text-[#525252]">Criar, editar ou excluir posts.</p>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}