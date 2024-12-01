import React, { useRef, useState, useEffect } from 'react';

interface CustomScrollbarProps {
  tableRef: React.RefObject<HTMLDivElement>;
}

const CustomScrollbar: React.FC<CustomScrollbarProps> = ({ tableRef }) => {
  const [isDragging, setIsDragging] = useState(false);
  const scrollbarRef = useRef<HTMLDivElement>(null);

  // Handle mouse move while dragging
  const onMouseMove = (e: MouseEvent) => {
    if (!isDragging || !tableRef.current || !scrollbarRef.current) return;

    const tableHeight = tableRef.current.scrollHeight - tableRef.current.clientHeight;
    const scrollbarHeight = scrollbarRef.current.clientHeight;
    const mousePosition = e.clientY - scrollbarRef.current.getBoundingClientRect().top;

    // Calculate the scroll position based on mouse movement
    const scrollPercentage = mousePosition / scrollbarHeight;
    const newScrollPosition = tableHeight * scrollPercentage;

    tableRef.current.scrollTop = Math.max(0, Math.min(newScrollPosition, tableHeight)); // Clamp to valid range
  };

  // Handle mouse down on the scrollbar
  const onMouseDown = () => {
    setIsDragging(true);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  // Handle mouse up
  const onMouseUp = () => {
    setIsDragging(false);
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  };

  // Sync the custom scrollbar with the table scroll position
  useEffect(() => {
    const table = tableRef.current;
    const scrollbar = scrollbarRef.current;

    if (!table || !scrollbar) return;

    const updateScrollbar = () => {
      const tableHeight = table.scrollHeight - table.clientHeight;
      const scrollPercentage = table.scrollTop / tableHeight;

      const scrollbarTrackHeight = table.clientHeight - scrollbar.clientHeight;
      const newScrollPosition = scrollPercentage * scrollbarTrackHeight;

      scrollbar.style.top = `${Math.max(0, Math.min(newScrollPosition, scrollbarTrackHeight))}px`; // Clamp to valid range
    };

    table.addEventListener('scroll', updateScrollbar);

    return () => {
      table.removeEventListener('scroll', updateScrollbar);
    };
  }, [tableRef]);

  return (
    <div
      ref={scrollbarRef}
      onMouseDown={onMouseDown}
      className="absolute w-[12.49px] h-[73.09px] bg-[#E43270] rounded-full cursor-pointer"
      style={{
        position: 'absolute',
        right: '0',
        top: '0',
        zIndex: '10',
      }}
    ></div>
  );
};

export default CustomScrollbar;
