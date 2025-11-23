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

export const MdFrontLoader = (props: IconProps) => {
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
        <Path d="m19.5 6.5-1.91 1.91c-.38.38-.59.89-.59 1.42V11h-1V7c0-1.66-1.34-3-3-3H8v5H3c-1.1 0-2 .9-2 2v5.85c0 1.58 1.16 3.01 2.74 3.14a2.99 2.99 0 0 0 3.07-1.98l4.37-.01a2.98 2.98 0 0 0 3.41 1.94 3.01 3.01 0 0 0 2.35-2.39c.2-1.11-.22-2.11-.95-2.77V13h1c0 1.1.9 2 2 2h5zM4 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m6-12h3c.55 0 1 .45 1 1v4h-4zm4 12c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1" />
      </G>
    </Svg>
  );
};