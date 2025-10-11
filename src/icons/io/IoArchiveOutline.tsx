

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoArchiveOutline = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M80,152V408a40.12,40.12,0,0,0,40,40H392a40.12,40.12,0,0,0,40-40V152" />
        </G>
      </Svg>
    );
  }

