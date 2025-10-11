

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbFlipVertical = (props: IconProps) => {

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
          <Path d="M12 3l0 18" />
          <Path d="M16 7l0 10l5 0l-5 -10" />
          <Path d="M8 7l0 10l-5 0l5 -10" />
        </G>
      </Svg>
    );
  }

