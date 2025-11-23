import {
  G,
  Path,
  Svg,
  Line,
  Circle,
  Polyline,
  Polygon,
  Rect,
  Ellipse
} from 'react-native-svg';
import type { IconProps } from '../../types';

export const SiSitepoint = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m2.471 10.533 1.771 1.688 5.598 5.141 2.4-2.291a.804.804 0 0 0-.046-.985L9.99 12.184l.01-.005-2.371-2.266a.79.79 0 0 1 .021-1.079l6.39-6.076L11.146 0 2.475 8.238a1.57 1.57 0 0 0 0 2.295zm19.056 2.937-1.77-1.691-5.595-5.142-2.411 2.291a.77.77 0 0 0 .045.985l2.205 1.891h-.006l2.369 2.265a.77.77 0 0 1-.029 1.064l-6.391 6.075L12.855 24l8.67-8.238a1.57 1.57 0 0 0 0-2.295z" />
      </G>
    </Svg>
  );
};