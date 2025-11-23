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

export const WiDirectionRight = (props: IconProps) => {
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
        <Path d="M9.94 14.36c0 .22.08.42.23.57s.34.22.56.2h6.58l-1.03 1.08c-.16.16-.24.35-.24.55 0 .22.08.42.24.57.16.16.35.23.58.23.21-.01.39-.1.53-.27l2.45-2.41c.16-.16.23-.35.23-.58a.83.83 0 0 0-.24-.58l-2.47-2.39a.67.67 0 0 0-.54-.23c-.23 0-.42.07-.57.22-.16.15-.23.34-.23.56 0 .23.08.42.23.57l1.06 1.08h-6.59a.77.77 0 0 0-.56.25c-.15.17-.22.36-.22.58" />
      </G>
    </Svg>
  );
};