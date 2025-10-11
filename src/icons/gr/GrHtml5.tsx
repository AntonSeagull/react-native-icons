

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrHtml5 = (props: IconProps) => {

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
          <Path d="M3,2 L21,2 L21,18 L12,22 L3,18 L3,2 Z M17,6 L8,6 L8,11 L16,11 L16,16 L12,17.5 L8,16 L8,14" fill="none" />
        </G>
      </Svg>
    );
  }

