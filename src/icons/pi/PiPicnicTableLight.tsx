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

export const PiPicnicTableLight = (props: IconProps) => {
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
        <Path d="M248 130h-48.29l-30-60H192a6 6 0 0 0 0-12H64a6 6 0 0 0 0 12h22.29l-30 60H8a6 6 0 0 0 0 12h42.29l-23.66 47.32a6 6 0 0 0 10.74 5.36L63.71 142h128.58l26.34 52.68a6 6 0 1 0 10.74-5.36L205.71 142H248a6 6 0 0 0 0-12m-178.29 0 30-60h56.58l30 60Z" />
      </G>
    </Svg>
  );
};