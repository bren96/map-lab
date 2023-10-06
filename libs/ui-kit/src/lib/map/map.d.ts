// map.d.ts

declare module 'map' {
  export interface Layer {
    label: string;
    style: LayerStyle;
    data: LayerData;
  }

  export interface LayerStyle {
    type: 'point';
    size: number;
    color: string;
    stroke: number;
    strokeColor: string;
  }

  export interface LayerData {
    type: 'WFS';
    url: string;
    token: string;
  }

  export type Element = TextElement | ImageElement | RangeElement;

  export interface BaseElement {
    type: string;
    position: string;
    label?: string;
  }

  export interface TextElement extends BaseElement {
    type: 'text';
    text: string;
    fontSize: number;
  }

  export interface ImageElement extends BaseElement {
    type: 'image';
    source: string;
    height: number;
    width: number;
  }

  export interface RangeElement extends BaseElement {
    type: 'range';
    label: string;
    source: string;
    default: number;
    min: number;
    max: number;
  }

  export interface MapArgs {
    token: string;
    lat: number;
    lon: number;
    basemap: string;
    height: number;
    width: number;
    layers: {
      [key: string]: {
        data: LayerData;
        style: LayerStyle;
        label?: string;
      };
    };
    elements: {
      [key: stirng]: Element;
    };
  }

  const Default: {
    args: StoryArgs;
  };

  export default Default;
}
