

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BiCycling = (props: IconProps) => {

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
          <Path  d="M11 15.414V20h2v-4.586c0-.526-.214-1.042-.586-1.414l-2-2L13 9.414l2 2c.372.372.888.586 1.414.586H20v-2h-3.586l-3.707-3.707a.999.999 0 0 0-1.414 0L8 9.586c-.378.378-.586.88-.586 1.414s.208 1.036.586 1.414l3 3z" />
          <Path  d="M18 14c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zM6 22c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z" />
        </G>
      </Svg>
    );
  }

