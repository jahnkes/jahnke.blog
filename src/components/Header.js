import React from "react"

const Header = () => {
  React.useEffect(() => {
    // This plays the animation at a certain threshold
    // (there is also some CSS to un-comment below)
    // const el = document.querySelector("#logo");
    // const onScroll = event => {
    //   requestAnimationFrame(() => {
    //     if (window.scrollY > 50) {
    //       el.classList.add("scrolled");
    //     } else {
    //       el.classList.remove("scrolled");
    //     }
    //   });
    // };

    // This uses scroll position to determine the animation progress:
    const even = document.querySelectorAll("#logo .bar:nth-of-type(even)")
    const odd = document.querySelectorAll("#logo .bar:nth-of-type(odd)")

    const onScroll = event => {
      window.requestAnimationFrame(() => {
        const end = 400
        const to = 200
        const percentage = window.scrollY / end
        if (percentage > 100) {
          return
        }
        const position = to * percentage
        const translate = `translate(-${position}%, -${position}%)`
        Array.from(even).forEach(
          el => (el.style.transform = `rotate(-45deg) ${translate}`),
        )
        Array.from(odd).forEach(
          el => (el.style.transform = `rotate(45deg) ${translate}`),
        )
      })
    }
    window.addEventListener("scroll", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  return (
    <>
      <div id="logo">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="letters">
          <a href="/">
            <span className="a">A</span>
            <span className="and">+</span>
            <span className="o">O</span>
          </a>
        </div>
      </div>
      <style jsx global>{`
        #logo {
          height: 30rem;
          overflow: hidden;
          position: relative;
          width: 100%;
        }
        .letters {
          font-family: Georgia, Times, serif;
          font-size: 8rem;
          left: 50%;
          position: absolute;
          top: 50%;
          transform: translate(-50%, -50%);
          transition-delay: 0.5s;
          transition-duration: 0.5s;
          transition-property: opacity;
        }
        .letters a {
          color: var(--foreground);
        }
        .letters .a,
        .letters .and,
        .letters .o {
          height: 14rem;
          line-height: 14rem;
          position: absolute;
          transform: translate(0%, -50%);
        }
        .letters .a,
        .letters .o {
          text-align: center;
          width: 14rem;
        }
        .letters .a {
          position: absolute;
          right: 0%;
          top: 50%;
        }
        .letters .and {
          margin: -5px 0px 0px 1px;
          position: absolute;
          transform: translate(-50%, -50%);
        }
        .letters .o {
          left: 0%;
          position: absolute;
        }
        .bar {
          background-color: var(--foreground);
          height: 30rem;
          left: 50%;
          position: absolute;
          top: 0%;
          // transition-duration: 1s;
          // transition-property: transform;
          width: 1px;
        }
        .bar:nth-of-type(odd) {
          transform: rotate(45deg);
        }
        .bar:nth-of-type(even) {
          transform: rotate(-45deg);
        }
        .bar:nth-of-type(1),
        .bar:nth-of-type(6) {
          height: 35rem;
          top: -9rem;
        }
        .bar:nth-of-type(2),
        .bar:nth-of-type(5) {
          height: 25rem;
          top: 4.5rem;
        }
        .bar:nth-of-type(1) {
          margin-left: -7.5rem;
        }
        .bar:nth-of-type(5) {
          background-color: var(--yellow);
          margin-left: 12rem;
        }
        .bar:nth-of-type(2) {
          margin-left: -12rem;
        }
        .bar:nth-of-type(6) {
          margin-left: 7.5rem;
        }
        .scrolled .letters {
          opacity: 0;
          transition-delay: 0s;
        }
        .scrolled .bar:nth-of-type(odd) {
          transform: rotate(45deg) translate(-200%, -200%);
        }
        .scrolled .bar:nth-of-type(even) {
          transform: rotate(-45deg) translate(-200%, -200%);
        }
      `}</style>
    </>
  )
}

export default Header
