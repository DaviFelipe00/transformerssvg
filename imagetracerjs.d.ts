declare module 'imagetracerjs' {
  export interface ImageData {
    data: Uint8ClampedArray;
    width: number;
    height: number;
  }

  export interface TracerOptions {
    ltres?: number;
    qtres?: number;
    pathomit?: number;
    scale?: number;
    strokewidth?: number;
    blurradius?: number;
    blurdelta?: number;
    linefilter?: boolean;
    rightangleenhance?: boolean;
    colorsampling?: number;
    numberofcolors?: number;
    mincolorratio?: number;
    colorquantcycles?: number;
    layering?: number;
    pal?: number[][];
  }

  export function imagedataToSVG(
    imagedata: ImageData,
    options?: TracerOptions
  ): string;

  export function imageToSVG(
    url: string,
    callback: (svgstr: string) => void,
    options?: TracerOptions
  ): void;

  export function appendSVGString(
    svgstr: string,
    parentid: string
  ): void;

  const ImageTracer: {
    imagedataToSVG: typeof imagedataToSVG;
    imageToSVG: typeof imageToSVG;
    appendSVGString: typeof appendSVGString;
  };

  export default ImageTracer;
}