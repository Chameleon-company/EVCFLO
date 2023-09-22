function Menu({ active, setActive, setCategory }) {
  const links = [
    { id: 1, name: 'Electric Vehicles', value: 'EV' },
    { id: 2, name: 'Science', value: 'science' },
    { id: 3, name: 'Environment', value: 'environment' },
  ];

  function onClick(id, value) {
    setActive(id);
    setCategory(value);
  }

  return (
    <nav className="menu">
      <ul>
        {links.map((link) => (
          <li
            key={link.id}
            className={active === link.id ? 'active' : 'inactive'}
            onClick={() => onClick(link.id, link.value)}
          >
            {link.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
