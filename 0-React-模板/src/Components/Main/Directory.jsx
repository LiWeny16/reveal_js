import { Carousel } from 'antd';
const contentStyle = {
  margin: 0,
  height: '90vh',
  color: 'black',
  lineHeight: '100vh',
  textAlign: 'center',
  background: '#FFDDEE',
  fontSize:"16vh",
  userSelect: "none",
  border:"none"
};
const App = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Carousel style={{border:"none"}} afterChange={onChange}>
      <div>
        <h1 style={contentStyle}>1.Background</h1>
      </div>
      <div>
        <h1 style={contentStyle}>2.Introduction</h1>
      </div>
      <div>
        <h1 style={contentStyle}>3.Application</h1>
      </div>
      <div>
        <h1 style={contentStyle}>4.DEMO</h1>
      </div>
      <div>
        <h1 style={contentStyle}>5.future</h1>
      </div>
    </Carousel>
  );
};
export default App;