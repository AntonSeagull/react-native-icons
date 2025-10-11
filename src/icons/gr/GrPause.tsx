

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrPause = (props: IconProps) => {

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
          <Path d="M3,21 L9,21 L9,3 L3,3 L3,21 Z M15,21 L21,21 L21,3 L15,3 L15,21 Z" fill="none" />
        </G>
      </Svg>
    );
  }

