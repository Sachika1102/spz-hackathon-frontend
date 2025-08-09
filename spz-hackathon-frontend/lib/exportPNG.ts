// lib/exportPNG.ts
import { toPng } from "html-to-image";

export async function exportElementToPNG(
  element: HTMLElement,
  filename: string
) {
  const dataUrl = await toPng(element, {
    cacheBust: true,
    pixelRatio: 2, // 2xで高解像度に
    filter: (node) => {
      // data-export-ignore="true" が付いた要素は画像化しない（ボタン等）
      return !(
        node instanceof HTMLElement && node.dataset?.exportIgnore === "true"
      );
    },
  });

  const link = document.createElement("a");
  link.download = filename.endsWith(".png") ? filename : `${filename}.png`;
  link.href = dataUrl;
  link.click();
}
