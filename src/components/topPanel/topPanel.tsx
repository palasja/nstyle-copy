import './topPanel.css';

const TopPanel = () => {
  return (
    <section className="top-panel">
      <div className="top-panel_text">
        <h3>Брови | Ресницы | Макияж</h3>
      </div>
      <img src={new URL(`../../assets/images/pattran.png`, import.meta.url).href} alt="pattran" />
    </section>
  );
};

export default TopPanel;
