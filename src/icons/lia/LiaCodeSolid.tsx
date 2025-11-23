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

export const LiaCodeSolid = (props: IconProps) => {
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
        <Path d="m18 5-6 22h2l6-22ZM7.938 6.406l-6.75 9L.75 16l.438.594 6.75 9 1.625-1.188L3.25 16l6.313-8.406Zm16.125 0-1.625 1.188L28.75 16l-6.312 8.406 1.625 1.188 6.75-9L31.25 16l-.437-.594Z" />
      </G>
    </Svg>
  );
};