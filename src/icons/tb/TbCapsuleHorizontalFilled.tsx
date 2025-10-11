

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCapsuleHorizontalFilled = (props: IconProps) => {

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
          <Path d="M15 5h-6a7 7 0 1 0 0 14h6a7 7 0 0 0 7 -7l-.007 -.303a7 7 0 0 0 -6.993 -6.697z" />
        </G>
      </Svg>
    );
  }

