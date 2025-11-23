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

export const TfiLayoutMediaRight = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M8 4v9h9V4zm8 8H9V5h7zM1.174 4H7v1H1.174zm2.329 3.996H7v1H3.503zm3.488-.998H0v-1h6.991zM.009 9.993H7v1H.009zM1.174 12H7v1H1.174z" />
      </G>
    </Svg>
  );
};