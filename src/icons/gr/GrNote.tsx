

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrNote = (props: IconProps) => {

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
          <Path d="M1,23 L16,23 L23,16 L23,1 L1,1 L1,23 Z M15,23 L15,15 L23,15" fill="none" />
        </G>
      </Svg>
    );
  }

