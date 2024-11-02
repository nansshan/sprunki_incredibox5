export default function Footer() {
  return (
    <footer className="bg-sprunki-purple text-white p-4 mt-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          <a href="https://periodic-table.co/" className="hover:text-gray-300" target="_blank" rel="noopener noreferrer">
            Periodic Table
          </a>
          <a href="https://navsone.com/" className="hover:text-gray-300" target="_blank" rel="noopener noreferrer">
            Navsone
          </a>
          <a href="https://signaturegenerator-ai.com/" className="hover:text-gray-300" target="_blank" rel="noopener noreferrer">
            Signature Generator
          </a>
          <a href="https://fancytext-generator.com/" className="hover:text-gray-300" target="_blank" rel="noopener noreferrer">
            Fancy Text
          </a>
          <a href="https://sprunki-incredibox.online/" className="hover:text-gray-300" target="_blank" rel="noopener noreferrer">
            Sprunki Incredibox
          </a>
          <a href="https://chromakopiafont-generator.com/" className="hover:text-gray-300" target="_blank" rel="noopener noreferrer">
            Chromakopia Font
          </a>
        </div>
        <div className="text-center">
          <p>&copy; 2023 Sprunki Incredibox. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}