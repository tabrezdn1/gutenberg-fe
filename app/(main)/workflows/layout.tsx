import './workflow.css';
const DesignerLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className='flex'>
        <div className='mx-auto px-4 w-full min-h-screen '>{children}</div>
      </div>
    </>
  );
};

export default DesignerLayout;
