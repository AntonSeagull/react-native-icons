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

export const CiNoWaitingSign = (props: IconProps) => {
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
        <Path d="M12 2.07a9.93 9.93 0 1 0 7.03 16.95.4.4 0 0 0 .06-.07A9.84 9.84 0 0 0 21.935 12 9.944 9.944 0 0 0 12 2.07m0 18.86A8.945 8.945 0 0 1 3.065 12a8.84 8.84 0 0 1 2.28-5.95l12.61 12.61A8.93 8.93 0 0 1 12 20.93m6.67-2.98L6.045 5.34a8.934 8.934 0 0 1 12.62 12.61Z" data-name="No Watting Sign" />
      </G>
    </Svg>
  );
};