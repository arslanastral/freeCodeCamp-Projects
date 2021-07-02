import React, { useState } from "react";
import TasksDropdownArrow from "./buttons/TasksDropdownArrow";
import { useClickOutside } from "../utils/hooks";
import styled from "styled-components";

const TasksDropdownContainer = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;

  font-size: clamp(5px, 1vw + 1rem, 21px);
  letter-spacing: -0.04em;
  color: #000000;
  position: relative;
  z-index: 1;
  user-select: none;
  /* width: 10px; */
`;

const SelectedTask = styled.div`
  text-transform: capitalize;
`;
const TaskListContainer = styled.div`
  position: absolute;
  width: 90px;
  background: #ffffff;
  border: 1px solid #000000;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  animation: fadeIn 0.09s;
`;
const TaskList = styled.ul`
  padding: 0;
  margin: 0;

  &:first-child {
    /* padding-top: 0.1em; */
  }
`;
const Task = styled.li`
  font-weight: normal;
  font-size: 16px;
  list-style: none;
  padding: 5px 0 5px 5px;
  text-transform: capitalize;

  &:first-child:hover {
    border-radius: 7px 7px 0 0;
  }

  &:last-child:hover {
    border-radius: 0 0 7px 7px;
  }

  &:hover {
    background: rgb(22, 46, 252);
    color: white;
  }
`;

const Break = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;

  font-size: clamp(5px, 1vw + 1rem, 21px);
  letter-spacing: -0.04em;
  color: #000000;
  position: inherit;
  z-index: 1;
  user-select: none;
`;

const Tasks = ({ type }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const clickRef = React.useRef();

  const toggleTasks = () => setIsOpen(!isOpen);

  useClickOutside(clickRef, toggleTasks);

  let TASKS = ["focus", "code", "guitar", "read", "learn"];

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

  if (type === "break") {
    return <Break>Break</Break>;
  }
  return (
    <TasksDropdownContainer>
      <SelectedTask onClick={toggleTasks}>
        {selectedOption || "focus"}
        <TasksDropdownArrow />
      </SelectedTask>
      {isOpen && (
        <TaskListContainer ref={clickRef}>
          <TaskList>
            {TASKS.map((task, i) => (
              <Task key={i} onClick={onOptionClicked(task)}>
                {task}
              </Task>
            ))}
          </TaskList>
        </TaskListContainer>
      )}
    </TasksDropdownContainer>
  );
};
export default Tasks;
