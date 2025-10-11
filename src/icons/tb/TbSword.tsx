

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbSword = (props: IconProps) => {

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
          <Path d="M20 4v5l-9 7l-4 4l-3 -3l4 -4l7 -9z" />
          <Path d="M6.5 11.5l6 6" />
        </G>
      </Svg>
    );
  }

