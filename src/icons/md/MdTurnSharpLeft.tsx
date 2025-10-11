

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdTurnSharpLeft = (props: IconProps) => {

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
          <Path d="M6,6.83L4.41,8.41L3,7l4-4l4,4L9.59,8.41L8,6.83V13h8c1.1,0,2,0.9,2,2v6h-2v-6H8c-1.1,0-2-0.9-2-2V6.83z" />
        </G>
      </Svg>
    );
  }

