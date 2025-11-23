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

export const WiDegrees = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 30 30"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 15, 15)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M13.19 9.21c0-.5.18-.93.53-1.28.36-.36.78-.53 1.28-.53.49 0 .92.18 1.27.53.35.36.53.78.53 1.28s-.18.93-.53 1.29-.78.54-1.27.54-.92-.18-1.28-.54-.53-.79-.53-1.29m.88 0c0 .26.09.48.27.67.19.19.41.28.67.28s.48-.09.67-.28.28-.41.28-.67a.87.87 0 0 0-.28-.66.95.95 0 0 0-.67-.28c-.26 0-.48.09-.67.27-.18.18-.27.4-.27.67" />
      </G>
    </Svg>
  );
};