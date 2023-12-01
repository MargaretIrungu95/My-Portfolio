import React, { useEffect, useState } from 'react';
import TagCloud from 'TagCloud';

const Tagcloud = () => {
    const [isLoading, setLoad] = useState(true);

    const container = '.content';
    const texts = [
        'React',
        'mongoDB',
        'ExpressJS',
        'NodeJS',
        'HTML5',
        'CSS3',
        'JavaScript',
        'MySQL',
        'Git',
        'Agile'
    ]
    const options = {
        radius: 270,
      // animation speed
      // slow, normal, fast
        maxSpeed: 'fast',
        initSpeed: 'fast',
      // 0 = top
      // 90 = left
      // 135 = right-bottom
        direction: 135,
      // interact with cursor move on mouse out
        keep: true,
    }
    //   to render wordcloud each time the page is reloaded
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        if (isLoading) {
            TagCloud(container, texts, options);
            console.log('Tag cloud loading...');
            setLoad(false);
        }
    });

    return (
        <div className="main">
            <span className="content"></span>
        </div>
    );
};

export default Tagcloud;