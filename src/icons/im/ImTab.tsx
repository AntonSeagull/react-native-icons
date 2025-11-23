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

export const ImTab = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M3 1v12h12V1zm11 11H4V2h10zM2 14V3.5l-1-1V15h12.5l-1-1z" />
        <Path d="M5.5 4 8 6.5l-3 3L6.5 11l3-3 2.5 2.5V4z" />
      </G>
    </Svg>
  );
};