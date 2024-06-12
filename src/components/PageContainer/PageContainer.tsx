import clsx from 'clsx';

import s from './PageContainer.module.css';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

const PageContainer = ({ children, className }: PageContainerProps) => {
  return <div className={clsx(s.container, className)}>{children}</div>;
};

export default PageContainer;
