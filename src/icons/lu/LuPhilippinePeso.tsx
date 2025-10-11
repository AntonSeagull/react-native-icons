

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuPhilippinePeso = (props: IconProps) => {

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
          <Path d="M20 11H4" />
          <Path d="M20 7H4" />
          <Path d="M7 21V4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 12H7" />
        </G>
      </Svg>
    );
  }

