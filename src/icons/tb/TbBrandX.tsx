

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandX = (props: IconProps) => {

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
          <Path d="M4 4l11.733 16h4.267l-11.733 -16z" />
          <Path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
        </G>
      </Svg>
    );
  }

