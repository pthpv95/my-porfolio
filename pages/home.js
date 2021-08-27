import React, { useEffect, useState } from 'react';
import Portfolio from './portfolio';
import useIsMounted from '../hooks/useIsMounted';
import Skills from './skills';

const Home = () => {
  const [runningText, setRunningText] = useState('I build ')
  const [isRunning, setIsRunning] = useState(false)
  const content = ['web interfaces.', 'automation tool.', 'design mockup.', 'backend system.'];
  const { isMounted } = useIsMounted()

  function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const setStateWhenMounted = (cb) => {
    if (isMounted.current) cb()
  }

  useEffect(() => {
    const runLetter = async (text) => {
      let newText = runningText;
      for (let index = 0; index < text.length; index++) {
        const element = text[index];
        newText = newText + element;
        await timeout(150)
        setStateWhenMounted(() => setRunningText(newText))
      }
      await timeout(500)
      for (let index = 0; index < text.length; index++) {
        newText = newText.substring(0, newText.length - 1);
        await timeout(50)
        setStateWhenMounted(() => setRunningText(newText))
      }
    }
    const runAllText = async () => {
      if (isRunning) return;
      setStateWhenMounted(() => setIsRunning(true))
      for (let index = 0; index < content.length; index++) {
        await timeout(500)
        await runLetter(content[index])
      }
      setStateWhenMounted(() => setIsRunning(false))
    }

    runAllText()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRunning])


  return (
    <main className="main-content">
      <div className="main-content__introduction">
        <div className="main-content__introduction--heading">
          <span>Hey,</span>
          <span>I&apos;m Hiển aka Lee, </span>
          <span>web developer </span>
        </div>
        <div className="main-content__introduction--explain-in-code">
          <span className="code-block-wrapper">{'<code>'}</span>
          <span className="main-content__introduction--explain-in-code">
            {runningText} {'|'}
          </span>
          <span className="code-block-wrapper">{'</code>'}</span>
        </div>
        <button className="main-content__introduction--contact-me"><a href="mailto:thehienpv@gmail.com">Drop me an email !</a> </button>
      </div>
      <Skills />
      <Portfolio />
    </main>
  );
};

export default Home;