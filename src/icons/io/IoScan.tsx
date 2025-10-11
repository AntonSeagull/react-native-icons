

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoScan = (props: IconProps) => {

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
          <Path d="M342,444h46a56,56,0,0,0,56-56V342" />
          <Path d="M444,170V124a56,56,0,0,0-56-56H342" />
          <Path d="M170,444H124a56,56,0,0,1-56-56V342" />
          <Path d="M68,170V124a56,56,0,0,1,56-56h46" />
        </G>
      </Svg>
    );
  }

