type Titles = {
  children: React.ReactNode;

};




export default function MenuItens({ children}: Titles, ) {
  return (
    <section>
      <ul>
        <li className="tracking-widest text-white  font-Barlow_Condensed">
          {children}
        </li>
      </ul>
    </section>
  );
}
