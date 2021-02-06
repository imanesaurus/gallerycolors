import React from "react";

interface props {
  onChange: any;
  value: string;
}
export const RED = "Red";
export const YELLOW = "Yellow";
export const BLUE = "Blue";
export const GRAY = "Gray";
export const PURPLE = "Purple";
export const PINK = "Pink";
export const OTHER = "Other";

export default function Select({ value, onChange }: props) {
  return (
    <div>
      {/* <form onSubmit={() => {}}> */}
      <label>
        Color Category:
        <select value={value} onChange={onChange}>
          <option value={RED}>{RED}</option>
          <option value={YELLOW}>{YELLOW}</option>
          <option value={BLUE}>{BLUE}</option>
          <option value={GRAY}>{GRAY}</option>
          <option value={PURPLE}>{PURPLE}</option>
          <option value={PINK}>{PINK}</option>
          <option value={OTHER}>{OTHER}</option>
        </select>
      </label>
      <input type="submit" value="Reset" />
      {/* </form> */}
    </div>
  );
}
