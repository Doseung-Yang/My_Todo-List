"use client";

import { Button, Input } from "@material-tailwind/react";
import Todo from "components/todo";

export default function UI() {
  return (
    <div className="w-2/3 mx-auto flex flex-col items-center py-10">
      <h1 className="text-xl">TODO LIST</h1>

      <Input label="Search TODO" icon={<i className="fas fa-heart" />} />

      <Todo value={"NEW TODO"} completed={true} />

      <Button>
        <i className="fas fa-plus mr-2" />
        ADD TODO
      </Button>
    </div>
  );
}
