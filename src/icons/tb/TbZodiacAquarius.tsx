

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbZodiacAquarius = (props: IconProps) => {

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
          <Path d="M3 10l3 -3l3 3l3 -3l3 3l3 -3l3 3" />
          <Path d="M3 17l3 -3l3 3l3 -3l3 3l3 -3l3 3" />
        </G>
      </Svg>
    );
  }

