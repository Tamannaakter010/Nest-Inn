const Title = ({ title, subTitle, align = 'text-center', font = 'font-playfair' }) => {
  return (
    <div className={`${align}`}>
      <h1 className={`text-xl md:text-[40px] ${font}`}>{title}</h1>
      <p>{subTitle}</p>
    </div>
  );
};

export default Title;
