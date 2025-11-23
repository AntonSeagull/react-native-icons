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

export const LiaAlgolia = (props: IconProps) => {
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
        <Path d="M5 5v22h22V5zm2 2h18v18H7zm8 1a1 1 0 0 0-1 1v1.295a6.96 6.96 0 0 1 4 0V9a1 1 0 0 0-1-1zm-4.293 2c-.256 0-.512.1-.707.295L9.293 11a1 1 0 0 0 0 1.414l.816.818a7 7 0 0 1 2.121-2.12l-.816-.817a1 1 0 0 0-.707-.295M16 11a6 6 0 1 0 0 12 6 6 0 0 0 0-12m0 2c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4m0 1v3l2.594-1.482A2.99 2.99 0 0 0 16 14" />
      </G>
    </Svg>
  );
};