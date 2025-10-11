

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCurrencyOff = (props: IconProps) => {

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
          <Path  d="M18.531 14.524a7 7 0 0 0 -9.06 -9.053m-2.422 1.582a7 7 0 0 0 9.903 9.896" />
          <Path  d="M4 4l3 3" />
          <Path  d="M20 4l-3 3" />
          <Path  d="M4 20l3 -3" />
          <Path  d="M20 20l-3 -3" />
          <Path  d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

