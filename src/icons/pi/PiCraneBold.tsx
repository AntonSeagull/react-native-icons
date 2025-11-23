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

export const PiCraneBold = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M230.17 13.71a12 12 0 0 0-11.82-.3L101 76H32a20 20 0 0 0-20 20v104a20 20 0 0 0 20 20h88a20 20 0 0 0 20-20v-32a11.9 11.9 0 0 0-.51-3.45L118.32 94 212 44v112h-12v-4a12 12 0 0 0-24 0v8a20 20 0 0 0 20 20h20a20 20 0 0 0 20-20V24a12 12 0 0 0-5.83-10.29M95.07 100l16.8 56H76v-56ZM52 100v56H36v-56Zm-16 96v-16h80v16Z" />
      </G>
    </Svg>
  );
};