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

export const BiUpsideDown = (props: IconProps) => {
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
        <Path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2m0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8" />
        <Path d="M14.829 9.172q.273.273.488.592l1.658-1.119a6.1 6.1 0 0 0-1.621-1.62 6 6 0 0 0-2.148-.903 5.99 5.99 0 0 0-5.448 1.634 6 6 0 0 0-.733.889l1.657 1.119a4.02 4.02 0 0 1 2.51-1.683 3.99 3.99 0 0 1 3.637 1.091" />
        <Circle cx={15.5} cy={13.5} r={1.5} />
        <Circle cx={8.507} cy={13.507} r={1.493} />
      </G>
    </Svg>
  );
};