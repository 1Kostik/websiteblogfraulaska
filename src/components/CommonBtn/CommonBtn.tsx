import React, { ReactNode, MouseEventHandler } from 'react';
import cn from 'classnames';
import { StyledButton, StyledContent } from './CommonBtn.styled';

interface Props {
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
  isDisabled?: boolean;
}

export const CommonBtn: React.FC<Props> = ({
  className,
  onClick,
  children,
  isDisabled,
}) => {
  const buttonClassnames = cn(className, {
    disabled: isDisabled,
  });

  return (
    <StyledButton type="button" className={buttonClassnames} onClick={onClick} disabled={isDisabled}>
      <StyledContent>
        {children}
      </StyledContent>
    </StyledButton>
  );
};
