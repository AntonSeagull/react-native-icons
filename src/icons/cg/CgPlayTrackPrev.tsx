

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgPlayTrackPrev = (props: IconProps) => {

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
          <Path d="M18 17L10 12L18 7V17Z" fill="currentColor" />
          <Path d="M6 7H9V17H6V7Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

