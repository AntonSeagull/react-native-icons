

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbTrack = (props: IconProps) => {

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
          <Path d="M4 15l11 -11m5 5l-11 11m-4 -8l7 7m-3.5 -10.5l7 7m-3.5 -10.5l7 7" />
        </G>
      </Svg>
    );
  }

