

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const DiZend = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
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
        <G fill={color} stroke={color}>
          <Path  fill="#444444" d="M15.334 14.023c0 0 0-2.972 2.972-2.972h8.917c0 0 0 2.972-2.972 2.972h-8.917zM15.334 17.821c0 0 0-2.972 2.972-2.972h4.459c0 0 0 2.972-2.972 2.972h-4.459zM15.334 21.619c0 0 0-2.972 2.972-2.972h1.486c0 0 0 2.972-2.972 2.972h-1.486zM14.336 19.3v2.371h-9.559l6.158-8.399h-5.286v-2.371h9.972l-6.129 8.4z" />
        </G>
      </Svg>
    );
  }

