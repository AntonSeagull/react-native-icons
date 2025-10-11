

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbZip = (props: IconProps) => {

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
          <Path d="M16 16v-8h2a2 2 0 1 1 0 4h-2" />
          <Path d="M12 8v8" />
          <Path d="M4 8h4l-4 8h4" />
        </G>
      </Svg>
    );
  }

