const changingProps = [
    [
      { id: 0, name: 'chicho', category: 'piolarda' },
      { id: 1, name: 'chucho', category: 'coparda' },
      { id: 2, name: 'checho', category: 'cheverarda' },
    ],
    [
      { id: 0, name: 'tato', category: 'piolarda' },
      { id: 1, name: 'teto', category: 'cheverarda' },
      { id: 2, name: 'tito', category: 'coparda' },
    ],
    [
      { id: 0, name: 'nino', category: 'cheverarda' },
      { id: 1, name: 'nano', category: 'piolarda' },
      { id: 2, name: 'nuno', category: 'coparda' },
    ],
  ];

  const getRandomProps = () => {
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        console.log(changingProps[i++]);
      }, i*1000);
    }
  };

  getRandomProps()

  export { getRandomProps }