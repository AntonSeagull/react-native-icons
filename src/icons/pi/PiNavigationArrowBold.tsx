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

export const PiNavigationArrowBold = (props: IconProps) => {
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
        <Path d="M238.7 102.46 62.81 37.21l-.25-.09a20 20 0 0 0-25.44 25.44l.09.25 65.25 175.89A20 20 0 0 0 121.3 252h.35a20 20 0 0 0 18.77-14.12l.09-.29 21.23-75.85 75.85-21.23.29-.09a20 20 0 0 0 .82-38Zm-89.93 38a12 12 0 0 0-8.32 8.32l-19.68 70.29L62.8 62.8l156.26 58Z" />
      </G>
    </Svg>
  );
};