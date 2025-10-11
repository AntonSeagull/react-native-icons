

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuContactRound = (props: IconProps) => {

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
          <Path d="M16 2v2" />
          <Path d="M17.915 22a6 6 0 0 0-12 0" />
          <Path d="M8 2v2" />
        </G>
      </Svg>
    );
  }

