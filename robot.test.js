const {newRobot, station, isWorkday, prioritizeTasks}  = require("./robot.js");

// remove .skip when you're ready to implement the test
test('test_that_foreign_robot_needing_repairs_sent_to_station_1', () => {
  // arrange
  var testRobot = newRobot(true, true, false);
  // act
  const result = station(testRobot);
  // assert
  expect(result).toBe(1);
});

test('test_that_vintage_robot_needing_repairs_sent_to_station_2', () => {
  // arrange
  var testRobot = newRobot(true, false, true);
  // act
  const result = station(testRobot);
  // assert
  expect(result).toBe(2);
});

test('test_that_standard_robot_needing_repairs_sent_to_station_3', () => {
  // arrange
  var testRobot = newRobot(true, false, false);
  // act
  const result = station(testRobot);
  // assert
  expect(result).toBe(3);
});

test('test_that_robot_in_good_condition_sent_to_station_4', () => {
  // arrange
  var testRobot = newRobot(false, false, false);
  // act
  const result = station(testRobot);
  // assert
  expect(result).toBe(4);
});

test('test_prioritize_tasks_with_empty_todo_list_returns_negative_one', () => {
  // arrange
  var testRobot = newRobot(false, false, false);  
  // act
  const result = prioritizeTasks(testRobot);
  // assert
  expect(result).toBe(-1);
})

test('test_prioritize_tasks_with_todos_returns_max_todo_value', () => {
  // arrange
  var testRobot = newRobot(false, false, false);
  testRobot.todos = [2, 5, 29, 6, 1];
  // act
  const result = prioritizeTasks(testRobot);
  // assert
  expect(result).toBe(29);
});

test('test_workday_on_day_off_returns_false', () => {
  // arrange
  var testRobot = newRobot(false, false, false);
  testRobot.dayOff = 'Sunday';
  // act
  const result = isWorkday(testRobot, 'Sunday');
  // assert
  expect(result).toBe(false);
});

test('test_workday_not_day_off_returns_true', () => {
  // arrange
  var testRobot = newRobot(false, false, false);
  testRobot.dayOff = 'Sunday';
  // act
  const result = isWorkday(testRobot, 'Monday');
  // assert
  expect(result).toBe(true);
});
