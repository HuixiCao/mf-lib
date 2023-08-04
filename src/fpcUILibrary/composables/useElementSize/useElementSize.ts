import { Ref, ref, watch } from 'vue';

interface ElementSize {
  width: Ref<number>;
  height: Ref<number>;
}

/**
 * Returns an object with `width` and `height` properties that are `Ref`s to numbers representing the size of an element.
 *
 * @param element A `Ref` to an `HTMLElement` or `null`.
 * @returns An object with `width` and `height` properties that are `Ref`s to numbers representing the size of the element.
 */
export function useElementSize(element: Ref<HTMLElement | null>): ElementSize {
  const width = ref(0);
  const height = ref(0);

  let observer: ResizeObserver | null = null;

  function disconnect() {
    if (observer !== null) {
      observer.disconnect();
      observer = null;
    }
  }

  function connect(element: HTMLElement) {
    disconnect();
    observer = new ResizeObserver((entries) => {
      const rect = entries[0]?.contentRect;
      if (rect) {
        width.value = rect.width;
        height.value = rect.height;
      }
    });

    observer.observe(element);
  }

  watch(element, (el) => {
    if (el) connect(el);
    else disconnect();
  });

  return {
    width,
    height,
  };
}
