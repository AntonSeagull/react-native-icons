

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgPlayPause = (props: IconProps) => {

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
          <Path d="M11 7H8V17H11V7Z" fill="currentColor" />
          <Path d="M13 17H16V7H13V17Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

