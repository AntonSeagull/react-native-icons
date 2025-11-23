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

export const MdHdrPlus = (props: IconProps) => {
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
        <Path d="M8.5 14.5h2v1h-2zM14.5 7.5H16v3h-1.5z" />
        <Path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 13.5c0 .6-.4 1.1-.9 1.4L12 19h-1.5l-.9-2H8.5v2H7v-6h3.5c.8 0 1.5.7 1.5 1.5zm0-3.5h-1.5V9.5h-2V12H7V6h1.5v2h2V6H12zm5.5 4H16v1.5h-1.5V16H13v-1.5h1.5V13H16v1.49h1.5zm0-5.5c0 .8-.7 1.5-1.5 1.5h-3V6h3c.8 0 1.5.7 1.5 1.5z" />
      </G>
    </Svg>
  );
};