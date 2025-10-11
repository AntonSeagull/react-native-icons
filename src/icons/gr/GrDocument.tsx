

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrDocument = (props: IconProps) => {

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
          <Path d="M14,1 L14,8 L21,8 M21,23 L3,23 L3,1 L15,1 L18,4 L21,7 L21,23 L21,23 L21,23 Z" fill="none" />
        </G>
      </Svg>
    );
  }

