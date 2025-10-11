

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCurrencyYenOff = (props: IconProps) => {

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
          <Path  d="M12 19v-7m5 -7l-3.328 4.66" />
          <Path  d="M8 17h8" />
          <Path  d="M8 13h5" />
          <Path  d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

