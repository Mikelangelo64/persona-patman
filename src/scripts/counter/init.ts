import { Timeline } from 'vevet';

const counterInit = () => {
  const counterArray: NodeListOf<HTMLElement> =
    document.querySelectorAll('.counter');

  if (counterArray.length === 0) {
    return;
  }

  counterArray.forEach((itemProp) => {
    const item = itemProp;
    const value = +(item.dataset.value || 0);
    if (Number.isNaN(value)) {
      return;
    }

    const timeline = new Timeline({ duration: 4000, destroyOnEnd: true });

    timeline.addCallback('progress', ({ easing }) => {
      item.innerHTML = `${Math.floor(value * easing)}`;
    });

    timeline.addCallback('end', () => {
      item.classList.add('finished');
    });
    timeline.play();
  });
};

export default counterInit;
