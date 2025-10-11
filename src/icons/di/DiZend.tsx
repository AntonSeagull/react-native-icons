

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const DiZend = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 32 32"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M15.334 14.023c0 0 0-2.972 2.972-2.972h8.917c0 0 0 2.972-2.972 2.972h-8.917zM15.334 17.821c0 0 0-2.972 2.972-2.972h4.459c0 0 0 2.972-2.972 2.972h-4.459zM15.334 21.619c0 0 0-2.972 2.972-2.972h1.486c0 0 0 2.972-2.972 2.972h-1.486zM14.336 19.3v2.371h-9.559l6.158-8.399h-5.286v-2.371h9.972l-6.129 8.4z" fill="#444444" />
        </G>
      </Svg>
    );
  }

