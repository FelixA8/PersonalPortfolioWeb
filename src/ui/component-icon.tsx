interface MyComponentProps {
  children: React.ReactNode;
}

const IconComponent: React.FC<MyComponentProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default IconComponent
