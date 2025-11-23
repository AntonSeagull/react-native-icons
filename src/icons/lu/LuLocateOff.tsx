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

export const LuLocateOff = (props: IconProps) => {
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
        <Path d="M12 19v3M12 2v3M18.89 13.24a7 7 0 0 0-8.13-8.13M19 12h3M2 12h3M2 2l20 20M7.05 7.05a7 7 0 0 0 9.9 9.9" />
      </G>
    </Svg>
  );
};