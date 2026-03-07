// ImageQuery interface, which represents the structure of the query parameters for image processing requests.
export interface ImageQuery {
  filename: string;
  width?: number;
  height?: number;
  sigma?: number;
  flip?: boolean;
  flop?: boolean;
  angle?: number;
  grayscale?: boolean;
}
