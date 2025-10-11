

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FiMousePointer = (props: IconProps) => {

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
          <Path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
          <Path d="M13 13l6 6" />
        </G>
      </Svg>
    );
  }

