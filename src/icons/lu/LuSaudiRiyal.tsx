

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuSaudiRiyal = (props: IconProps) => {

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
          <Path d="m20 19.5-5.5 1.2" />
          <Path d="M14.5 4v11.22a1 1 0 0 0 1.242.97L20 15.2" />
          <Path d="m2.978 19.351 5.549-1.363A2 2 0 0 0 10 16V2" />
          <Path d="M20 10 4 13.5" />
        </G>
      </Svg>
    );
  }

