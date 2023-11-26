// CustomButton.tsx
import React, { ReactNode, ButtonHTMLAttributes } from 'react';

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  title?: string;
  image?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ icon, title, image, ...rest }) => {
  return (
    <button {...rest} className="inline-flex">
      <div className="mr-3 inline-flex">
        {icon && React.cloneElement(icon as React.ReactElement, { className: 'scale-75' })}
        {image && <img src={image} alt="Button Icon" className="mr-1 inline-flex" />}
      </div>
      {title && <span>{title}</span>}
    </button>
  );
};

export default CustomButton;
