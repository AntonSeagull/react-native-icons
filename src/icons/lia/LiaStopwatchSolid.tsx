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

export const LiaStopwatchSolid = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M13 4v2h6V4Zm3 3C9.938 7 5 11.938 5 18s4.938 11 11 11 11-4.937 11-11c0-2.918-1.137-5.59-3-7.562l1.719-1.72-1.438-1.437-1.812 1.813A10.97 10.97 0 0 0 16 7m0 2c4.98 0 9 4.02 9 9s-4.02 9-9 9-9-4.02-9-9 4.02-9 9-9m-1 2v5.281c-.598.348-1 .98-1 1.719 0 .738.402 1.371 1 1.719V21h2v-1.281c.598-.348 1-.98 1-1.719 0-.738-.402-1.371-1-1.719V11Z" />
      </G>
    </Svg>
  );
};