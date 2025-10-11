

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrTemplate = (props: IconProps) => {

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
          <Path d="M1,3 L23,3 L23,21 L1,21 L1,3 Z M1,8 L23,8 M7,8 L7,21" fill="none" />
        </G>
      </Svg>
    );
  }

