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

export const FcFilmReel = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 24, 24)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="#3F51B5" d="M43 39V24h-4v15c0 5 4 9 9 9v-4c-2.8 0-5-2.2-5-5" />
        <Circle cx={24} cy={24} r={19} fill="#90A4AE" />
        <Circle cx={24} cy={24} r={2} fill="#37474F" />
        <Circle cx={24} cy={14} r={5} />
        <Circle cx={24} cy={34} r={5} />
        <Circle cx={34} cy={24} r={5} />
        <Circle cx={14} cy={24} r={5} />
      </G>
    </Svg>
  );
};