

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrFolderOpen = (props: IconProps) => {

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
          <Path d="M5,2 L11,1.99999998 L13,6 L19,6 L19,10 L5,10 L5,2 Z M2,10 L22,10 L19,22 L5,22 L2,10 Z" fill="none" />
        </G>
      </Svg>
    );
  }

