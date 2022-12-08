const Validator = require('./task/task_01');

describe("Validator", () => {
  const validator = new Validator();

  test("defines setRule()", () => {
    expect(typeof validator.setRule).toBe("function");
  });
});


test("setRule() is called with arguments", () => {
  // Подготовьте шпиона для метода validator.setRule()
  const validator = new Validator();
  const setRuleSpy = jest.spyOn(validator, "setRule");

  // Создайте макет правила для использования в качестве аргумента функции.
  const trueRule = jest.fn(() => true);

  const result = validator.setRule("true", trueRule);

  expect(result).toBeUndefined();

  // Проверьте шпиона, правильно ли был вызван метод.
  expect(setRuleSpy).toHaveBeenCalledWith("true", trueRule);

  // Восстановите макет и верните исходную реализацию.
  setRuleSpy.mockClear();
});


const trueRule = jest.fn(() => true);

// Зарегистрируйте фиктивное правило в валидаторе с помощью теста
test("sets rule", () => {
  const validator = new Validator();
  const setRuleSpy = jest.spyOn(validator, "setRule");
  const result = validator.setRule("true", trueRule);

  expect(setRuleSpy).toHaveBeenCalledWith("true", trueRule);
  expect(result).toBeUndefined();

  setRuleSpy.mockClear();
});

