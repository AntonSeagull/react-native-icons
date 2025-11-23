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

export const LiaFoursquare = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M10 5c-1.094 0-2 .906-2 2v18.719c0 .508.36.972.781 1.125.414.148.985.027 1.313-.344l6.312-7.5h3.438a2.03 2.03 0 0 0 1.968-1.625l1.938-10C23.984 6.16 23.02 5 21.781 5Zm0 2h11.781L21 11h-6.531a.48.48 0 0 0-.469.469v1.062c0 .25.219.469.469.469h6.156l-.781 4h-3.938a1 1 0 0 0-.781.344L10 23.5Z" />
      </G>
    </Svg>
  );
};