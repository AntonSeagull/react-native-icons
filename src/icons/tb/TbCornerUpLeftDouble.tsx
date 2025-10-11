

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCornerUpLeftDouble = (props: IconProps) => {

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
          <Path d="M19 18v-6a3 3 0 0 0 -3 -3h-7" />
          <Path d="M13 13l-4 -4l4 -4m-5 8l-4 -4l4 -4" />
        </G>
      </Svg>
    );
  }

