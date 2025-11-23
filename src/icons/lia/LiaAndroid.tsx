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

export const LiaAndroid = (props: IconProps) => {
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
        <Path d="M10.531 3.5a.5.5 0 0 0-.25.813l1.469 2.125A7.02 7.02 0 0 0 9 12v10c0 .703.441 1.203 1 1.563V26.5c0 1.367 1.133 2.5 2.5 2.5s2.5-1.133 2.5-2.5V24h2v2.5c0 1.367 1.133 2.5 2.5 2.5s2.5-1.133 2.5-2.5v-2.937c.559-.36 1-.86 1-1.563V12a7.02 7.02 0 0 0-2.75-5.562l1.469-2.125a.501.501 0 0 0-.406-.812.4.4 0 0 0-.094-.001.5.5 0 0 0-.313.25l-1.5 2.125A7 7 0 0 0 16 5a7 7 0 0 0-3.406.875l-1.5-2.125a.5.5 0 0 0-.406-.25.4.4 0 0 0-.094 0zM16 7a5 5 0 0 1 4.906 4h-9.812c.465-2.285 2.48-4 4.906-4m-2 1c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1m4 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1M6 11v10h2V11Zm18 0v10h2V11Zm-13 2h10v9h-1v4.5c0 .285-.215.5-.5.5a.49.49 0 0 1-.5-.5V22h-6v4.5c0 .285-.215.5-.5.5a.49.49 0 0 1-.5-.5V22h-1Z" />
      </G>
    </Svg>
  );
};