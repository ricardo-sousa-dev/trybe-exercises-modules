const { encode, decode, techList, uppercase, getUserName, users} = require("./exercises.js");


describe("verifica a conversão de valores na função encode()", () => {

  it("encode() retorna o valor correto conforme parametro recebido", () => {
    expect(encode(1)).toBe("a");
    expect(encode(2)).toBe("b");
    expect(encode(3)).toBe("c");
    expect(encode(4)).toBe("d");
    expect(encode(5)).toBe("e");
  });
  it('a função encode é definida', () => {
    expect(encode).toBeDefined();
  });
  it('encode é uma função', () => {
    expect(typeof encode).toEqual('function');
  });
});


describe("verifica a conversão de valores na função decode()", () => {

  it("decode() retorna o valor correto conforme parametro recebido", () => {
    expect(decode('a')).toBe(1);
    expect(decode('b')).toBe(2);
    expect(decode('c')).toBe(3);
    expect(decode('d')).toBe(4);
    expect(decode('e')).toBe(5);
  });
  it('a função decode é definida', () => {
    expect(decode).toBeDefined();
  });
  it('decode é uma função', () => {
    expect(typeof decode).toEqual('function');
  });
});


describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});


describe("verifica a chamada da função uppercase()", () => {
it(`uppercase 'test' to equal 'TEST'`, (done) => {
  uppercase('test', (str) => {
    expect(str).toBe('TEST');
    done();
  });
});
});

describe('test se a função getUserName() retorna o usuario', () => {

  beforeEach(() => {
    users = [
      { name: 'Zezé Gamer' },
      { name: 'Tio Jest' },
      { name: 'Sumo Lhama' }
    ]
  });

  afterEach(() => {
    users.forEach(element => {
      if((element.name === 'Zezé Gamer')
        || (element.name === 'Tio Jest')
        || (element.name === 'Sumo Lhama')) {
        delete element;
      }
    });
  });

  test('buscando usuário através do id', async () => {

    const usuario1 = await getUserName('Zezé Gamer');
    expect(usuario1).toEqual({
name: 'Zezé Gamer'});
  });
});


// ANIMAIS
describe('Testando promise - findAnimalByAge', () => {
  describe('Quando existe o animal com o a idade', () => {
    test('Verifique o primeiro nome do animal no array retornado', () => {
      expect.assertions(1);
      const animals = [{ name: 'Preguiça', age: 5, type: 'Cat' }];
      return expect(getAnimalByAge(5)).resolves.toEqual(animals);
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return expect(getAnimalByAge(3)).rejects.toBe('Nenhum animal encontrado!');
    });
  });
});