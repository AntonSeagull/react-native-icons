

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCrop = (props: IconProps) => {

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
          <Path d="M8 5v10a1 1 0 0 0 1 1h10" />
          <Path d="M5 8h10a1 1 0 0 1 1 1v10" />
        </G>
      </Svg>
    );
  }

