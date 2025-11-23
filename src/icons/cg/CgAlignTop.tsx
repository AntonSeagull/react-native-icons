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

export const CgAlignTop = (props: IconProps) => {
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
        <Path fill="currentColor" fillOpacity={0.5} fillRule="evenodd" d="m13.035 7.988.002 6 4-.002-.002-6z" clipRule="evenodd" />
        <Path fill="currentColor" fillRule="evenodd" d="M18 4.012 6 4.018v2l12-.006zM11.037 19.986l-.005-12-4 .002.005 12z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};