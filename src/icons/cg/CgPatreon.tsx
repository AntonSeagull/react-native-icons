

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgPatreon = (props: IconProps) => {

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
          <Path  opacity="0.5" d="M21 10C21 13.3137 18.3137 16 15 16C11.6863 16 9 13.3137 9 10C9 6.68629 11.6863 4 15 4C18.3137 4 21 6.68629 21 10Z" fill="currentColor" />
          <Path  d="M3 4H7V20H3V4Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

