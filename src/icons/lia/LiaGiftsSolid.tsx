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

export const LiaGiftsSolid = (props: IconProps) => {
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
        <Path d="M9 4v3.234L5.516 5.143 4.484 6.857 6.39 8H3v19h6v-2H5V10h8.027c.833-.62 1.857-1 2.973-1 .352 0 .682.042 1 .102V8h-3.389l1.905-1.143-1.032-1.714L11 7.234V4zm7 7c-1.645 0-3 1.355-3 3 0 .352.075.684.188 1H11v12h18V15h-2.187A2.9 2.9 0 0 0 27 14c0-1.645-1.355-3-3-3-1.75 0-2.938 1.328-3.719 2.438-.105.147-.188.294-.281.439-.094-.145-.176-.29-.281-.44C18.937 12.328 17.75 11 16 11m0 2c.625 0 1.438.672 2.063 1.563.152.218.129.231.25.439H16c-.566 0-1-.434-1-1A.985.985 0 0 1 16 13m8 0c.566 0 1 .434 1 1s-.434 1-1 1h-2.312c.122-.207.098-.22.25-.437C22.563 13.67 23.375 13 24 13m-11 4h6v8h-6zm8 0h6v8h-6z" />
      </G>
    </Svg>
  );
};