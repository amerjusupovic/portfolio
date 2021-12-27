import React from 'react';
import "./App.scss";

// inspired by https://dev.to/selbekk/how-to-fade-in-content-as-it-scrolls-into-view-10j4
function FadeInSection(props: any) {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.createRef<HTMLDivElement>();
    React.useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => entry.isIntersecting && setVisible(true));
      });
      const node = domRef.current;
      if (node) {
        node.focus();
        observer.observe(node);
      }
    }, []);
    return (
      <div
        className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}
      >
        {props.children}
      </div>
    );
}

export default FadeInSection;
