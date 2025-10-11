

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiCamera = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 17 17"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 8.5, 8.5)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M5.958 3v-1h-2.916v1h-3.042v12h17v-12h-11.042zM16 14h-15v-7h6.557c-0.345 0.591-0.557 1.269-0.557 2 0 2.206 1.794 4 4 4s4-1.794 4-4c0-0.731-0.212-1.409-0.557-2h1.557v7zM14 9c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zM13.618 6c-0.704-0.614-1.612-1-2.618-1s-1.914 0.386-2.618 1h-7.382v-2h15v2h-2.382z" />
        </G>
      </Svg>
    );
  }

