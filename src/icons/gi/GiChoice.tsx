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

export const GiChoice = (props: IconProps) => {
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
        <Path d="M400 25c-48.2 0-87 38.84-87 87 0 48.2 38.8 87 87 87s87-38.8 87-87c0-48.16-38.8-87-87-87m40.5 34.01 15 9.98-70.1 105.11-55.8-55.7 12.8-12.8 40.2 40.3zM304.7 156.1 186.4 238H32v36h154.4l118.3 81.9c5.1-11 12.1-21 20.5-29.5L223.6 256l101.6-70.4c-8.4-8.5-15.4-18.5-20.5-29.5M400 313c-48.2 0-87 38.8-87 87s38.8 87 87 87 87-38.8 87-87-38.8-87-87-87m-41.6 32.6 41.6 41.6 41.6-41.6 12.8 12.8-41.6 41.6 41.6 41.6-12.8 12.8-41.6-41.6-41.6 41.6-12.8-12.8 41.6-41.6-41.6-41.6z" />
      </G>
    </Svg>
  );
};