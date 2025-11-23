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

export const TbLetterCaseLower = (props: IconProps) => {
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
        <Path d="M3 15.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0-7 0M10 12v7M14 15.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0-7 0M21 12v7" />
      </G>
    </Svg>
  );
};