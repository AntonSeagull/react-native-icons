

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuOrbit = (props: IconProps) => {

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
          <Path d="M20.341 6.484A10 10 0 0 1 10.266 21.85" />
          <Path d="M3.659 17.516A10 10 0 0 1 13.74 2.152" />
        </G>
      </Svg>
    );
  }

