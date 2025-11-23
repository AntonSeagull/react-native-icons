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

export const HiOutlineCalculator = (props: IconProps) => {
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
        <Path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25zm0 2.25h.008v.008H8.25zm0 2.25h.008v.008H8.25zm0 2.25h.008v.008H8.25zm2.498-6.75h.007v.008h-.007zm0 2.25h.007v.008h-.007zm0 2.25h.007v.008h-.007zm0 2.25h.007v.008h-.007zm2.504-6.75h.008v.008h-.008zm0 2.25h.008v.008h-.008zm0 2.25h.008v.008h-.008zm0 2.25h.008v.008h-.008zm2.498-6.75h.008v.008h-.008zm0 2.25h.008v.008h-.008zM8.25 6h7.5v2.25h-7.5zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A49 49 0 0 0 12 2.25" />
      </G>
    </Svg>
  );
};