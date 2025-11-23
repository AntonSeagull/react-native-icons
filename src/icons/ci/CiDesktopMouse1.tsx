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

export const CiDesktopMouse1 = (props: IconProps) => {
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
        <Path d="M13.435 2.065h-2.87a6.5 6.5 0 0 0-6.5 6.5v6.87a6.5 6.5 0 0 0 6.5 6.5h2.87a6.5 6.5 0 0 0 6.5-6.5v-6.87a6.5 6.5 0 0 0-6.5-6.5m-8.37 6.5a5.51 5.51 0 0 1 5.5-5.5h.94v6.44h-6.44Zm13.87 6.87a5.5 5.5 0 0 1-5.5 5.5h-2.87a5.5 5.5 0 0 1-5.5-5.5v-4.93h13.87Zm0-5.93h-6.43v-6.44h.93a5.5 5.5 0 0 1 5.5 5.5Z" data-name="Desktop Mouse 1" />
      </G>
    </Svg>
  );
};