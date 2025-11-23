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

export const GiSpawnNode = (props: IconProps) => {
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
        <Path d="M136 16v30h240V16zm0 60v60h240V76zm0 90v90h240v-90zm0 120v120h240V286zm-30 150c-15 0-30 15-30 30v30h360v-30c0-15-15-30-30-30z" />
      </G>
    </Svg>
  );
};