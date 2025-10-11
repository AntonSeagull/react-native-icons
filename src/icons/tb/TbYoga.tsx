

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbYoga = (props: IconProps) => {

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
          <Path d="M12 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <Path d="M4 20h4l1.5 -3" />
          <Path d="M17 20l-1 -5h-5l1 -7" />
          <Path d="M4 10l4 -1l4 -1l4 1.5l4 1.5" />
        </G>
      </Svg>
    );
  }

