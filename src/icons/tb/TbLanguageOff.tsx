

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbLanguageOff = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
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
        <G fill={color} stroke={color}>
          <Path  d="M4 5h1m4 0h2" />
          <Path  d="M9 3v2m-.508 3.517c-.814 2.655 -2.52 4.483 -4.492 4.483" />
          <Path  d="M5 9c0 2.144 2.952 3.908 6.7 4" />
          <Path  d="M12 20l2.463 -5.541m1.228 -2.764l.309 -.695l.8 1.8" />
          <Path  d="M18 18h-5.1" />
          <Path  d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

