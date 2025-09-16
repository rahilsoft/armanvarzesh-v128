import React from 'react';
export function Button({children, ...props}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className="btn" {...props}>{children}</button>;
}
