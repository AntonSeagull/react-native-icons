

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgShapeRhombus = (props: IconProps) => {

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
          <Path d="M12 6.34315L6.34317 12L12 17.6569L17.6569 12L12 6.34315ZM2.10052 12L12 21.8995L21.8995 12L12 2.10051L2.10052 12Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

