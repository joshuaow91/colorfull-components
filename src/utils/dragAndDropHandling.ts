export const handleDragOver = (
  e: React.DragEvent<HTMLDivElement>,
  setIsOverDropArea: (isOver: boolean) => void,
) => {
  e.preventDefault();
  setIsOverDropArea(true);
};

export const handleDragLeave = (
  setIsOverDropArea: (isOver: boolean) => void,
) => {
  setIsOverDropArea(false);
};

export const handleDrop = (
  e: React.DragEvent<HTMLDivElement>,
  setIsOverDropArea: (isOver: boolean) => void,
) => {
  e.preventDefault();
  setIsOverDropArea(false);
};
