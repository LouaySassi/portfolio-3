import React, { useState } from 'react';
export interface NavigationItem {
  label: string;
  href: string;
}
export interface NavigationToggleProps {
  items?: NavigationItem[];
  defaultActive?: number;
  onItemClick?: (item: NavigationItem, index: number) => void;
  'data-id'?: string;
}
export function NavigationToggle({
  items = [{
    label: 'Work',
    href: '#'
  }, {
    label: 'Info',
    href: '/info'
  }],
  defaultActive = 0,
  onItemClick,
  'data-id': dataId
}: NavigationToggleProps) {
  const [activeIndex, setActiveIndex] = useState(defaultActive);
  const handleClick = (item: NavigationItem, index: number, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveIndex(index);
    onItemClick?.(item, index);
  };
  const itemWidth = 80;
  const padding = 6;
  return <div data-id={dataId} className="relative flex items-center justify-between" style={{
    pointerEvents: 'auto',
    backdropFilter: 'blur(15px)',
    backgroundColor: 'rgba(242, 242, 242, 0.08)',
    width: `${items.length * itemWidth + padding * 2}px`,
    height: '48px',
    paddingLeft: `${padding}px`,
    paddingRight: `${padding}px`,
    boxShadow: 'rgba(0, 0, 0, 0.3) 0px 15px 40px 0px',
    border: '1px solid rgba(242, 242, 242, 0.2)',
    borderRadius: '24px',
    color: 'rgb(242, 242, 242)',
    fontSize: '14px',
    lineHeight: '20px',
    fontFamily: 'Arial, sans-serif'
  }}>
      {items.map((item, index) => <a key={index} href={item.href} onClick={e => handleClick(item, index, e)} className="flex items-center justify-center text-center" style={{
      backgroundColor: 'rgba(0, 0, 0, 0)',
      maxWidth: '100%',
      color: 'rgb(242, 242, 242)',
      width: `${itemWidth}px`,
      height: '36px',
      transition: 'all 0.2s cubic-bezier(0.165, 0.84, 0.44, 1)',
      borderRadius: '18px',
      textDecoration: 'none',
      position: 'relative',
      zIndex: 1
    }}>
          <div style={{
        textAlign: 'center',
        letterSpacing: '0.2px',
        fontFamily: '"Neue Montreal", sans-serif',
        fontWeight: '500',
        lineHeight: '18px'
      }}>
            {item.label}
          </div>
        </a>)}
      <div style={{
      zIndex: 0,
      backgroundColor: 'rgba(242, 242, 242, 0.05)',
      width: `${itemWidth}px`,
      height: '36px',
      position: 'absolute',
      top: '5px',
      left: `${padding + activeIndex * itemWidth}px`,
      borderRadius: '18px',
      transition: 'left 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)'
    }} />
    </div>;
}