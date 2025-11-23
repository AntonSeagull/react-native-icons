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

export const Imk2 = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3 4c.552 0 1 .672 1 1.5S11.552 7 11 7s-1-.672-1-1.5.448-1.5 1-1.5m-5.5.876c.932 0 1.594.349 1.594.895 0 .116.06.672-.003.775-.232-.384-.856-.659-1.591-.659s-1.359.275-1.591.659c-.062-.103-.003-.659-.003-.775 0-.546.662-.895 1.594-.895M7.818 13c-1.863 0-3.498-1.004-4.42-2.515 1.1.86 3.04 1.028 5.083.625 2.191-.433 3.892-1.43 4.507-2.759C12.65 10.975 10.464 13 7.818 13" />
      </G>
    </Svg>
  );
};