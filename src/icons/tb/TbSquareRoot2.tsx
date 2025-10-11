

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbSquareRoot2 = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M13 12h1c1 0 1 1 2.016 3.527c.984 2.473 .984 3.473 1.984 3.473h1" />
          <Path d="M12 19c1.5 0 3 -2 4 -3.5s2.5 -3.5 4 -3.5" />
          <Path d="M3 12h1l3 8l3 -16h10" />
        </G>
      </Svg>
    );
  }

