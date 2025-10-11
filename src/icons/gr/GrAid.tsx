

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrAid = (props: IconProps) => {

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
          <Path d="M1,22 L23,22 L23,6 L1,6 L1,22 Z M8,6 L16,6 L16,2 L8,2 L8,6 Z M8,14 L16,14 M12,10 L12,18" fill="none" />
        </G>
      </Svg>
    );
  }

