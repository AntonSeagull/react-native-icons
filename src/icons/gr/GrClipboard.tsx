

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrClipboard = (props: IconProps) => {

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
          <Path d="M16,3 L21,3 L21,23 L3,23 L3,3 L3,3 L8,3 M8,1 L16,1 L16,6 L8,6 L8,1 Z" fill="none" />
        </G>
      </Svg>
    );
  }

