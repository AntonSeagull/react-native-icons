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

export const CgShapeZigzag = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M2.312 9 1 10.51l3.774 3.28 1.509 1.312 1.312-1.51 1.54-1.77 2.264 1.968 1.51 1.312 1.311-1.51 1.538-1.769 2.263 1.967 1.51 1.312 1.311-1.51 1.969-2.264-1.51-1.312-1.968 2.264L15.559 9l-1.312 1.51h.002l-1.538 1.77L8.937 9l-.883 1.016-1.968 2.264z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};