

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrColumns = (props: IconProps) => {

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
          <Path d="M17,2 L17,22 L17,2 Z M12,2 L12,22 L12,2 Z M7,2 L7,22 L7,2 Z M2,22 L22,22 L22,2 L2,2 L2,22 Z" fill="none" />
        </G>
      </Svg>
    );
  }

