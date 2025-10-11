

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbPizzaOff = (props: IconProps) => {

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
          <Path  d="M10.313 6.277l1.687 -3.277l5.34 10.376m2.477 6.463a19.093 19.093 0 0 1 -7.817 1.661c-3.04 0 -5.952 -.714 -8.5 -1.983l5.434 -10.559" />
          <Path  d="M5.38 15.866a14.94 14.94 0 0 0 6.815 1.634c1.56 0 3.105 -.24 4.582 -.713" />
          <Path  d="M11 14v-.01" />
          <Path  d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

