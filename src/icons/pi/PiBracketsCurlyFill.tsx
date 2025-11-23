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

export const PiBracketsCurlyFill = (props: IconProps) => {
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
        <Path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M88 155.84c.29 14.26.41 20.16 16 20.16a8 8 0 0 1 0 16c-31.27 0-31.72-22.43-32-35.84-.29-14.26-.41-20.16-16-20.16a8 8 0 0 1 0-16c15.59 0 15.71-5.9 16-20.16.28-13.41.73-35.84 32-35.84a8 8 0 0 1 0 16c-15.59 0-15.71 5.9-16 20.16-.17 8.31-.41 20.09-8 27.84 7.59 7.75 7.83 19.53 8 27.84M200 136c-15.59 0-15.71 5.9-16 20.16-.28 13.41-.73 35.84-32 35.84a8 8 0 0 1 0-16c15.59 0 15.71-5.9 16-20.16.17-8.31.41-20.09 8-27.84-7.6-7.75-7.84-19.53-8-27.84-.29-14.26-.41-20.16-16-20.16a8 8 0 0 1 0-16c31.27 0 31.72 22.43 32 35.84.29 14.26.41 20.16 16 20.16a8 8 0 0 1 0 16" />
      </G>
    </Svg>
  );
};