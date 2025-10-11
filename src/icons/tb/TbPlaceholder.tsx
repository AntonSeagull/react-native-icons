

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbPlaceholder = (props: IconProps) => {

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
          <Path d="M10 20.415a8 8 0 1 0 3 -15.415h-3" />
          <Path d="M13 8l-3 -3l3 -3" />
          <Path d="M7 17l4 -4l-4 -4l-4 4z" />
        </G>
      </Svg>
    );
  }

