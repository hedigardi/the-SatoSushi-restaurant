const ProviderMissing = () => {
  return (
    <section className="provider-missing">
      <img
        className="logo"
        src="/src/assets/images/logo_transparent_light.png"
        alt="SatoSuShi logo"
      />

      <header>
        <h1>Hej och välkommen till SatoSuShi!</h1>
      </header>

      <p>
        Din webbläsare saknar en Web3-leverantör som krävs för att använda denna
        applikation. För att fortsätta, vänligen installera en Web3-leverantör i
        din webbläsare.
      </p>

      <p>
        Vi rekommenderar MetaMask för bästa användarupplevelse och
        kompatibilitet med Web3-applikationer.
      </p>

      <p>
        Besök{' '}
        <a
          href="https://metamask.io/"
          target="_blank"
          rel="noreferrer"
        >
          Metamask.io
        </a>{' '}
        för att ladda ner och installera MetaMask.
      </p>
    </section>
  );
};

export default ProviderMissing;
