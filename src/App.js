import styled from "styled-components";
import Countdown from "react-countdown";

const timer = 5000; // (1800000 = 30min), (5000 = 5 segundos)

const generateRandomHash = () => {
  const array = new Uint8Array(16);
  window.crypto.getRandomValues(array);

  let hash = "";
  for (let i = 0; i < array.length; i++) {
    hash += array[i].toString(16).padStart(2, "0");
  }

  return hash;
};

const renderCalc = ({ completed }) => {
  if (completed) {
    return <>{Math.floor(Math.random() * 400) + 1}</>;
  } else {
    return "calculating...";
  }
};

const Completionist = () => (
  <Wrapper>
    <PositionWrapper>
      Your Position:{" "}
      <Position id="MainPart_lbQueueNumber">
        <Countdown date={Date.now() + 3000} renderer={renderCalc}></Countdown>
      </Position>
    </PositionWrapper>
    <QueueWrapper>
      Your queue id:{" "}
      <QueueId id="hlLinkToQueueTicket2">{generateRandomHash()}</QueueId>
    </QueueWrapper>
  </Wrapper>
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Tickets 4 fun - taylor simulator</p>
      </header>

      <Countdown date={Date.now() + timer}>
        <Completionist />
      </Countdown>
    </div>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

const PositionWrapper = styled.div``;
const QueueWrapper = styled.div``;
const Position = styled.div``;
const QueueId = styled.div``;

export default App;
