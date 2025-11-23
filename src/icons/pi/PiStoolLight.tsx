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

export const PiStoolLight = (props: IconProps) => {
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
        <Path d="M198 64V40a14 14 0 0 0-14-14H72a14 14 0 0 0-14 14v24a14 14 0 0 0 14 14h9L58.07 223.06a6 6 0 0 0 5 6.87 6 6 0 0 0 6.86-5L78 174h100l8 50.93a6 6 0 1 0 11.86-1.87L175 78h9a14 14 0 0 0 14-14M70 64V40a2 2 0 0 1 2-2h112a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2H72a2 2 0 0 1-2-2m106.14 98H79.86l13.27-84h69.74Z" />
      </G>
    </Svg>
  );
};