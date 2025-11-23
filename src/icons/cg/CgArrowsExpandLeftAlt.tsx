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

export const CgArrowsExpandLeftAlt = (props: IconProps) => {
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
        <Path fill="currentColor" d="M10.1 2.1v2H5.516l5.778 5.779-1.414 1.414L4.1 5.515V10.1h-2v-8zM21.9 13.9h-2v4.585l-5.779-5.778-1.414 1.414 5.778 5.778H13.9v2h8zM16.243 9.172l-1.415-1.415-7.07 7.072 1.414 1.414z" />
      </G>
    </Svg>
  );
};