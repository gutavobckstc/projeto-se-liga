const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Seu Nome. Todos os direitos reservados.
          </p>
          <p className="text-muted-foreground text-sm">
            Desenvolvido com{" "}
            <span className="text-primary">♥</span>{" "}
            usando React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
