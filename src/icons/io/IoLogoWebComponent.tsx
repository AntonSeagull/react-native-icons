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

export const IoLogoWebComponent = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m179.9 388-76.16-132zM179.9 388h152.21l76.15-132-76.15-132H179.9l-76.16 132zM103.74 256l76.16-132z" style={{
        fill: "none"
        }} />
        <Path d="M496 256 376 48H239.74l-43.84 76h136.21l76.15 132-76.15 132H195.9l43.84 76H376z" />
        <Path d="m179.9 388-76.16-132 76.16-132 43.84-76H136L16 256l120 208h87.74z" />
      </G>
    </Svg>
  );
};