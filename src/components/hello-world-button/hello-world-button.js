import './hello-world-button.css';

class HelloWorldButton {
  render() {
    const button = document.createElement('button');
    button.textContent = 'Hello world';
    button.classList.add('hello-world-button');
    button.addEventListener('click', () => {
      const p = document.createElement('p');
      p.textContent = 'Hello world';
      p.classList.add('hello-world-text');
      body.appendChild(p);
    });
    const body = document.querySelector('body');
    body.appendChild(button);
  }
}

export { HelloWorldButton as default };