import CommentSystem from "./Comments-v2/CommentSystem";
import { AnimalProvider } from "./MockInterview/AnimalProvider";

import Component from "./MockInterview/Component";
import MockIndex from "./MockInterview/MockIndex";

function App() {
  return (
    <div>
      <AnimalProvider>
        <MockIndex />
        <Component />
      </AnimalProvider>
      <CommentSystem />
    </div>
  );
}

export default App;
