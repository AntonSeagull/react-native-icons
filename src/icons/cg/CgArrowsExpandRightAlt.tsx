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

export const CgArrowsExpandRightAlt = (props: IconProps) => {
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
        <Path fill="currentColor" d="M13.9 2.1v2h4.585L12.707 9.88l1.414 1.414L19.9 5.515V10.1h2v-8zM5.515 19.9H10.1v2h-8v-8h2v4.585l5.778-5.778 1.414 1.414zM9.172 7.757 7.757 9.172l7.071 7.07 1.415-1.414z" />
      </G>
    </Svg>
  );
};