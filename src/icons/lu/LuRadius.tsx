

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuRadius = (props: IconProps) => {

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
          <Path d="M20.34 17.52a10 10 0 1 0-2.82 2.82" />
          <Path d="m13.41 13.41 4.18 4.18" />
        </G>
      </Svg>
    );
  }

