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

export const PiBone = (props: IconProps) => {
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
        <Path d="M231.67 60.89a35.82 35.82 0 0 0-23.82-12.74 36 36 0 1 0-66.37 22.92.3.3 0 0 1 0 .08l-70.31 70.36h-.1a36 36 0 1 0-22.92 66.37 36 36 0 1 0 66.37-22.92 1 1 0 0 1 0-.08l70.35-70.36h.1a36 36 0 0 0 46.74-53.63ZM219.1 97.16a20 20 0 0 1-25.67 3.8 16 16 0 0 0-19.88 2.19l-70.4 70.4a16 16 0 0 0-2.15 19.88 20 20 0 1 1-36.75 7.5 8 8 0 0 0-7.91-9.24 8.5 8.5 0 0 0-1.23.1A20 20 0 1 1 62.57 155a16 16 0 0 0 19.88-2.19l70.4-70.4A16 16 0 0 0 155 62.57a20 20 0 1 1 36.75-7.5 8 8 0 0 0 9.14 9.14 20 20 0 0 1 18.17 33Z" />
      </G>
    </Svg>
  );
};