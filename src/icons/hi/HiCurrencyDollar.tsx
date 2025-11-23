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

export const HiCurrencyDollar = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 20 20"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 10, 10)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.3 2.3 0 0 1-.567-.267C8.07 8.34 8 8.114 8 8s.07-.34.433-.582M11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582s-.07.34-.433.582a2.3 2.3 0 0 1-.567.267" />
        <Path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16m1-13a1 1 0 1 0-2 0v.092a4.5 4.5 0 0 0-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 1 0-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 1 0 2 0v-.092a4.5 4.5 0 0 0 1.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.5 4.5 0 0 0 11 9.092V7.151c.391.127.68.317.843.504a1 1 0 1 0 1.511-1.31c-.563-.649-1.413-1.076-2.354-1.253z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};