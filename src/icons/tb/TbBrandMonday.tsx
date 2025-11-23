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

export const TbBrandMonday = (props: IconProps) => {
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
        <Path d="M18 15.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0M9.5 7a1.5 1.5 0 0 1 1.339 2.177l-4.034 7.074c-.264.447-.75.749-1.305.749a1.5 1.5 0 0 1-1.271-2.297l3.906-6.827A1.5 1.5 0 0 1 9.5 7M16.5 7a1.5 1.5 0 0 1 1.339 2.177l-4.034 7.074c-.264.447-.75.749-1.305.749a1.5 1.5 0 0 1-1.271-2.297l3.906-6.827A1.5 1.5 0 0 1 16.5 7" />
      </G>
    </Svg>
  );
};