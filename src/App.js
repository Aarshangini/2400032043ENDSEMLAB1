// CourseItem.js
import React from "react";
import { useDrag, useDrop } from "react-dnd";

const ItemType = { COURSE: "course" };

export default function CourseItem({ course, index, moveCourse }) {
  const [, dragRef] = useDrag({
    type: ItemType.COURSE,
    item: { index },
  });

  const [, dropRef] = useDrop({
    accept: ItemType.COURSE,
    hover: (item) => {
      if (item.index !== index) {
        moveCourse(item.index, index);
        item.index = index;
      }
    },
  });

  return (
    <div ref={(node) => dragRef(dropRef(node))} className="course-item">
      {course}
    </div>
  );
}
