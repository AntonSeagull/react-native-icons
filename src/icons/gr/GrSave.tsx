

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrSave = (props: IconProps) => {

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
          <Path d="M3,2 L3,21 L21,21 L21,3 L12,3 L12,14 M8,11 L12,15 L16,11" fill="none" />
        </G>
      </Svg>
    );
  }

