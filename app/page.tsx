import GameEmbed from '../components/GameEmbed';

export default function Home() {
  const games = [
    { url: 'https://html-classic.itch.zone/html/11407110/index.html', title: 'Sprunki Incredibox Classic' },
    { url: 'https://html-classic.itch.zone/html/11487174/index.html', title: 'Sprunki Incredibox Remix' },
    { url: 'https://html-classic.itch.zone/html/11617755/index.html', title: 'Sprunki Incredibox Evolution' },
  ];

  return (
    <div className="w-full">
      <h1 className="text-4xl font-bold text-center mb-8 text-sprunki-purple">Welcome to Sprunki Incredibox</h1>
      <p className="text-center mb-8 text-lg">Experience the joy of creating music with our interactive beat-mixing game inspired by Incredibox!</p>
      <div className="space-y-8">
        {games.map((game, index) => (
          <GameEmbed key={index} url={game.url} title={game.title} />
        ))}
      </div>
    </div>
  );
}